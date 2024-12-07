import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthCOn } from "../Context/AuthContext";

function Nav() {
  const { user, SigNout, LogInuser } = useContext(AuthCOn);

  const [CurrentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/firebaseuid")
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data.find((user) => user.email === LogInuser));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [LogInuser]);

  const navigate = useNavigate();

  // console.log(user);

  const handleLogOut = () => {
    SigNout().then(() => {
      navigate("/login");
    });
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
                  profile
                  {/* <img
                    className="w-14 rounded-full"
                    src={CurrentUser?.photoURL}
                    alt=""
                  /> */}
                </button>

                {isOpen && (
                  <div className="border-red-600 absolute top-12 right-0 border-2 p-4 bg-white shadow-lg rounded-md w-60">
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
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
