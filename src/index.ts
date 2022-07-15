import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { getUsers } from "./endpoints/getUsers";
import { getTasks } from "./endpoints/getTasks";
import { getTaskResponsable } from "./endpoints/getTaskResponsable";
import { postTaskResponsable } from "./endpoints/postTaskResponsable";
import { putUserNickname } from "./endpoints/putUserNickname";
import { putTaskStatus } from "./endpoints/putsTaskStatus";
import { deleteTask } from "./endpoints/deleteTask";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

// Endpoint com o callback vindo por import da pasta endpoints
app.get("/ping", ping)

// GET Lista de usuários
app.get("/users", getUsers)

//GET Lista de tarefas
app.get("/tasks", getTasks)

// GET Usuário responsável por uma tarefa
app.get("/tasks/:taskId/users", getTaskResponsable)

// POST Adicionar usuário responsável por uma tarefa
app.post("/tasks/:taskId/users", postTaskResponsable)

// PUT Editar apelido de um usuário
app.put("/users/:userId", putUserNickname)

// PUT Editar status de uma tarefa
app.put("/tasks/:taskId", putTaskStatus)

// DELETE tarefa
app.delete("/tasks/:taskId", deleteTask)