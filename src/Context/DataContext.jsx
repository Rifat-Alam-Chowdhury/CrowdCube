import { createContext, useContext, useEffect, useState } from "react";

export const Dcontext = createContext();

const DataContext = ({ children }) => {
  const [UserData, setUserData] = useState([]);
  const [FormDataFromDataBase, setFormDataFromDataBase] = useState([]);
  const [Donationdetails, setDonationdetails] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_PORT)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  const name = "alam";

  const value = {
    UserData,
    FormDataFromDataBase,
    setFormDataFromDataBase,
    setDonationdetails,
    Donationdetails,
  };
  return <Dcontext.Provider value={value}>{children}</Dcontext.Provider>;
};

export default DataContext;
