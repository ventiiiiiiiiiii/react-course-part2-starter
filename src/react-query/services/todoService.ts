import APIClient from "./apiClient";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

export const todoClient = new APIClient<Todo>("/todos");
