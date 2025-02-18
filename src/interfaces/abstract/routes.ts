import type { FastifyTypedInstance } from "../../types/fastify"

abstract class Routes {
    public abstract registerRoutes(app: FastifyTypedInstance): void
}

export { Routes }
