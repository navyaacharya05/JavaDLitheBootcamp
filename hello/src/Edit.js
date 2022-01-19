import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import CancelIcon from '@mui/icons-material/Cancel';
import { update } from "./Dataaccess";


const Edit=(kalpana)=>{
    const [pos]=useState(kalpana.order)
    const [data,setDate]=useState(
        {
            "org":kalpana.corp.org,
            "locations":kalpana.corp.locations,
            "employees":kalpana.corp.employees,
            "basic":kalpana.corp.basic,
            "services":kalpana.corp.services,
            "benchmarks":kalpana.corp.benchmarks
        }
    )

    const perform=(eve)=>{
        // extraction
        const{name,value}=eve.target;
        setDate((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    return(
        <>
            <div className="mt-4 container">
                <h1 className="display-2 text-center text-info">Edit Exist Corporate</h1>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-12 shadow-lg p-3">
                        <TextField
                        required
                        id="outlined-required"
                        label="Organization name"
                        onChange={perform}
                        name="org"
                        value={data.org}
                        className="form-control mb-3"
                        />
                        <TextField
                        required
                        id="outlined-required"
                        label="Organization location"
                        onChange={perform}
                        name="locations"
                        value={data.locations}
                        className="form-control mb-3"
                        />
                        <InputLabel htmlFor="outlined-adornment-amount">Organizarion employees count</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            startAdornment={<InputAdornment position="start">#</InputAdornment>}
                            className="form-control mb-3"
                            onChange={perform}
                            name="employees"
                            value={data.employees}
                        />
                        <TextField
                        label="Organization basic salary"
                        id="outlined-start-salary"
                        startAdornment= {<InputAdornment position="start">Per/Annum</InputAdornment>}
                        className="form-control mb-3"
                        onChange={perform}
                        name="basic"
                        value={data.basic}
                        />
                        <InputLabel htmlFor="outlined-adornment-services">Organizarion services</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-services"
                            className="form-control mb-3"
                            onChange={perform}
                            name="services"
                            value={data.services}
                        />
                        <InputLabel htmlFor="outlined-adornment-bench">Organizarion best apps</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-bench"
                            className="form-control mb-3"
                            onChange={perform}
                            name="benchmarks"
                            value={data.benchmarks}
                        />
                        <div className="row justify-content-around">
                            <Button variant="outlined" color="primary" className="col-4" 
                            onClick={()=>{
                                alert(JSON.stringify(data)+" "+pos)
                                update(data,pos)
                            }}>
                                <UpgradeIcon/>
                            </Button>
                            <Button variant="outlined" color="error" className="col-4">
                                <CancelIcon/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Edit;