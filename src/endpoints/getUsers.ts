import { Request, Response } from "express"
import connection from "../database/connection"

export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const busca = req.query.busca as string

        if(busca) {
            const [ result ] = await connection.raw(`
            SELECT * FROM Users
            WHERE LOWER(name) LIKE ('%${busca.toLowerCase()}%')
            `)

            return res.status(200).send({ users: result })
        }

        const [ result ] = await connection.raw(`
        SELECT * FROM Users
        `)

        return res.status(200).send({ users: result })
        
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}