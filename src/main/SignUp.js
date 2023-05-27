import React, {useState} from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../config'
import master from "../images/doctor.jpg"
import { Link } from "react-router-dom";


const auth = getAuth(app);

const SignUpPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) => 
    alert("success")
    );
};


    return (
        
<>
<div>
            <div className="w-full h-screen flex items-start">
                <div className="relative w-1/2 h-full flex flex-col">
                    <div className="absolute top-[20%] left-[10%] flex flex-col">
                        <h1 className="text-4xl text-white font-bold my-4">turn your ides into realty</h1>
                        <p className="text-xl text-white font-normal">start for free</p>
                    </div>
                        <img src={master} alt="" className="h-full brightness-50" />    
                </div>
                <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between">
                    <div className="w-full flex flex-col max-w-[500px]">
                        <div className="w-full flex flex-col mb-2">
                            <h3 className="text-3xl font-semibold md-2">Register</h3>
                            <p className="text-base mb-8 mt-4">Please enter your details</p>
                        </div>
                    
            <label>email</label>
            <input className="w-full text-black py-2 border-b border-black outline-none focus:outline-none bg-transparent my-2" onChange={e => setEmail(e.target.value)} value={email} type="email" required placeholder="enter your email" />
        
            <label>password</label>
            <input className="w-full text-black py-2 border-b border-black outline-none focus:outline-none bg-transparent my-2" onChange={e => setPassword(e.target.value)} value={password} type="password" required placeholder="enter your password" />
            <button onClick={createUser} className="w-full text-white my-2 bg-[#060606] rounded-md p-4 text-center font-semibold flex items-center justify-center">signup</button>
            </div>
                            <div className="w-full flex items-center justify-center relative py-2">
                                <div className="w-full h-[1px] bg-black"></div>
                                <div className="text-lg absolute text-black/80 bg-[#f5f5f5]">or</div>
                             </div>

                                    <div className="w-full flex items-center justify-center">
                                        <p className="text-sm font-normal text-[#060606]">do have a account <span className="font-semibold underline underline-offset-2 cursor-pointer"><Link to="/signin">signin</Link></span></p>
                                    </div>
                                </div>
                            </div>
                    </div>
        
</>      
    )
}

export default SignUpPage;