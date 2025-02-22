import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Dcontext } from "../Context/DataContext";
import { Link } from "react-router-dom";
import { AuthCOn } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { Fade, Slide } from "react-awesome-reveal";

function CampainDetails() {
  const { UserData } = useContext(Dcontext);
  const { user } = useContext(AuthCOn);
  const [Matchedpeople, setMatchedpeople] = useState([]);

  const naviga = useNavigate();
  const { id } = useParams();
  const currentDate = new Date().toISOString().split("T")[0];

  const retrundonatedid = (e) => {
    const donationdetails = {
      name: user.displayName,
      email: user.email,
      id: e,
    };

    fetch(`${import.meta.env.VITE_PORT}donner`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(donationdetails),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Thank you For Your Donation",
          icon: "success",
        });
        naviga("/MyDonations");
      });
  };
  useEffect(() => {
    const MatchedData = [UserData.find((data) => data._id === id)];
    setMatchedpeople(MatchedData);
  }, [UserData]);

  return (
    <>
      <Slide>
        {Matchedpeople.map((data) =>
          data ? (
            <div className=" lg:card-side  p-5 card min-h-[calc(100vh-286px)] bg-base-100 shadow-xl">
              <img
                className="w-full object-cover h-96 lg:w-5/12 rounded-2xl "
                src={data?.url}
                alt="Album"
              />

              <div className="card-body  p-5 justify-center gap-5">
                <h1 className="card-title text-2xl font-extrabold">
                  {data?.title}
                </h1>
                <h2>{data?.cap}</h2>
                <div className="card-actions">
                  {data?.date ? (
                    data.date < currentDate ? (
                      <button>Sorry,Last Date Was {data.date}</button>
                    ) : (
                      <div className="flex  gap-10 justify-between items-center">
                        <h1>{data.date}</h1>
                        {/* <Link to={`/campaignDetails/${data._id}`}> */}
                        <button
                          onClick={() => retrundonatedid(data?._id)}
                          className="btn"
                        >
                          Donate
                        </button>
                        {/* </Link> */}
                      </div>
                    )
                  ) : null}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center ">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          )
        )}
      </Slide>
    </>
  );
}

export default CampainDetails;
