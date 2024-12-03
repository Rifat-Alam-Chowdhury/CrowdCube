import React from "react";
import { useLoaderData } from "react-router";

function Home() {
  const data = useLoaderData();
  console.log(data.length);

  return (
    <>
      <button className="btn btn-secondary">Secondary</button>{" "}
      {data.map((name) => (
        <h1 key={name.id}>{name.name}</h1>
      ))}
    </>
  );
}

export default Home;
