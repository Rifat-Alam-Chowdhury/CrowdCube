import Swal from "sweetalert2";

import React, { useContext, useState } from "react";
import { AuthCOn } from "../Context/AuthContext";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function Add_New_Campaign() {
  const { user } = useContext(AuthCOn);
  const [confirme, setconfirme] = useState([]);
  const navigate = useNavigate();

  const FormInfo = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const cap = e.target.cap.value;
    const url = e.target.url.value;
    const email = user.email;
    const option = e.target.option.value;
    const date = e.target.date.value;

    setconfirme({ email, option, title, cap, url, date });
  };

  const COnfirmedAndSentToDataBase = () => {
    //crowdcudee-backend.vercel.app/
    //localhost:5000/
    fetch("http://localhost:5000/formdetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(confirme),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Your Campaign Has Been Added",
          icon: "success",
        });
        setconfirme([]);
        navigate("/AllCampaign");
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <div className="flex ">
        <div className="  lg:w-1/2">
          <h1 className="text-center">
            Welcome,<span className="font-extrabold"> {user?.displayName}</span>
          </h1>
          <form onSubmit={FormInfo} className="card-body">
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
                <span className="label-text">Campaign Type</span>
              </label>
              <select
                name="option"
                className="select input input-bordered select-ghost w-full border-2 max-w-xs"
              >
                <option disabled selected>
                  Select One
                </option>
                <option>personal issue</option>
                <option>startup</option>
                <option>business</option>
                <option>creative ideas</option>
              </select>
              <datalist id="options">
                <option value="Personal Issue" />
                <option value="Startup" />
                <option value="Business" />
                <option value="Creative Ideas" />
              </datalist>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Campaign Title</span>
              </label>
              <input
                name="title"
                type="text"
                placeholder="titlle"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Campaign description</span>
              </label>
              <input
                name="cap"
                type="text"
                placeholder="caption"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Campaign PHOTO</span>
              </label>
              <input
                name="url"
                type="text"
                placeholder="url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Running Date</span>
              </label>
              <input
                name="date"
                type="date"
                placeholder="url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                submit
              </button>
            </div>
          </form>
        </div>

        <div className="border-2 w-1/2">
          {confirme.email ? (
            <Card className="w-full max-w-[26rem] shadow-lg">
              <CardHeader className="" floated={false} color="blue-gray">
                <img
                  className="h-64 object-cover"
                  src={confirme?.url}
                  alt="ui/ux review check"
                />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              </CardHeader>
              <CardBody>
                <div className="mb-3  flex items-center justify-between">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {confirme?.title}
                  </Typography>
                  <Typography
                    color="blue-gray"
                    className="flex items-center gap-1.5 font-normal"
                  >
                    {confirme?.option}
                  </Typography>
                </div>

                <div className=" flex justify-between items-center">
                  <div>
                    <Typography color="gray">
                      <p className="truncate">{confirme?.cap?.slice(0, 200)}</p>
                    </Typography>
                    <Typography color="gray">
                      <p className="truncate">{confirme?.date}</p>
                    </Typography>
                  </div>
                  <button onClick={COnfirmedAndSentToDataBase} className="btn">
                    Confirm?
                  </button>
                </div>
              </CardBody>
            </Card>
          ) : (
            <>
              <h1>noo</h1>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Add_New_Campaign;
