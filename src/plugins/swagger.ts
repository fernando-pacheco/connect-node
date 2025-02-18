import { fastifySwagger } from "@fastify/swagger"
import { fastifySwaggerUi } from "@fastify/swagger-ui"
import type { FastifyInstance } from "fastify"
import { jsonSchemaTransform } from "fastify-type-provider-zod"

async function swaggerPlugin(app: FastifyInstance, environment: string) {
    await app.register(fastifySwagger, {
        openapi: {
            info: {
                title: `NLW Connect - API ${environment}`,
                version: "1.0.0",
            },
        },
        transform: jsonSchemaTransform,
    })

    await app.register(fastifySwaggerUi, {
        routePrefix: "/api",
    })
}

export { swaggerPlugin }
