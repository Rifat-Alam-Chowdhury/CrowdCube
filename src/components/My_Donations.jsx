import React, { useContext, useEffect, useState } from "react";
import { Dcontext } from "../Context/DataContext";
import { useLoaderData } from "react-router-dom";
import { AuthCOn } from "../Context/AuthContext";

function My_Donations() {
  const { user } = useContext(AuthCOn);
  const allldata = useLoaderData();
  const [finds, setfinds] = useState([]);

  useEffect(() => {
    fetch("import.meta.env.VITE_PORTdonner")
      .then((res) => res.json())
      .then((data) => {
        const emails = data.filter((item) => item.email === user.email);

        const findings = emails
          .map((email) => {
            return allldata.filter((item) => item._id === email.id);
          })
          .flat();
        setfinds(findings);
      });
  }, []);

  return (
    <>
      <h1 className="text-center  font-extrabold text-2xl mb-5">
        Great!!...You Have Donated To..
      </h1>
      <div className="grid lg:grid-cols-2 gap-5 mb-8 ">
        {finds.map((data) => (
          <div className="card bg-base-100 w-96 shadow-xl p-5 mx-auto">
            <figure>
              <img className="rounded-lg" src={data?.url} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data?.title}</h2>
              <p className="line-clamp-3">{data?.cap}</p>
              <p>{data?.date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default My_Donations;
