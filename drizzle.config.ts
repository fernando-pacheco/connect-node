import type { Config } from "drizzle-kit"
import { vars } from "./src/config/vars"

export default {
    schema: "./src/drizzle/schema/*",
    out: "./src/drizzle/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: vars.DATABASE_URL,
    },
} satisfies Config
