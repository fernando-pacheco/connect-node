abstract class Services<T, ID = string | number> {
    abstract create(body: T): Promise<T | { message: string }[]>
    abstract getByID(id: ID): Promise<T | null>
    abstract update(id: ID, body: T): Promise<T | { message: string }[]>
    abstract deleteByID(id: ID): Promise<void>
}

export { Services }
