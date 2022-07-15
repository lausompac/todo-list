import { Request, Response } from "express"
import connection from "../database/connection"

export const putUserNickname = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userId = req.params.userId as string
        const { nickname } = req.body

        const [ checkUserExists ] = await connection.raw(`
        SELECT * FROM Users
        WHERE id = '${userId}'
        `)

        if (!checkUserExists[0]) {
            errorCode = 401
            throw new Error("User not found")
        }

        if (nickname.length < 3) {
            errorCode = 401
            throw new Error("Nickname must be at least 3 characters")
        }

        if (typeof nickname !== "string") {
            errorCode = 401
            throw new Error("Nickname must be a string")
        }

        const setNickname = await connection.raw(`
        UPDATE Users
        SET nickname = '${nickname}'
        WHERE id = '${userId}'
        `)

        res.status(200).send({ message: "Nickname updated" })
        
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
        
}