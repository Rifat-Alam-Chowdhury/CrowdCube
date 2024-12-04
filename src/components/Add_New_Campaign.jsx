import React from "react";

function Add_New_Campaign() {
  const FormInfo = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const cap = e.target.cap.value;
    const url = e.target.url.value;
    const display = e.target.display.value;

    console.log(title, cap, url, display);

    fetch("https://crowdcudee-backend.vercel.app/formdetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, cap, url, display }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <form onSubmit={FormInfo} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">title</span>
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
            <span className="label-text">caption</span>
          </label>
          <input
            name="cap"
            type="text"
            placeholder="caption"
            className="input input-bordered"
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">display Url</span>
          </label>
          <input
            name="display"
            type="text"
            placeholder="display"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">url</span>
          </label>
          <input
            name="url"
            type="text"
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
    </>
  );
}

export default Add_New_Campaign;
