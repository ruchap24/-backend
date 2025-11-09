const dotenv = require("dotenv");
const { defineConfig } = require("prisma/config");

// Load environment variables from .env file
dotenv.config();

const databaseUrl = process.env.DATABASE_URL || "";

module.exports = defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: databaseUrl,
  },
});
