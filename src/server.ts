import { type FastifyInstance, fastify } from "fastify"
import type { ZodTypeProvider } from "fastify-type-provider-zod"
import { vars } from "./config/vars"
import { corsPlugin } from "./plugins/cors"
import { swaggerPlugin } from "./plugins/swagger"
import { validatorPlugin } from "./plugins/validators"
import { Routes } from "./routes"

class Server {
    private AMB: string

    constructor(
        private app: FastifyInstance = fastify({
            logger: true,
        }).withTypeProvider<ZodTypeProvider>(),
        private routes: Routes = new Routes(),
        private environments: Record<string, string> = {
            qa: "Homologação",
            prod: "Produção",
            dev: "Desenvolvimento",
        }
    ) {
        this.AMB = this.environments[vars.NODE_ENV]
    }

    private async configure() {
        validatorPlugin(this.app)
        await swaggerPlugin(this.app, this.AMB)
        await corsPlugin(this.app)
    }

    private registerRoutes() {
        this.app.register(this.routes.register)
    }

    public async start() {
        try {
            await this.configure()
            this.registerRoutes()
            const port = vars.API_PORT
            const path = vars.API_URL
            await this.app.listen({ port, path })
        } catch (err) {
            console.error("Error starting server:", err)
            process.exit(1)
        }
    }
}

const server = new Server()
server.start()
