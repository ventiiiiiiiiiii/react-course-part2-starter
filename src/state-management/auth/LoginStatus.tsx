import useAuth from "../Hooks/useAuth";
const LoginStatus = () => {
  const { username, dispatch } = useAuth();
  if (username !== "logged out" && username !== "")
    return (
      <>
        <div>
          <span className="mx-2">{username}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "LOGIN", username: "BOOM SHAKALAKA" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
