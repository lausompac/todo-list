import { Request, Response } from "express"
import connection from "../database/connection"

export const putTaskStatus = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const taskId = req.params.taskId as string
        const { status } = req.body

        const [checkTaskExists] = await connection.raw(`
        SELECT * FROM Tasks
        WHERE id = '${taskId}'
        `)

        if (!checkTaskExists[0]) {
            errorCode = 401
            throw new Error("Task not found")
        }

        if (status !== "TO_DO" && status !== "DOING" && status !== "DONE") {
            errorCode = 401
            throw new Error("Status must be TO_DO, DOING or DONE")
        }


        const setTaskStatus = await connection.raw(`
        UPDATE Tasks
        SET status = '${status}'
        WHERE id = '${taskId}'
        `)

        res.status(200).send({ message: "Task status updated" })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}