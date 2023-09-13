import Elysia, { Context } from "elysia";
import { userModel } from "./schema";

type ReqCtxt = Context<{ body: unknown; params: Record<never, string>; query: undefined; headers: undefined; response: unknown; }, {}>

/**
 * Lista de usuarios
 * @param req 
 */
const getUsers = async () => {
    const dbUsers = await userModel.find({}).sort({ createdAt: -1 })
    return dbUsers
}
/**
 * 
 * @param req 
 */
const registerUser = async ({ body }: ReqCtxt) => {
    const dbUsers = await userModel.create(body)
    return dbUsers
}

/**
 * User Module
 */
export const usersModule = new Elysia()
    .get('/user', getUsers)
    .get('/user/id', () => 'User Detail')
    .post('/user', registerUser)
    .put('/user', () => 'User Detail')