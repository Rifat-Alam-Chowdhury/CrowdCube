import React, { useContext, useEffect, useState } from "react";
import { Dcontext } from "../Context/DataContext";
import { AuthCOn } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function My_Campaigns() {
  const { user } = useContext(AuthCOn);
  const [Find, setFind] = useState("");
  const [Foundeddata, setFoundeddata] = useState([]);
  const navigate = useNavigate();
  console.log(Foundeddata);

  const [UpdateInfo, setUpdateInfo] = useState([]);
  //(UpdateInfo);
  useEffect(() => {
    // fetch(`import.meta.env.VITE_PORTallcolection/${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setFoundeddata(data);
    //     //(data._id);
    //   })
    //   .catch((error) => {});

    axios
      .get(`${import.meta.env.VITE_PORT}allcolection/${user.email}`, {
        withCredentials: true,
      })
      .then((response) => {
        setFoundeddata(response.data);
      })
      .catch((error) => {
        console.error(error); // Handle errors
      });
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
    //(updatedvaluee);
    //https://crowdcudee-backend.vercel.app
    fetch("import.meta.env.VITE_PORTupdate", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedvaluee),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Your Campaign Has Been Updated",
          icon: "success",
        });

        navigate("/AllCampaign");
      })
      .catch((error) => console.error("Error:", error));
  };

  const deletepost = (e) => {
    const email = user.email;
    const deletesend = {
      email,
      e,
    };
    fetch("import.meta.env.VITE_PORTdelete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deletesend),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Your Campaign Has Been Added",
          icon: "success",
        });
        navigate("/AllCampaign");
      })
      .catch((error) => console.error("Error:", error));
    //(e);
  };

  return (
    <>
      {Foundeddata == 0 || undefined ? (
        <div>
          <h1 className="text-2xl text-center">You Didn't Add Any Campaign</h1>
        </div>
      ) : (
        <div className="lg:grid lg:grid-cols-3 p-5 gap-2 mx-auto w-11/12 ">
          {Foundeddata?.map((data) => (
            <div className="card bg-base-100  shadow-xl">
              <figure>
                <img
                  className=" h-40 object-cover"
                  src={data?.url}
                  alt="Shoes"
                />
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
                      document
                        .getElementById(`my_modal_${data?._id}`)
                        .showModal()
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

                  <dialog
                    id={`my_modal_${data?._id}`}
                    className="modal w-1/2 mx-auto "
                  >
                    <div className="border-2 lg:w-8/12 rounded-xl  text-black bg-gray-50">
                      <form
                        onSubmit={(e) => updateinfo(e, data?._id)}
                        className="p-5 flex flex-col"
                        id="dataForm"
                      >
                        <label htmlFor="title">Title</label>
                        <input
                          className="input bg-white input-bordered"
                          type="text"
                          id="title"
                          name="title"
                        />
                        <br />
                        <br />

                        <label htmlFor="description">Description:</label>
                        <textarea
                          className="input bg-white input-bordered"
                          id="description"
                          name="description"
                          rows="4"
                        ></textarea>
                        <br />
                        <br />

                        <label htmlFor="date">Date:</label>
                        <input
                          className="input bg-white input-bordered"
                          type="date"
                          id="date"
                          name="date"
                        />
                        <br />
                        <br />

                        <label htmlFor="url">URL :</label>
                        <input
                          className="input bg-white input-bordered"
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
                          SUBMIT
                        </button>
                      </form>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default My_Campaigns;
