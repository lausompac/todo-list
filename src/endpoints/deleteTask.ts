import { Request, Response } from "express"
import connection from "../database/connection"

export const deleteTask = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const taskId = req.params.taskId as string

        const [checkTaskExists] = await connection.raw(`
        SELECT * FROM Tasks
        WHERE id = '${taskId}'
        `)

        if (!checkTaskExists[0]) {
            errorCode = 401
            throw new Error("Task not found")
        }

        const deleteResponsible = await connection.raw(`
        DELETE FROM Responsibles
        WHERE taskId = '${taskId}'
        `)

        const deleteTask = await connection.raw(`
        DELETE FROM Tasks
        WHERE id = '${taskId}'
        `)

        res.status(200).send({ message: "Task deleted" })

        // também pode ser feito direto adicionando a query DELETE CASCADE no campo FOREIGN KEY
        
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
        
}