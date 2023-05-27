
import React, { useState } from "react";

function Appoiment () {

    const [contactData,setContactData] = useState({
        Pname:"",
        Pdes:"",
        Pdate:"",
        Ptime:""
    });

    let name, value
    const handleChange = (event) => {
        name = event.target.name
        value = event.target.value
        setContactData({...contactData, [name]:value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {Pname,Pdes,Pdate,Ptime} = contactData;
        let res = await fetch("https://patient-auth-3c69e-default-rtdb.firebaseio.com/user.json",{
        method: "Post",    
        headers : {
                ContentType: "website/json"
            },
            body: JSON.stringify({
                Pname,
                Pdes,
                Pdate,
                Ptime
            })
        });
        if(res){
            alert("data store");
        }else{
            alert("not store");
        }
    }

        //"https://patient-auth-3c69e-default-rtdb.firebaseio.com/user.json"

    return(
        <>
        <div>
            <div className="flex items-center justify-center container mx-auto bg-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-1 ld:grid-cols-1 gap-2 ">
                    <div className="card border-4 border-red-200 rounded-xl bg-sky-100">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflo-hidden">
                                <div className="pt-12 pb-8 text-3xl font-bold text-center underline">Appoiment</div><br />
                                
                                <label name="Pname" className="font-bold">Patient Name</label><br />
                               <div className="pt-2"> <input className="w-full border border-gray-400 shadow-md" name="Pname" type="text" placeholder=" Enter Patient name" onChange={handleChange} value={contactData.Pname} /></div><br />
                            
                                <label name="Pdes" className="font-bold">problem description</label><br />
                                <div className="pt-2"><textarea name="Pdes" rows={4} cols={40}  className="border border-gray-400 shadow-md w-full" onChange={handleChange} value={contactData.Pdes} /></div><br />

                                <label name="Pdate" className="font-bold">Appoiment Date</label><br />
                                <div className="pt-2"><input name="Pdate" className="w-full border border-gray-400 shadow-md" type="date" value={contactData.Pdate} onChange={handleChange} /></div><br />

                                <label name="Ptime" className="font-bold">Select time <span className="text-[12px] text-slate-600">(opening hours 9:00am to 9:00pm)</span></label><br />
                                <div className="pt-2 pb-4"><input className="w-full border border-gray-400 shadow-md" type="time" name="Ptime" min="09:00" max="18:00" onChange={handleChange} value={contactData.Ptime} required /></div>

                                <div className="text-right"><button className="w-42 h-10 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" onClick={handleSubmit}>submit</button><br />
            </div></div></div></div></div></div></div>
        </>
    )
}
export default Appoiment;     