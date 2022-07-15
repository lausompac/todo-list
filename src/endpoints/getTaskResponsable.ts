import { Request, Response } from "express"
import connection from "../database/connection"

export const getTaskResponsable = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const taskId = req.params.taskId as string

        const [checkTask] = await connection.raw(`
        SELECT * FROM Tasks
        WHERE id = '${taskId}'
        `)

        if (!checkTask[0]) {
            errorCode = 401
            throw new Error("Task not found")
        }

        const [result] = await connection.raw(`
        SELECT Users.id, Users.nickname
        FROM Responsibles
        JOIN Users
        ON Responsibles.userId = Users.id
        WHERE taskId = '${taskId}'
        `)

        if (!result[0]) {
            errorCode = 401
            throw new Error("Task don't have responsable")
        }

        res.status(200).send({ users: result })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }


}