import React from "react";
import { Task, taskAction } from "./TasksProvider";

interface taskContextType {
  tasks: Task[];
  dispatch: React.Dispatch<taskAction>;
}

const TasksContext = React.createContext<taskContextType>(
  {} as taskContextType
);

export default TasksContext;
