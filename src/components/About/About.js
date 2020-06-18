import React from 'react';


const About = () => {
  return (
    <div className="row aboutSection" style={{ backgroundColor: 'black', color: 'white' }}>
       <div className="col-md-4">
         <h2>Hayley</h2>
         <h1>Robinson</h1>
       </div>
      <div className="col-md-4">
        <img src="https://i.imgur.com/mwVb05T.jpg" alt="myPhoto" width="300" height="350"></img>
      </div>
      <div className="col-md-4">
        <p>Full-Stack Software Engineer</p>
        <p>UCLA Undergrad</p>
        <p>Tech Sales Executive</p>
        <p>Photographer</p>
        <p>Design Enthusiast</p>
      </div>
     </div>
  )
}
export default About