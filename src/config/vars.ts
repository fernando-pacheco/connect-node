import { z } from "zod"

const schema = z.object({
    NODE_ENV: z.string().default("dev"),
    API_PORT: z.coerce.number().default(3333),
    API_URL: z.string().default("localhost:3333"),
})

const vars = schema.parse(process.env)

export { vars }
