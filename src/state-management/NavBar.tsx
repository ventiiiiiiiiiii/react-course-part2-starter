import { useContext } from "react";
import LoginStatus from "./auth/LoginStatus";
import TasksContext from "./tasks/tasksContext";
import { useTasks } from "./tasks/TasksProvider";

const NavBar = () => {
  const { tasks } = useTasks();
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
