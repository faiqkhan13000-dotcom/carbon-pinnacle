# Carbon Pinnacle

> Expert UK carbon reporting and compliance consultancy — Next.js web application.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: PostgreSQL (via `pg`)
- **Validation**: Zod

## Getting Started

### 1. Clone & Install

```bash
cd carbonnova11
npm install
```

### 2. Set Up Environment Variables

```bash
cp .env.local.example .env.local
# Edit .env.local with your PostgreSQL credentials
```

### 3. Set Up the Database

Create a PostgreSQL database and run the schema:

```bash
createdb carbon_pinnacle
psql -d carbon_pinnacle -f schema.sql
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, services grid, process teaser |
| `/ppn-006` | PPN 006 Carbon Reduction Plans landing page |
| `/secr` | SECR Reporting support page |
| `/carbon-footprint` | Business Carbon Footprint (Scope 1, 2, 3) |
| `/consultancy` | Carbon Reduction Consultancy |
| `/ongoing-management` | Ongoing Carbon Management packages |
| `/how-it-works` | 7-step transparent process page |
| `/about` | About Carbon Pinnacle |
| `/contact` | Quote Request form |
| `/faqs` | Frequently Asked Questions |

## API Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/inquiries` | `POST` | Submit a quote request inquiry |

### POST `/api/inquiries` Payload

```json
{
  "business_name": "Acme Ltd",
  "contact_name": "Jane Smith",
  "email": "jane@acme.co.uk",
  "phone": "07700 900000",
  "industry": "Construction",
  "service_interested": "PPN_006",
  "previous_reporting": false,
  "tender_deadline": "2024-06-30",
  "specific_requirements": "We need a CRP for a £8m NHS contract tender."
}
```

`service_interested` must be one of: `PPN_006`, `SECR`, `CARBON_FOOTPRINT`, `CONSULTANCY`, `ONGOING_MANAGEMENT`, `OTHER`

## Database Schema

See [`schema.sql`](./schema.sql) for the full PostgreSQL schema.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Add `DATABASE_URL` environment variable in Vercel dashboard
4. Deploy

### Self-Hosted

```bash
npm run build
npm start
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | Yes | PostgreSQL connection string |

## License

© 2024 Carbon Pinnacle Ltd. All rights reserved.
