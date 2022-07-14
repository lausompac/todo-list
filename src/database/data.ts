import { STATUS_LIST, Task, User } from "../types";

// Lista de Usuários do projeto ToDoList
export const users: User[] = [
    {
        id: "1",
        name: "Clara",
        nickname: "Clarinha",
        email: "clara@lbn.com"
    },
    {
        id: "2",
        name: "Índio",
        nickname: "Líndio",
        email: "indio@lbn.com"
    },
    {
        id: "3",
        name: "Yuzo",
        nickname: "Uuzo",
        email: "yuuzo@lbn.com"
    },
    {
        id: "4",
        name: "Chijo",
        nickname: "Choji",
        email: "chijoo@lbn.com"
    },
    {
        id: "5",
        name: "Amanda",
        nickname: "Mandinha",
        email: "amandaa@lbn.com"
    }
];

// Lista de Tarefas do projeto ToDoList
export const tasks: Task[] = [
    {
        id: "1",
        title: "Desenvolvimento do Time",
        description: "Criar metas objetivas para que todo o time possa desenvolver.",
        dueDate: "2022-08-22",
        status: STATUS_LIST.TO_DO,
        creatorUserId: "4"
    },
    {
        id: "2",
        title: "Preparação de materiais",
        description: "Ajustar materiais para elaboração de novas atividades.",
        dueDate: "2022-09-01",
        status: STATUS_LIST.DOING,
        creatorUserId: "3"
    },
    {
        id: "3",
        title: "Cronograma do Semestre",
        description: "Adequar as diretrizes da empresa conforme o solicitado pela gestão.",
        dueDate: "2022-07-12",
        status: STATUS_LIST.DONE,
        creatorUserId: "4"
    },
    {
        id: "4",
        title: "Reparo de QA",
        description: "Ajustar painéis de exibição do site Protery conforme solicitado pelo cliente.",
        dueDate: "2022-10-15",
        status: STATUS_LIST.TO_DO,
        creatorUserId: "5"
    },
    {
        id: "5",
        title: "Celebração de Fim de Ano",
        description: "Organizar festa do fim do ano de 2022 da empresa",
        dueDate: "2022-11-25",
        status: STATUS_LIST.DOING,
        creatorUserId: "1"
    },
    {
        id: "6",
        title: "Reunião de Desempenho",
        description: "Agendar e ajustar Avaliação de Desempenho da equipe.",
        dueDate: "2022-09-12",
        status: STATUS_LIST.DOING,
        creatorUserId: "2"
    }
];

// Lista de usuários responsáveis por tarefas do sistema ToDoList.
export const responsibles = [
    {
        userId: "2",
        taskId: "6"
    },
    {
        userId: "1",
        taskId: "5"
    },
    {
        userId: "2",
        taskId: "5"
    },
    {
        userId: "3",
        taskId: "2"
    }
];