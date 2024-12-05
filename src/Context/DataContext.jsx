import { createContext, useEffect, useState } from "react";

export const Dcontext = createContext();

const DataContext = ({ children }) => {
  const [UserData, setUserData] = useState([]);
  const [FormDataFromDataBase, setFormDataFromDataBase] = useState([]);

  useEffect(() => {
    fetch("https://crowdcudee-backend.vercel.app")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  const name = "alam";

  const value = {
    UserData,
    FormDataFromDataBase,
    setFormDataFromDataBase,
  };
  return <Dcontext.Provider value={value}>{children}</Dcontext.Provider>;
};

export default DataContext;
