
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'

const Footer = () => {
    return (
        <div>
              <footer>
    <div className="container d-flex h-100 align-items-center justify-content-center">
      <div className="row">
        <div className="col">
          <div className="r-icon text-center mt-3">
            <ul>
              <li className="list-inline-item"><a href="https://www.linkedin.com/feed/"><i
                    className="fab fa-linkedin-in"></i></a></li>
              <li className="list-inline-item"><a href="https://github.com/a89ball"><i className="fab fa-github"></i></a></li>
            </ul>

          </div>
          <p className="text-muted" style={{fontSize: '14px'}}>&copy; copyright Abdifatah | 2021 All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>

        </div>
    )
}

export default Footer