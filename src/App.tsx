import "./App.css";
import { AuthProvider } from "./state-management/auth";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TasksProvider } from "./state-management/tasks";
function App() {
  return (
    <>
      <TasksProvider>
        <AuthProvider>
          <NavBar />
          <HomePage />
        </AuthProvider>
      </TasksProvider>
    </>
  );
}

export default App;
