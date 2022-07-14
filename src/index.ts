import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { getUsers } from "./endpoints/getUsers";
import { getTasks } from "./endpoints/getTasks";

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
app.get("/tasks/:taskId/users", getTasks)