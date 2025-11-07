"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("prisma/config");
var dotenv = require("dotenv");
// Load environment variables from .env file
dotenv.config();
// Get DATABASE_URL from environment
// This will be loaded from .env file or process.env
var databaseUrl = process.env.DATABASE_URL || "";
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
