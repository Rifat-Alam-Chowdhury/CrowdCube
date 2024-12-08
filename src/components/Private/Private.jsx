import React, { useContext } from "react";

import { AuthCOn } from "../../Context/AuthContext";

import { Navigate } from "react-router-dom";

function Private({ children }) {
  const { loader, user } = useContext(AuthCOn);

  if (loader) {
    return (
      <>
        <div className="text-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default Private;
