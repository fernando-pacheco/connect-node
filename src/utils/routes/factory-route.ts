import { FactoryRouteProps } from "../../interfaces/factory-route"

function FactoryRoute({ app, endpoint, method, docs, resource }: FactoryRouteProps) {
    app[method](endpoint, docs, resource)
}

export { FactoryRouteProps }
