import type { FastifyRequest } from "fastify"

type RequestData<Body = unknown> = FastifyRequest<{
    Body: Body
    Params: { id: string; role: string }
}>

export type { RequestData }
