import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Skills = () => {
    return ( 
<div class="containter-fluid padding">
				<div class="row welcome text-center">
					<div class="col-12">
						<h1 class="display-4">My Skills.</h1>
					</div>
					<hr>
					<div class="col-12">
						<p class="lead">These are some of the skills I picked up over the years (Past 3 months)</p>
					</div>
				</div>

				<div class="container-fluid padding">
					<div class="row text-center padding">
						<div class="col-xs-12 col-sm-6 col-md-4">
							<i class="fas fa-code"></i>
							<h3>HTML</h3>
						</div>
						<div class="col-xs col-sm-6 col-md-4">
							<i class="fab fa-node-js"></i>
							<h3>Java Script</h3>
						</div>
						<div class="col-sm-12 col-md-4">
							<i class="fab fa-css3"></i>
							<h3>CSS</h3>



						</div>
						<hr class="my-4">
					</div>
				</div>
    ) }

    export default Skills