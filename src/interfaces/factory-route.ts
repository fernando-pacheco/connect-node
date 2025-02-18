import type { RouteHandlerMethod, RouteShorthandOptions } from "fastify"
import type { FastifyTypedInstance } from "../types/fastify"

interface FactoryRouteProps {
    app: FastifyTypedInstance
    auth?: boolean
    cache?: { expiresIn: number } | null
    endpoint: string
    method: "get" | "post" | "put" | "delete"
    docs: RouteShorthandOptions
    resource: RouteHandlerMethod
}

export type { FactoryRouteProps }
