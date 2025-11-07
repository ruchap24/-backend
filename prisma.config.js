"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("prisma/config");
require('dotenv').config();

const databaseUrl = process.env.DATABASE_URL || "";

/**
 * @type {import('@prisma/client').Prisma.Config}
 */
module.exports = {
  schema: "./prisma/schema.prisma",
  datasources: {
    db: {
      provider: "postgresql",
      url: databaseUrl,
    },
  },
};
exports.default = (0, config_1.defineConfig)({
    schema: "prisma/schema.prisma",
    migrations: {
        path: "prisma/migrations",
    },
    engine: "classic",
    datasource: {
        url: databaseUrl,
    },
});
