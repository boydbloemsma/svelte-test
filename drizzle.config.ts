import type { Config } from "drizzle-kit";

export default {
    schema: "./db/schema.ts",
    driver: "better-sqlite",
    dbCredentials: {
        url: "./db/database.sqlite",
    },
    out: "./drizzle",
} satisfies Config;

