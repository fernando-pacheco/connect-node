import type { FastifyInstance } from "fastify"
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod"

function validatorPlugin(app: FastifyInstance) {
    app.setValidatorCompiler(validatorCompiler)
    app.setSerializerCompiler(serializerCompiler)
}

export { validatorPlugin }
