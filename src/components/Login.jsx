import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthCOn } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

function Login() {
  const { UserLogInWithEmailPass, GoogleLogIn } = useContext(AuthCOn);
  const navigate = useNavigate();
  const [Error, SetError] = useState("");

  const HandelLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    UserLogInWithEmailPass(email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((err) => SetError(err.code));
  };

  const HandleGoogleLogIn = () => {
    GoogleLogIn().then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={HandelLogin}>
          <Card className="w-96 mx-auto">
            <CardHeader
              variant="gradient"
              color="red"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Crowd Cube
              </Typography>
            </CardHeader>

            <CardBody className="flex flex-col gap-4">
              <Input name="email" label="Email" size="lg" />
              <Input name="password" label="Password" size="lg" />
              {Error ? (
                <span className="text-red-400">
                  {Error.replace("auth/", "")}
                </span>
              ) : (
                ""
              )}
            </CardBody>
            <CardFooter className="pt-0">
              <Button type="submit" variant="gradient" fullWidth>
                Sign In
              </Button>
              <Button
                onClick={HandleGoogleLogIn}
                variant="outlined"
                size="lg"
                className="flex mt-2 h-12 border-blue-gray-200 items-center justify-center gap-2"
                fullWidth
              >
                <img
                  src={`https://www.material-tailwind.com/logos/logo-google.png`}
                  alt="google"
                  className="h-6 w-6"
                />{" "}
                sign in with google
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Don&apos;t have an account?
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                >
                  <Link to={"/Signup"}>Sign up</Link>
                </Typography>
              </Typography>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
}

export default Login;
