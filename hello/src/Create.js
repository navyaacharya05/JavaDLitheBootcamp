import { CardActions } from "@mui/material";
import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Create from "./Create";
import info, { getting } from './Dataaccess'
import Read from "./Read";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import EditIcon from '@mui/icons-material/Edit';

const List=()=>{
    const [cview,setCview]=useState(false)
    const [rview,setRview]=useState(false)
    const [obj,setObj]=useState(
        {
            "org":"",
            "locations":"",
            "employees":0,
            "basic":0.0,
            "services":"",
            "benchmarks":""
        }
    )

    const callCreate=()=>{
        setCview(true)
    }
    return(
        <>
            {(cview)?
            <>
                <Create/>
                <button className="btn btn-outline-dark" 
                onClick={()=>setCview(false)}>
                    Back
                </button>
            </>
            :
            (rview)?
            <>
                <Read corp={obj}/>
                <button className="btn btn-outline-dark" 
                onClick={()=>setRview(false)}>
                    Back
                </button>
            </>
            :
            <>
            <button className="btn btn-outline-success" onClick={callCreate}>
                Create
            </button>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12 table-responsive">
                    <table className="table table-stripped table-hover shodow text-light bg-info">
                        <thead>
                            <tr>
                                <th>Name of the Corporate</th>
                                <th>Locations</th>
                                <th>Number of employees</th>
                                <th>Basic salary</th>
                                <th>Services</th>
                                <th>Benchmark's</th>
                            </tr>
                        </thead>
                        <tbody>
                            {info.map((data,index)=>(
                                <tr>
                                    <td onClick={
                                        ()=>{
                                            setRview(true)
                                            const tmp=getting(data.org)
                                            setObj(tmp)
                                        }}>
                                        {data.org}
                                    </td>
                                    <td>{data.locations}</td>
                                    {/* <td>
                                        {data.locations.map((ele)=>(
                                            <p>{ele}</p>
                                        ))}
                                    </td> */}
                                    <td>{data.employees}</td>
                                    <td>{data.basic}</td>
                                    <td>{data.services}</td>
                                    <td>{data.benchmarks}</td>
    
                                    <td>
                                        <button className="btn btn-outline-danger">
                                            <RemoveCircleIcon/>
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-outline-warning">
                                           <EditIcon/> 
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </>
            }
        </>
    );
}

export default List;