import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
function LoginForm() {
  const { register, handleSubmit, reset } = useForm();
  const { logIn } = useContext(AuthContext);
  const history = useHistory();
  const onSubmit = async (formData) => {
    await logIn(formData);
    reset();
    history.push("/friends");
  };

  return (
    <div className="loginFormMainDiv">
      <div>
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <span>USERNAME</span>
            <input
              type="text"
              placeholder="Username"
              {...register("username")}
            />
          </label>
          <label>
            <span>PASSWORD</span>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
          </label>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
