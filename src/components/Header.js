import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css';
import HeaderImage from './img/background.png'


const Header = () => {
    return (
        <div>
            <header id="home">
                <div className="container-fluid header-content" style={{ backgroundImage: `url(${HeaderImage})`, height: '100vh' }}>
                    <div className="row">
                        <div className="col text-center">
                            <div className="content-box">
                                <h4 className="welcome">Welcome</h4>
                                <h3>My name is Abdifatah Hassan</h3>

                                <a href="https://drive.google.com/file/d/15l-ClmZAiKDov1Expi6BbpBCx2tWmiZm/view"
                                    className="btn download">Download CV</a>
                            </div>
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="https://github.com/a89ball"><i className="fab fa-github"></i></a></li>
                                <li className="list-inline-item"><a href="https://www.linkedin.com/in/abdifatah-hassan-967824212/"><i
                                    className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Header