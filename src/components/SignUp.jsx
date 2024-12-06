import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthCOn } from "../Context/AuthContext";
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
import { Link, NavLink } from "react-router-dom";

function SignUp() {
  const { CreateNewUser, GoogleLogIn } = useContext(AuthCOn);
  const navigate = useNavigate();
  let email;
  let password;
  let displayName;
  let photoURL;
  const HandelLogin = (e) => {
    e.preventDefault();

    email = e.target.email.value;
    password = e.target.password.value;

    displayName = e.target.name.value;

    photoURL = e.target.PhotoUrl.value;

    console.log(email, password, displayName, photoURL);
    CreateNewUser(email, password, displayName, photoURL).then(() => {
      navigate("/");
    });
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
              <Input name="name" label="Name" size="lg" />
              <Input name="email" label="Email" size="lg" />
              <Input name="password" label="Password" size="lg" />
              <Input name="PhotoUrl" label="PhotoUrl" size="lg" />
              <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button type="submit" variant="gradient" fullWidth>
                Sign Up
              </Button>
              <Button onClick={HandleGoogleLogIn} variant="gradient" fullWidth>
                google
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Already have an account?
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                >
                  <Link to={"/login"}>Sign In</Link>
                </Typography>
              </Typography>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
}

export default SignUp;
