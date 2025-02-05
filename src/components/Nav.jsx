import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthCOn } from "../Context/AuthContext";
import { Button } from "@material-tailwind/react";
import axios from "axios";

function Nav() {
  const { user, SigNout, LogInuser, GoogleLogIn } = useContext(AuthCOn);

  const [CurrentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    fetch("import.meta.env.VITE_PORTfirebaseuid")
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data.find((user) => user.email === LogInuser));
      })
      .catch((err) => {
        //(err);
      });
  }, [LogInuser]);

  const navigate = useNavigate();

  const handleLogOut = () => {
    SigNout().then(() => {
      axios
        .post("http://localhost:5000/logout", {}, { withCredentials: true })
        .then((res) => console.log(res.data));
      // navigate("/login");
    });
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const HandleGoogleLogIn = () => {
    GoogleLogIn().then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <div className="navbar justify-between  ">
        {/* //drawer */}
        <div className="drawer lg:hidden w-10  z-10">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content ">
            <label htmlFor="my-drawer" className="border-none bg-transparent ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div>
          <div className="drawer-side w-full">
            <label
              htmlFor="my-drawer"
              //   aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu  gap-5 bg-base-200  min-h-full  p-4">
              {/* Sidebar content here */}
              <div className="grid gap-5 p-2 font-semibold my-20">
                <Link
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-yellow-500" : "text-black"
                    } rounded-xl  p-1`
                  }
                >
                  Home
                </Link>
                <Link
                  to="/AllCampaign"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-yellow-500" : "text-black"
                    } rounded-xl  p-1`
                  }
                >
                  All Campaign
                </Link>
                <Link
                  to="/AddNewCampaign"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-yellow-500" : "text-black"
                    } rounded-xl  p-1`
                  }
                >
                  Add New Campaign
                </Link>
                <Link
                  to="/MyCampaigns"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-yellow-500" : "text-black"
                    } rounded-xl  p-1`
                  }
                >
                  My Campaign
                </Link>
                <Link
                  to="/MyDonations"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-yellow-500" : "text-black"
                    } rounded-xl  p-1`
                  }
                >
                  My Donations
                </Link>
              </div>
            </ul>
          </div>
        </div>

        {/* logo */}
        <div className="">
          <Link to={"/"} className="btn btn-ghost text-xl">
            CrowdCube
          </Link>
        </div>

        {/* links */}
        <div className=" gap-10 hidden lg:flex">
          <Link
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-yellow-500" : "text-black"} rounded-xl  p-1`
            }
          >
            Home
          </Link>
          <Link
            to="/AllCampaign"
            className={({ isActive }) =>
              `${isActive ? "text-yellow-500" : "text-black"} rounded-xl  p-1`
            }
          >
            All Campaign
          </Link>
          <Link
            to="/AddNewCampaign"
            className={({ isActive }) =>
              `${isActive ? "text-yellow-500" : "text-black"} rounded-xl  p-1`
            }
          >
            Add New Campaign
          </Link>
          <Link
            to="/MyCampaigns"
            className={({ isActive }) =>
              `${isActive ? "text-yellow-500" : "text-black"} rounded-xl  p-1`
            }
          >
            My Campaign
          </Link>
          <Link
            to="/MyDonations"
            className={({ isActive }) =>
              `${isActive ? "text-yellow-500" : "text-black"} rounded-xl  p-1`
            }
          >
            My Donations
          </Link>
        </div>

        <div className="flex gap-5">
          {/* login */}
          <div>
            <div>
              {user ? (
                <button onClick={handleLogOut}>LogOut</button>
              ) : (
                <Link to={"/login"}>
                  <button>Login</button>
                </Link>
              )}
            </div>
          </div>
          {/* profile */}
          <div className="relative ">
            {user ? (
              <div>
                {/* Button to toggle the dropdown */}

                <button onClick={toggleDropdown}>
                  <img
                    className="w-14 rounded-full"
                    src={CurrentUser?.photoURL}
                    alt=""
                  />
                </button>

                {isOpen && (
                  <div className="z-20 absolute top-12 right-0 border-2 p-4 bg-white shadow-lg rounded-md w-60">
                    <h1>{CurrentUser?.displayName}</h1>
                    <img
                      className="w-10"
                      src={CurrentUser?.photoURL}
                      alt={CurrentUser?.displayName}
                    />
                    <h1>{CurrentUser?.email}</h1>
                    <h1>
                      {CurrentUser?.emailVerified ? "Verified" : "Not Verified"}
                    </h1>
                    <h1>Provider: {CurrentUser?.providerId}</h1>
                  </div>
                )}
              </div>
            ) : (
              <Button
                onClick={HandleGoogleLogIn}
                variant="gradient"
                size="sm"
                className="flex  mt-2 h-12 border-blue-gray-200 items-center justify-center gap-2"
                fullWidth
              >
                <img
                  src={`https://www.material-tailwind.com/logos/logo-google.png`}
                  alt="google"
                  className="h-6 w-6 "
                />{" "}
                sign in with google
              </Button>
            )}
            <div className=" flex justify-end mr-5">
              <label className="swap swap-rotate ">
                {/* This hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      document.documentElement.setAttribute(
                        "data-theme",
                        "light"
                      );
                    } else {
                      document.documentElement.setAttribute(
                        "data-theme",
                        "dark"
                      );
                    }
                  }}
                />
                {/* Moon Icon for dark theme */}
                <svg
                  className="swap-on w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
                {/* Sun Icon for light theme */}
                <svg
                  className="swap-off w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
