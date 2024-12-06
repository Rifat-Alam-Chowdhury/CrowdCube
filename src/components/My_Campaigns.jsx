import React, { useContext, useEffect, useState } from "react";
import { Dcontext } from "../Context/DataContext";

function My_Campaigns() {
  const { UserData, FormDataFromDataBase } = useContext(Dcontext);
  const [Find, setFind] = useState("");
  const [Foundeddata, setFoundeddata] = useState([]);
  console.log(Foundeddata);
  // https://crowdcudee-backend.vercel.app/allcolection/

  useEffect(() => {
    fetch(`https://crowdcudee-backend.vercel.app/allcolection/${Find}`)
      .then((res) => res.json())
      .then((data) => {
        setFoundeddata(data);
      })
      .catch((error) => {
        // console.error("Error:", error);
      });
  }, [Find]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const find = e.target.find.value;
    setFind(find);
  };

  const returnid = (e) => {
    console.log(e);
  };

  return (
    <>
      <div className="mx-auto w-11/12">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="find"
            />
            <button type="submit">Find</button>
          </div>
        </form>
      </div>
      <div className="lg:grid lg:grid-cols-3 border-2 gap-2 mx-auto w-11/12 ">
        {Foundeddata.map((data) => (
          <div className="card bg-base-100  shadow-xl">
            <figure>
              <img className=" h-40 object-cover" src={data?.url} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {data?.title}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{data?.cap?.slice(0, 200)}....</p>
              <div className="card-actions justify-end">
                <button onClick={() => returnid(data?._id)}>id</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default My_Campaigns;
