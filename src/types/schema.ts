import type { ZodArray, ZodObject, ZodTypeAny } from "zod"

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type SchemaType = ZodObject<any> | ZodArray<ZodTypeAny>

export type { SchemaType }
