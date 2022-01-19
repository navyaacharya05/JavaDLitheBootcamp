import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Read=(mohit)=>{
    return(
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-10 col-sm-12 card p-3 shadow bg-dark">
                        <h1 className="card-title text-center text-primary">{mohit.corp.org}</h1>
                        <div className="card-body">
                            {/* <ol className="text-light">
                                <li>Competency development</li>
                                <li>Product development</li>
                                <li>Application development</li>
                            </ol> */}
                            <h3 className="card-text text-secondary text-center">{mohit.corp.services}</h3>
                            <h2 className="card-text text-center text-danger"> {mohit.corp.benchmarks} </h2>
                            <p className="card-text text-success float-start">{mohit.corp.employees}</p>
                            <p className="card-text text-warning float-end">{mohit.corp.locations}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Read;