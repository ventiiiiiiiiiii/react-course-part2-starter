import LoginStatus from "./auth/LoginStatus";
import useCounterStore from "./counter/store";
import { useTasks } from "./tasks/TasksProvider";

const NavBar = () => {
  const { counter } = useCounterStore();
  const { tasks } = useTasks();
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">
        {tasks.length}, {counter}
      </span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
