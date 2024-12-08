import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer bg-neutral text-neutral-content p-10">
        <div className=" w-full text-6xl flex justify-center items-center my-auto p-5">
          <h1>CrowdCube</h1>
        </div>

        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
