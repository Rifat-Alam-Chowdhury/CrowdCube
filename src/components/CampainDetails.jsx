import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Dcontext } from "../Context/DataContext";

function CampainDetails() {
  const { UserData } = useContext(Dcontext);
  const [Matchedpeople, setMatchedpeople] = useState([]);
  const [loader, setloader] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const MatchedData = [UserData.find((data) => data._id === id)];
    setMatchedpeople(MatchedData);
  }, [UserData]);
  console.log("state", Matchedpeople);
  console.log("contex", UserData);
  return (
    <>
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
                <button className="btn bg-transparent border-none">
                  Donate
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center ">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )
      )}
    </>
  );
}

export default CampainDetails;
