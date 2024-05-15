import useAuthStore from "./store";
const LoginStatus = () => {
  const { username, Login, Logout } = useAuthStore();
  if (username !== "")
    // const Logout = useAuthStore(s => s.Logout); --- > for specific rerendering if only a specific item changes

    return (
      <>
        <div>
          <span className="mx-2">{username}</span>
          <a onClick={() => Logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => Login("boom")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
