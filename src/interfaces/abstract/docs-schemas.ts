import type { FastifySchema } from "fastify"

abstract class DocsSchemas {
    public abstract get create(): { schema: FastifySchema }
    public abstract get get(): { schema: FastifySchema }
    public abstract get update(): { schema: FastifySchema }
    public abstract get delete(): { schema: FastifySchema }
}

export { DocsSchemas }
