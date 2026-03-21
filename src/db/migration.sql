-- ClawSpa database migration
-- Run this in the Supabase SQL editor

-- Users table
CREATE TABLE IF NOT EXISTS clawspa_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  plan text NOT NULL DEFAULT 'solo',
  stripe_customer_id text,
  created_at timestamptz DEFAULT now()
);

-- API keys table
CREATE TABLE IF NOT EXISTS clawspa_api_keys (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key_hash text UNIQUE NOT NULL,
  user_id uuid NOT NULL REFERENCES clawspa_users(id) ON DELETE CASCADE,
  plan text NOT NULL DEFAULT 'solo',
  scans_this_month int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Scans table (authenticated users)
CREATE TABLE IF NOT EXISTS clawspa_scans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES clawspa_users(id) ON DELETE CASCADE,
  clawspa_id text,
  scan_data jsonb,
  analysis_result jsonb,
  created_at timestamptz DEFAULT now()
);

-- Trial scans table (unauthenticated)
CREATE TABLE IF NOT EXISTS clawspa_trials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  clawspa_id text UNIQUE NOT NULL,
  workspace_hash text,
  ip_hash text,
  scan_data jsonb,
  analysis_result jsonb,
  created_at timestamptz DEFAULT now()
);

-- Waitlist table
CREATE TABLE IF NOT EXISTS clawspa_waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_clawspa_api_keys_key_hash ON clawspa_api_keys(key_hash);
CREATE INDEX IF NOT EXISTS idx_clawspa_trials_clawspa_id ON clawspa_trials(clawspa_id);
CREATE INDEX IF NOT EXISTS idx_clawspa_scans_user_id ON clawspa_scans(user_id);

-- RLS Policies
ALTER TABLE clawspa_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE clawspa_api_keys ENABLE ROW LEVEL SECURITY;
ALTER TABLE clawspa_scans ENABLE ROW LEVEL SECURITY;
ALTER TABLE clawspa_trials ENABLE ROW LEVEL SECURITY;
ALTER TABLE clawspa_waitlist ENABLE ROW LEVEL SECURITY;

-- Service role has full access (API routes use service role key)
CREATE POLICY "Service role full access on clawspa_users"
  ON clawspa_users FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY "Service role full access on clawspa_api_keys"
  ON clawspa_api_keys FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY "Service role full access on clawspa_scans"
  ON clawspa_scans FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY "Service role full access on clawspa_trials"
  ON clawspa_trials FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY "Service role full access on clawspa_waitlist"
  ON clawspa_waitlist FOR ALL
  USING (auth.role() = 'service_role');

-- Users can read their own data
CREATE POLICY "Users can read own data"
  ON clawspa_users FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can read own scans"
  ON clawspa_scans FOR SELECT
  USING (auth.uid() = user_id);
