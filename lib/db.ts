import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

// Lazy singleton — only initializes when first API route is called, not at build time
let _db: ReturnType<typeof drizzle<typeof schema>> | null = null;

export function getDb() {
  if (_db) return _db;
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL environment variable is not set');
  // channel_binding=require is a wire-protocol param, not supported by the Neon HTTP driver
  const cleanUrl = url.replace(/([?&])channel_binding=[^&]*/g, '$1').replace(/[?&]$/, '');
  _db = drizzle(neon(cleanUrl), { schema });
  return _db;
}

export { schema };
