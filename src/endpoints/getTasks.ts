import { Request, Response } from "express"
import connection from "../database/connection"

export const getTasks = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const busca = req.query.busca as string
        
        if (busca) {
            const [result] = await connection.raw(`
            SELECT * FROM Tasks
            WHERE LOWER(title) LIKE ('%${busca.toLowerCase()}%')
            `)
            return res.status(200).send({ tasks: result })
        }

        const [result] = await connection.raw(`
        SELECT * FROM Tasks
        `)
        return res.status(200).send({ tasks: result })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }

}