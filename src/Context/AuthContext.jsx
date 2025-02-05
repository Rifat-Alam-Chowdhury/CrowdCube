import { createContext, useEffect, useState } from "react";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/FireBaseAuth";
export const AuthCOn = createContext();
const AuthCOntext = ({ children }) => {
  const [loader, setloader] = useState(true);
  const [user, setuser] = useState(null);
  const [LogInuser, setLogInuser] = useState(null);
  //signout
  const SigNout = () => {
    return signOut(auth);
  };

  // new user
  const CreateNewUser = async (email, password, displayName, photoURL) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        const email = user.user.email;
        const emailVerified = user.user.emailVerified;
        const providerId = user.user.providerId;
        //(email, emailVerified, providerId);
        const FIreBaseData = {
          email,
          emailVerified,
          providerId,
          displayName,
          photoURL,
        };
        // import.meta.env.VITE_PORT
        fetch("import.meta.env.VITE_PORTfirebaseuid", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(FIreBaseData),
        });
      })
      .then(() => {
        sendEmailVerification(auth.currentUser).then(() => {
          //("Verification code has been sent to your email");
        });
      });
  };

  // google login
  const provider = new GoogleAuthProvider();
  const GoogleLogIn = async () => {
    return signInWithPopup(auth, provider)
      .then((user) => {
        const email = user.user.email;
        const emailVerified = user.user.emailVerified;
        const providerId = user.user.providerId;
        const displayName = user.user.displayName;
        const photoURL = user.user.photoURL;
        //(email, emailVerified, providerId, displayName, photoURL);
        const FIreBaseData = {
          email,
          emailVerified,
          providerId,
          displayName,
          photoURL,
        };
        // import.meta.env.VITE_PORT
        fetch(`${import.meta.env.VITE_PORT}firebaseuid`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(FIreBaseData),
        });
      })
      .catch((err) => {
        //(err.code);
      });
  };

  // old user login
  const UserLogInWithEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // observer

  //(user, loader);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
        setLogInuser(user.email);
        console.log(user);

        if (user?.email) {
          const users = { email: user.email };
          axios
            .post(`${import.meta.env.VITE_PORT}jwt`, users, {
              withCredentials: true,
            })

            .then((res) => console.log("log in", res.data));
        } else {
        }
      }
      setloader(false);
    });

    return () => unsubscribe();
  }, []);

  const values = {
    CreateNewUser,
    UserLogInWithEmailPass,
    GoogleLogIn,
    loader,
    setloader,
    user,
    SigNout,
    LogInuser,
  };
  return <AuthCOn.Provider value={values}>{children}</AuthCOn.Provider>;
};

export default AuthCOntext;
