import { Request, Response } from "express"
import connection from "../database/connection"

export const postTaskResponsable = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const taskId = req.params.taskId as string
        const { userId } = req.body

        const [ checkTaskIsNotAssigned ]= await connection.raw(`
        SELECT * FROM Responsibles
        WHERE taskId = '${taskId}'
        `)
        
        if (checkTaskIsNotAssigned[0]) {
            errorCode = 401
            throw new Error("Task already has responsable")
        }

        const setResponsable = await connection.raw(`
        INSERT INTO Responsibles (taskId, userId)
        VALUES ('${taskId}', '${userId}')
        `)

        res.status(200).send({ message: "Responsable added" })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }

}