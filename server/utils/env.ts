import process from 'node:process';
import { z } from 'zod';
import * as dotenv from 'dotenv';

dotenv.config();

export const envSchema = z.object({
  SEARCH_BASE_URL: z.string(),
  MUSICU_BASE_URL: z.string(),
});

const envParse = envSchema.safeParse(process.env);

if (!envParse.success) {
  console.error('[ERROR] Invalid environment variables:', JSON.stringify(envParse.error.format(), null, 4));
  process.exit(1);
}

export const env = envParse.data;
