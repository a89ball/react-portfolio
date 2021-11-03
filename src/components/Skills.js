import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Skills = () => {
    return ( 
<div className="containter-fluid padding">
				<div className="row welcome text-center">
					<div className="col-12">
						<h1 className="display-4">My Skills.</h1>
					</div>
					<hr/>
					<div className="col-12">
						<p className="lead">These are some of the skills I picked up over the years (Past 3 months)</p>
				
					</div>
					
				</div>

				<div className="container-fluid padding">
					<div className="row text-center padding">
						<div className="col-xs-12 col-sm-6 col-md-4">
							<i className="fas fa-code"></i>
							<h3>HTML</h3>
						</div>
						<div className="col-xs col-sm-6 col-md-4">
							<i className="fab fa-node-js"></i>
							<h3>Java Script</h3>
						</div>
						<div className="col-sm-12 col-md-4">
							<i className="fab fa-css3"></i>
							<h3>CSS</h3>



						</div>
						<hr className="my-4"/>
					
					</div>
				</div>
                </div>
    ) }

    export default Skills