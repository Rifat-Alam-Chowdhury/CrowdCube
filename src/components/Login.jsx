import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthCOn } from "../Context/AuthContext";
import { Link } from "react-router-dom";

function Login() {
  const { UserLogInWithEmailPass } = useContext(AuthCOn);
  const navigate = useNavigate();

  const HandelLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    UserLogInWithEmailPass(email, password)
      .then((userCredential) => {
        navigate("/home");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((err) => console.log(err.code));
  };

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={HandelLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <button className="btn">google login</button>
              </div>
            </form>
            <h1>
              new to the website? <Link to={"/Signup"}>Signup</Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
