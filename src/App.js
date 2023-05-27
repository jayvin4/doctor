
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./maja/SignUp";
import SignInPage from "./maja/SignIn";
import { app } from './config'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import Appoiment from "./maja/Appoiment";
import Admin from "./maja/Admin";


const auth = getAuth(app);

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("you are logged out");
        setUser(null);
      }
    });
  }, []);


if (user === null) {
  return (
    <>

    <div>
      
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

  return (
    <>
   <div>
    <h1 className="text-center text-2xl pt-8 pb-6">Hello {user.email}</h1>
    <Appoiment />
    <div className="text-center pt-2 pb-8"><button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 drak:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => signOut(auth)}>logout</button>
   </div></div>
    </>
    );
};

export default App;

