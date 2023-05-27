import React from "react";
import logo from "../images/kit.jpg"
import logo1 from "../images/doctor1.jpg"
import logo2 from "../images/doctor2.jpg"
import logo3 from "../images/doctor3.jpg"
import logo4 from "../images/a3.png"
import logo5 from "../images/f1.jpeg"
import logo6 from "../images/f2.jpeg"
import logo7 from "../images/f3.jpeg"
import { Link, useNavigate } from "react-router-dom";
import most from "../images/doctor.jpg"


function Dashboard (props) {
    const navigate = useNavigate();
    return (
        <>
        <header className="fixed bg-blue-300 shadow-md z-50 h-12 w-full px-5 py-2 flex jusify-between items-center">
            <div className="mr-16 flex justify-between h-full w-full">
            <div className="animate-pulse text-2xl font-bold italic">
                <Link to="/admin">Health Care</Link></div>
            <Link className="italic underline text-xl" to="/signin">Login</Link>
            </div>
        </header>
    
        <div className="flex flex-row pt-2">
            <div className="bg-red-900 h-80 w-[50%] mr-0 p-4 opacity-90">
                <p className="text-white pl-10 pt-12 text-[20px]">
                    Now take the Appointments by sitting at Home,<br />
                    Healthcare for your<br />
                    Family's Health.
                    <h1 className="text-yellow-500 pt-8">Get Treatement Done from Our Specialist Doctor</h1>
                
                </p>
                
            </div>
            <div className="relative w-[50%] h-[320px] bg-sky-800">
                <img src={logo} alt="" className="h-full w-full"></img>
                    <div className="absolute bottom-48 left-72 right-0">
                        <h3 className="text-white rotate-12 text-5xl drop-shadow-2xl">Save Your Time</h3>
                    </div>
            </div>
        </div>
            <br /><br /><br /><br />
        <div className="text-5xl text-center underline italic">Our Team</div>

        <div className="flex items-center justify-center min-h-screen container mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-3 ld:grid-cols-3 gap-2 ">
                <div className="card border-4 border-orange-200 rounded-xl">
                    <div className="p-5 flex flex-col">
                        <div className="rounded-xl overflo-hidden">
                            <img src={logo1} alt="" />
                        </div>
                        <h5 className="text-2xl md:text-3xl font-medium mt-3 pt-4 underline decoration-1">Amit Patel</h5>
                        <p className="text-slate-500 text-lg mt-3">Specialist: Dermatologist</p>
                        <p className="text-slate-500 text-lg mt-3">Experience: 4</p>
                        <p className="text-slate-500 text-lg mt-3">Age: 33</p>
                        <div className="bg-black h-[2px] w-50 mt-2 opacity-20"></div>
                    </div>
                </div>

                <div className="card border-4 border-orange-200 rounded-xl">
                    <div className="p-5 flex flex-col">
                        <div className="rounded-xl overflo-hidden">
                            <img src={logo2} alt="" />
                        </div>
                        <h5 className="text-2xl md:text-3xl font-medium mt-3 pt-4 underline decoration-1">Vrushti Patel</h5>
                        <p className="text-slate-500 text-lg mt-3">Specialist: Immunologist</p>
                        <p className="text-slate-500 text-lg mt-3">Experience: 7</p>
                        <p className="text-slate-500 text-lg mt-3">Age: 30</p>
                        <div className="bg-black h-[2px] w-50 mt-2 opacity-20"></div>
                    </div>
                </div>

                <div className="card border-4 border-orange-200 rounded-xl">
                    <div className="p-5 flex flex-col">
                        <div className="rounded-xl overflo-hidden">
                            <img src={logo3} alt="" />
                        </div>
                        <h5 className="text-2xl md:text-3xl font-medium mt-3 pt-4 underline decoration-1">Raj Patel</h5>
                        <p className="text-slate-500 text-lg mt-3">Specialist: Cardiologist</p>
                        <p className="text-slate-500 text-lg mt-3">Experience: 3</p>
                        <p className="text-slate-500 text-lg mt-3">Age: 31</p>
                        <div className="bg-black h-[2px] w-50 mt-2 opacity-20"></div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className="flex items-center justify-center container mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-1 ld:grid-cols-1 gap-2 ">
       
                    <div className="card border-4 border-sky-200 rounded-xl">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflo-hidden">
                                <img src={most} alt="" />
                            </div>
                            <h5 className="text-2xl md:text-3xl font-medium mt-3 pt-4 underline decoration-1">Jayvin Chovatiya</h5>
                            <p className="text-slate-500 text-lg mt-3">Specialist: Cardiologist</p>
                            <p className="text-slate-500 text-lg mt-3">Experience: 10</p>
                            <p className="text-slate-500 text-lg mt-3">Age: 31</p>
                            <div className="bg-black h-[2px] w-50 mt-2 opacity-20"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col items-center justify-center pt-16 pb-16">
        <img src={logo4} alt="" className="animate-bounce h-20 pb-6"></img>
            <button type="submit" onClick={() => navigate("/signin")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Book Appointment</button>
        </div>

        <div className="bg-slate-100">
            <div className="text-center pt-8">
                <p className="text-3xl pb-4">We Care</p>
                
                <p className="italic">We Care Nursing Home & Diagnostic Center has been setting standards and</p>
                <p className="italic">Regards as one of the best hosital out of jamnagar.</p>
            </div>

            <div className="flex items-center justify-center min-h-screen container mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-3 ld:grid-cols-3 gap-2 ">
                <div className="card">
                    <div className="p-5 flex flex-col">
                        <div className="rounded-xl overflo-hidden">
                            <img src={logo5} alt="" />
                        </div>
                        <h5 className="text-2xl md:text-3xl font-medium mt-3 pt-4 underline decoration-1">Child Care</h5>
                        <p className="text-black text-md mt-3">Child care isues born by working mother came to a head</p>
                        <p className="text-black text-md mt-3">during the pandemic,</p>
                        <p className="text-black text-md mt-3">especially among healcare workers.</p>
                        <div className="bg-black h-[2px] w-50 mt-2 opacity-20"></div>
                    </div>
                </div>

                <div className="card">
                    <div className="p-5 flex flex-col">
                        <div className="rounded-xl overflo-hidden">
                            <img src={logo6} alt="" />
                        </div>
                        <h5 className="text-2xl md:text-3xl font-medium mt-3 pt-4 underline decoration-1">Dental Care</h5>
                        <p className="text-black text-md mt-3">Experts in dental implants, Full mouth rehab,</p>
                        <p className="text-black text-md mt-3">Clera Aligners, Smile designing,</p>
                        <p className="text-black text-md mt-3">Root canel.</p>
                        <div className="bg-black h-[2px] w-50 mt-2 opacity-20"></div>
                    </div>
                </div>

                <div className="card">
                    <div className="p-5 flex flex-col">
                        <div className="rounded-xl overflo-hidden">
                            <img src={logo7} alt="" />
                        </div>
                        <h5 className="text-2xl md:text-3xl font-medium mt-3 pt-4 underline decoration-1">Birth Care</h5>
                        <p className="text-black text-md mt-3">The pregnancy and birth care option availabel in</p>
                        <p className="text-black text-md mt-3">victoria risk factor such as weight,</p>
                        <p className="text-black text-md mt-3">age during previous pregnancies.</p>
                        <div className="bg-black h-[2px] w-50 mt-2 opacity-20"></div>
                    </div>
                </div>
            </div>
        </div>

        </div>
</>
    )
}
export default Dashboard;