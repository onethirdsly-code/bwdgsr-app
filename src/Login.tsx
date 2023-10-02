import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert(username);
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-primary">
      <div className="p-3 bg-white w-25">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter Username here"
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="password">password</label>
            <input
              type="password"
              placeholder="Enter Password here"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="d-grid gap-2 ">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
