import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/FireBaseAuth";
export const AuthCOn = createContext();
const AuthCOntext = ({ children }) => {
  // new user
  const CreateNewUser = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        const email = user.user.email;
        const emailVerified = user.user.emailVerified;
        const providerId = user.user.providerId;
        console.log(email, emailVerified, providerId);
        const FIreBaseData = {
          email,
          emailVerified,
          providerId,
        };
        // https://crowdcudee-backend.vercel.app/
        fetch("https://crowdcudee-backend.vercel.app/firebaseuid", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(FIreBaseData),
        });
      })
      .then(() => {
        sendEmailVerification(auth.currentUser).then(() => {
          console.log("Verification code has been sent to your email");
        });
      });
  };

  // old user login
  const UserLogInWithEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // observer

  const [loader, setloader] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setloader(false);
        console.log(user);
      } else {
        setloader(true);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const values = {
    CreateNewUser,
    UserLogInWithEmailPass,
    loader,
    setloader,
  };
  return <AuthCOn.Provider value={values}>{children}</AuthCOn.Provider>;
};

export default AuthCOntext;
