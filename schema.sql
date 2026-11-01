-- Carbon Pinnacle Database Schema
-- PostgreSQL schema for inquiry management

CREATE TABLE IF NOT EXISTS inquiries (
  id                   SERIAL PRIMARY KEY,
  business_name        VARCHAR(255) NOT NULL,
  contact_name         VARCHAR(255) NOT NULL,
  email                VARCHAR(255) NOT NULL,
  phone                VARCHAR(50),
  industry             VARCHAR(100),
  service_interested   VARCHAR(50) NOT NULL CHECK (
    service_interested IN (
      'PPN_006',
      'SECR',
      'CARBON_FOOTPRINT',
      'CONSULTANCY',
      'ONGOING_MANAGEMENT',
      'OTHER'
    )
  ),
  previous_reporting   BOOLEAN DEFAULT FALSE,
  tender_deadline      DATE,
  specific_requirements TEXT,
  created_at           TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_inquiries_email ON inquiries (email);
CREATE INDEX IF NOT EXISTS idx_inquiries_service ON inquiries (service_interested);
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries (created_at DESC);
