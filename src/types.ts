//  Enum que representa os status de uma tarefa.
export enum STATUS_LIST {
    TO_DO = "TO_DO",
    DOING = "DOING",
    DONE = "DONE"
};

// Type que representa um usuário.
export type User = {
    id: string,
    name: string,
    nickname: string,
    email: string
};

// Type que representa uma tarefa.
export type Task = {
    id: string,
    title: string,
    description: string,
    dueDate: string,
    status: STATUS_LIST,
    creatorUserId: string
};