import React, { useContext, useEffect, useState } from "react";
import { Dcontext } from "../Context/DataContext";
import { AuthCOn } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function My_Campaigns() {
  const { user } = useContext(AuthCOn);
  const [Find, setFind] = useState("");
  const [Foundeddata, setFoundeddata] = useState([]);
  const navigate = useNavigate();

  const [UpdateInfo, setUpdateInfo] = useState([]);
  console.log(UpdateInfo);
  useEffect(() => {
    fetch(`https://crowdcudee-backend.vercel.app/allcolection/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setFoundeddata(data);
        console.log(data._id);
      })
      .catch((error) => {});
  }, [user]);

  const updateinfo = (e, _id) => {
    e.preventDefault();

    const title = e.target.title.value;
    const cap = e.target.description.value;
    const date = e.target.date.value;
    const url = e.target.url.value;
    const email = user.email;

    const updatedvaluee = {
      title: e.target.title.value,
      cap: e.target.description.value,
      date: e.target.date.value,
      url: e.target.url.value,
      _id,
      email,
    };
    console.log(updatedvaluee);

    fetch("http://localhost:5000/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedvaluee),
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((error) => console.error("Error:", error));
  };

  const deletepost = (e) => {
    const email = user.email;
    const deletesend = {
      email,
      e,
    };
    fetch("http://localhost:5000/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deletesend),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/MyCampaigns");
      })
      .catch((error) => console.error("Error:", error));
    console.log(e);
  };

  return (
    <>
      <div className="lg:grid lg:grid-cols-3 p-5 gap-2 mx-auto w-11/12 ">
        {Foundeddata.map((data) => (
          <div className="card bg-base-100  shadow-xl">
            <figure>
              <img className=" h-40 object-cover" src={data?.url} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex justify-between">
                <h2 className="card-title">{data?.title}</h2>
                <div className="badge badge-secondary">{data?.date}</div>
              </div>

              <p>{data?.cap?.slice(0, 500)}....</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() =>
                    document.getElementById(`my_modal_${data?._id}`).showModal()
                  }
                  className="btn"
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    deletepost(data?._id);
                  }}
                  className="btn"
                >
                  Delete
                </button>

                <dialog id={`my_modal_${data?._id}`} className="modal">
                  <div className="border-2 lg:w-8/12 text-black bg-white">
                    <form
                      onSubmit={(e) => updateinfo(e, data?._id)}
                      className="p-5 flex flex-col"
                      id="dataForm"
                    >
                      <label htmlFor="title">Title</label>
                      <input
                        className="input input-bordered"
                        type="text"
                        id="title"
                        name="title"
                      />
                      <br />
                      <br />

                      <label htmlFor="description">Description:</label>
                      <textarea
                        className="input input-bordered"
                        id="description"
                        name="description"
                        rows="4"
                      ></textarea>
                      <br />
                      <br />

                      <label htmlFor="date">Date:</label>
                      <input
                        className="input input-bordered"
                        type="date"
                        id="date"
                        name="date"
                      />
                      <br />
                      <br />

                      <label htmlFor="url">URL :</label>
                      <input
                        className="input input-bordered"
                        type="text"
                        id="url"
                        name="url"
                      />
                      <br />
                      <br />

                      <button
                        onClick={() => {
                          document
                            .getElementById(`my_modal_${data?._id}`)
                            .close();
                        }}
                        className="btn"
                        type="submit"
                      >
                        SubmiT
                      </button>
                    </form>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default My_Campaigns;
