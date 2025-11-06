import { defineConfig } from "prisma/config";
import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Get DATABASE_URL from environment
// This will be loaded from .env file or process.env
const databaseUrl = process.env.DATABASE_URL || "";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: databaseUrl,
  },
});
