import React from 'react'
import Footer from './Footer'
import ProfilePic from './img/Portfolio image.jpg'
import './About.css';																					 

const About = () => {
    return (
        <div>
            <section className="about r-p" id="about" style={{ marginTop: '100px', height: '100vh'}}>
    <div className="container">
      <div className="row">
      <div className="col-lg-6 animated way-fade-up">
          <img src={ProfilePic} className="img-fluid img-thumbnail profile-img" alt="profile"/>
        </div>
        <div className="col-lg-6 mt-5 mt-lg-0" style={{padding: '50px'}}>
          <h2>About Me</h2>
          <h4> Hello! My name is Abdifatah Hassan</h4>
          <p style={{fontSize: '18px', lineHeight: '32px'}}>I'm a fullstack web developer and I'm infectiously passionate about what I do. To me,
					code isn't just a bunch of commands put together but instead, in the least cliche way possible, I
					like to view my work as a form of art where the studio I use is my canvas, my code is my paint and
					paintbrush and I'm the artist. I'm glad I'm able to consider myself somewhat of an artist because
					I've always been horrible at drawing</p>
          <div>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="https://github.com/Sumaya198"><i className="fab fa-github"></i></a></li>
              <li className="list-inline-item"><a href="https://www.linkedin.com/feed/"><i
                    className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
   
  </section>
  <Footer/>

        </div>
        
    )
}

export default About