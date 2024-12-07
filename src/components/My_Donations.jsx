import React, { useContext, useEffect, useState } from "react";
import { Dcontext } from "../Context/DataContext";
import { useLoaderData } from "react-router-dom";
import { AuthCOn } from "../Context/AuthContext";

function My_Donations() {
  const { user } = useContext(AuthCOn);
  const allldata = useLoaderData();
  const [finds, setfinds] = useState();

  console.log(finds);
  // console.log(user.email);

  useEffect(() => {
    fetch("http://localhost:5000/donner")
      .then((res) => res.json())
      .then((data) => {
        const emails = data.filter((item) => item.email === user.email);
        // const finding = allldata.map((item) => item._id === emails[0].id);
        const findings = emails
          .map((email) => {
            return allldata.filter((item) => item._id === email.id);
          })
          .flat();
        setfinds(findings);

        // Extract emails into an array === emails.id
        // console.log(finding); // Log the array of emails
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
