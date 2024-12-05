import React, { useContext, useEffect, useState } from "react";
import { Dcontext } from "../../Context/DataContext";
import { AuthCOn } from "../../Context/AuthContext";

function Private({ children }) {
  //   const { UserData } = useContext(Dcontext);
  const { loader, setloader } = useContext(AuthCOn);
  //   const [MongoData, setMongoData] = useState(UserData);
  console.log(loader);

  //   useEffect(() => {
  //     setMongoData([UserData._id]);
  //   }, [UserData]);

  //   console.log(UserData.length); //0

  if (loader) {
    return (
      <div className="flex items-center justify-center my-auto ">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return children;

  return children;
}

export default Private;
