import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

// ─── Normalisation Helper ────────────────────────────────────────────────────

function normaliseService(service?: unknown): string {
  if (typeof service !== "string") return "OTHER";
  const s = service.toUpperCase();
  if (s.includes("PPN")) return "PPN_006";
  if (s.includes("SECR")) return "SECR";
  if (s.includes("FOOTPRINT")) return "CARBON_FOOTPRINT";
  if (s.includes("CONSULTANCY")) return "CONSULTANCY";
  if (s.includes("ONGOING") || s.includes("MANAGEMENT")) return "ONGOING_MANAGEMENT";
  if (s === "PPN_006" || s === "SECR" || s === "CARBON_FOOTPRINT" || s === "CONSULTANCY" || s === "ONGOING_MANAGEMENT") {
    return s;
  }
  return "OTHER";
}

function normaliseBoolean(val?: unknown): boolean {
  if (typeof val === "boolean") return val;
  if (typeof val === "string") {
    const s = val.toLowerCase().trim();
    return s === "true" || s === "yes" || s === "1";
  }
  return false;
}

// ─── Validation Schema ────────────────────────────────────────────────────────

const InquirySchema = z.object({
  business_name: z.string().min(2, "Business name must be at least 2 characters."),
  contact_name: z.string().min(2, "Contact name must be at least 2 characters."),
  email: z.string().email("A valid email address is required."),
  phone: z.string().optional().nullable(),
  industry: z.string().optional().nullable(),
  service_interested: z.enum(
    [
      "PPN_006",
      "SECR",
      "CARBON_FOOTPRINT",
      "CONSULTANCY",
      "ONGOING_MANAGEMENT",
      "OTHER",
    ] as const
  ),
  previous_reporting: z.boolean().default(false),
  tender_deadline: z.string().optional().nullable(),
  specific_requirements: z.string().optional().nullable(),
});

type InquiryInput = z.infer<typeof InquirySchema>;

// ─── POST Handler ─────────────────────────────────────────────────────────────

export async function POST(request: NextRequest): Promise<NextResponse> {
  // 1. Parse JSON body
  let rawBody: Record<string, unknown>;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON in request body." },
      { status: 400 }
    );
  }

  // 2. Normalise field names (support both camelCase and snake_case)
  const normalisedData = {
    business_name: rawBody.business_name || rawBody.businessName,
    contact_name: rawBody.contact_name || rawBody.contactName,
    email: rawBody.email,
    phone: rawBody.phone || null,
    industry: rawBody.industry || null,
    service_interested: normaliseService(rawBody.service_interested || rawBody.service),
    previous_reporting: normaliseBoolean(rawBody.previous_reporting ?? rawBody.previousReporting),
    tender_deadline: (rawBody.tender_deadline || rawBody.tenderDeadline || null) as string | null,
    specific_requirements: (rawBody.specific_requirements || rawBody.requirements || null) as string | null,
  };

  // 3. Validate with Zod
  const parsed = InquirySchema.safeParse(normalisedData);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Validation failed.",
        details: parsed.error.format(),
      },
      { status: 400 }
    );
  }

  const data: InquiryInput = parsed.data;

  // 4. Guard: ensure DATABASE_URL is configured
  if (!process.env.DATABASE_URL) {
    console.warn(
      "[api/inquiries] DATABASE_URL is not set — simulated receipt for local/mock demo."
    );
    // In demo / preview without active DB, return 201 so the UI behaves gracefully
    return NextResponse.json(
      {
        success: true,
        message: "Thank you — we'll be in touch within 1 business day. (Mock mode: DB not configured)",
      },
      { status: 201 }
    );
  }

  // 5. Insert into the database
  try {
    await db.query(
      `INSERT INTO inquiries (
        business_name,
        contact_name,
        email,
        phone,
        industry,
        service_interested,
        previous_reporting,
        tender_deadline,
        specific_requirements,
        created_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW())`,
      [
        data.business_name,
        data.contact_name,
        data.email,
        data.phone || null,
        data.industry || null,
        data.service_interested,
        data.previous_reporting ?? false,
        data.tender_deadline && data.tender_deadline.trim() !== "" ? data.tender_deadline : null,
        data.specific_requirements || null,
      ]
    );
  } catch (err) {
    console.error("[api/inquiries] Database insert failed:", err);
    return NextResponse.json(
      {
        success: false,
        error:
          "We encountered an issue saving your enquiry. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }

  // 6. Success
  return NextResponse.json(
    {
      success: true,
      message: "Thank you — we'll be in touch within 1 business day.",
    },
    { status: 201 }
  );
}

// ─── GET Handler (not allowed) ────────────────────────────────────────────────

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    { success: false, error: "Method Not Allowed. Use POST to submit an enquiry." },
    {
      status: 405,
      headers: { Allow: "POST" },
    }
  );
}
