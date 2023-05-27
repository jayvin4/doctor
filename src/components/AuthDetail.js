import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../config";

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            }else {
                setAuthUser(null);
            }
        });
return () => {
    listen();
}

    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log("signout successfull")
        }).catch(error => console.log(error))
    }

    return <div>
        {authUser ? <><p>{`sign in as ${authUser.email}`}</p><button onClick={userSignOut}>sign out</button> </> : <p>signout</p>}
    </div>;
};

export default AuthDetails;