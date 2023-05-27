import React,{useEffect, useState} from "react";
import fireDb from "../config"
import { toast } from "react-hot-toast";



function Admin() {

    const [data, setData] = useState({});
    

    useEffect(() => {
        fireDb.child("user").on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                setData({...snapshot.val() });
            }else {
                setData({});
            }
        });
        return () => {
            setData({});
        };
    }, []);


    const onDelete = (id) => {
        if (
            window.confirm("Are you sure that you wanted to delete that user")
        ) {
            fireDb.child(`user/${id}`).remove((err) => {
                if (err) {
                    toast.error(err);
                } else {
                    toast.success("user delete successfully");
                }
            });
        }
    };
    

    return(
        <>
        <div>admin</div>
        <div className="flex items-center justify-center">
            <table className="border-4 w-[700px]">
                <thead>
                    <tr>
                        <th className="border bg-green-200 border-black h-10">no</th>
                        <th className="border bg-green-200 border-black">Pname</th>
                        <th className="border bg-green-200 border-black">Pdes</th>
                        <th className="border bg-green-200 border-black">Pdate</th>
                        <th className="border bg-green-200 border-black">Ptime</th>
                        <th className="border bg-green-200 border-black">action</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((id, index) => {
                        return (
                            <tr key={id}>
                                <th className="border border-black h-10" scope="row">{index + 1}</th>
                                <td className="border border-black text-center">{data[id].Pname}</td>
                                <td className="border border-black text-center">{data[id].Pdes}</td>
                                <td className="border border-black text-center">{data[id].Pdate}</td>
                                <td className="border border-black text-center">{data[id].Ptime}</td>
                                <td className="border border-black text-center">
                                
                                <button className="bg-red-300 hover:bg-red-200 border-slate rounded-full w-20 border-2" onClick={() => onDelete(id)}>delete</button>
                                    
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        </>
    );
};
export default Admin;