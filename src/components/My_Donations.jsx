import React, { useContext, useEffect, useState } from "react";
import { Dcontext } from "../Context/DataContext";
import { useLoaderData } from "react-router-dom";
import { AuthCOn } from "../Context/AuthContext";

function My_Donations() {
  const { user } = useContext(AuthCOn);
  const allldata = useLoaderData();
  const [finds, setfinds] = useState([]);

  useEffect(() => {
    fetch("https://crowdcudee-backend.vercel.app/donner")
      .then((res) => res.json())
      .then((data) => {
        const emails = data.filter((item) => item.email === user.email);

        const findings = emails
          .map((email) => {
            return allldata.filter((item) => item._id === email.id);
          })
          .flat();
        setfinds(findings);
      })
      .catch((err) => console.log(err.code));
  }, []);

  return (
    <>
      <h1>you have donated to..</h1>
      {finds.map((data) => (
        <div className="border-2 border-red-300">
          <h1>{data.title}</h1>
          <h1>{data.cap}</h1>
          <h1>{data.email}</h1>
          <h1>{data.option}</h1>
        </div>
      ))}
    </>
  );
}

export default My_Donations;
