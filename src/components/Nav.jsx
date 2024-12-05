import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [status, setStatus] = useState(false);

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
            <ul className="menu bg-base-200  min-h-full  p-4">
              {/* Sidebar content here */}
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
            </ul>
          </div>
        </div>

        {/* logo */}
        <div className="">
          <a className="btn btn-ghost text-xl">CrowdCube</a>
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

        {/* login */}
        <div className=" border-red-500   gap-5">
          <div>
            {status ? (
              <button onClick={() => setStatus(false)}>LogOut</button>
            ) : (
              <Link to={"/login"}>
                <button onClick={() => setStatus(true)}>Login</button>
              </Link>
            )}
          </div>

          <div className="w-10 rounded-full">
            <img
              src={
                status
                  ? "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  : ""
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
