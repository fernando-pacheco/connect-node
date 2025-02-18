import type { FastifyReply } from "fastify"
import type { RequestData } from "../../types/resource"

abstract class Resources<T extends object> {
    public abstract create(request: RequestData<T>, reply: FastifyReply): Promise<void>

    public abstract get(request: RequestData<T>, reply: FastifyReply): Promise<void>

    public abstract update(request: RequestData<T>, reply: FastifyReply): Promise<void>

    public abstract delete(request: RequestData<T>, reply: FastifyReply): Promise<void>

    protected handleError(reply: FastifyReply, error: unknown, statusCode = 500) {
        const message = error instanceof Error ? error.message : "Internal server error."
        reply.status(statusCode).send({ message })
    }

    protected async ensureObjectExists<T, ID extends string | number>(
        id: ID,
        reply: FastifyReply,
        service: { getByID: (id: ID) => Promise<T | null> }
    ): Promise<T | null> {
        const object = await service.getByID(id)
        if (!object) {
            reply.status(404).send({ message: "Item não encontrado." })
            return null
        }
        return object
    }

    protected async validateDataExists(
        service: { validateData: (body: T) => Promise<T | { message: string }[]> },
        body: T,
        reply: FastifyReply
    ): Promise<void> {
        const messages = await service.validateData(body)
        if (typeof messages === "object") {
            return
        }

        reply.status(400).send(messages)
    }

    protected validateBodyExists(body: T, reply: FastifyReply): void {
        if (Object.keys(body).length === 0) {
            reply.status(400).send({ message: "Corpo de requisição vazio." })
            return
        }
        return
    }
}

export { Resources }
