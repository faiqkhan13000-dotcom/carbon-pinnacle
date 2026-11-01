import { Pool } from "pg";

/**
 * Singleton PostgreSQL connection pool.
 *
 * The pool is created once at module load time and reused across all
 * invocations within the same Node.js process / serverless warm instance.
 * Next.js hot-reload in development triggers module re-evaluation, so we
 * attach the instance to `globalThis` to survive HMR reloads without
 * opening multiple pools.
 */

declare global {
  // eslint-disable-next-line no-var
  var __pgPool: Pool | undefined;
}

function createPool(): Pool {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    console.warn(
      "[db] DATABASE_URL is not set. Database operations will fail until it is configured."
    );
  }

  return new Pool({
    connectionString,
    // Conservative pool sizing suitable for serverless/edge environments.
    max: 10,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 5_000,
  });
}

export const db: Pool =
  globalThis.__pgPool ?? (globalThis.__pgPool = createPool());
