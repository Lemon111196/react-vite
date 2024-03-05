export interface ITodoStore {
    loading: boolean;
    todoList: ITodoList[]
}
export interface ITodoList {
    id: string;
    title: string;
    content: string;
    status: string;
}