import React, { ReactNode, useReducer } from "react";
import TasksContext from "./tasksContext";
import { useContext } from "react";

export const useTasks = () => useContext(TasksContext);

export interface Task {
  id: number;
  title: string;
}

interface addTask {
  type: "ADD";
  task: Task;
}

interface deleteTask {
  type: "DELETE";
  taskId: number;
}

export type taskAction = deleteTask | addTask;

const tasksReducer = (tasks: Task[], action: taskAction) => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      return tasks.filter((t) => t.id !== action.taskId);
  }
};

interface Props {
  children: ReactNode;
}
const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
