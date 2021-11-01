import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Projects = () => {
    return (

        
        <div>
        <div className="container-fluid padding">
            <div className="row padding">
                <div className="col-md-4">
                    <div class="card">
                        <img className="card-img-top" src="img/Portfolio_refactor.png">
                        <div className ="card-body">
                        <h4 className ="card-title">Code Refactor</h4>
                        <p className ="card-text">A project that I've managed to debug.</p>
                        <a href="#" className ="btn btn-outline-secondary"> Click here</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div clasName="card">
                        <img className="card-img-top" src="img/Portfolio_Translator.png">
                        <div className ="card-body">
                        <h4 className ="card-title">Translator</h4>
                        <p className ="card-text">A working translator that I crafted myself.</p>
                        <a href="#" className ="btn btn-outline-secondary"> Click here</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src="img/Portfolio_Weather.png">
                        <div className ="card-body">
                        <h4 className ="card-title">Weather Dashboard</h4>
                        <p className ="card-text">A weather dashboard that accuratly gives you the weather.</p>
                        <a href="#" className ="btn btn-outline-secondary"> Click here</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            ) 
        };

export default Projects