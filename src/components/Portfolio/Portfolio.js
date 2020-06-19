import React from 'react';

const Portfolio = () => {
  return ( 
    <div className="row">
      <div className="col-md-4">
        <div className="card" style= {{ maxWidth:"18rem" }}>
          <img src="https://i.imgur.com/EISoRJ4.jpg" className="card-img-top" alt="eSPACE"/>
            <div className="card-body">
              <h5 className="card-title">eSPACE</h5>
              <p className="card-text">The Space Exploration e-learning app. Leverages SpaceX API and Space News API</p>
              <a href="https://hayleyrob.github.io/eSPACE/" className="btn btn-primary" target="_blank">Visit App</a>
            </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card" style={{ maxWidth: "18rem" }}>
          <img src="https://i.imgur.com/Rtp0DET.png" className="card-img-top" alt="ArtistaDay"/>
              <div className="card-body">
                <h5 className="card-title">ArtistaDay</h5>
                <p className="card-text">Artist timed sales events app with mySQL, Node, Express</p>
                <a href="https://github.com/usrs/ArtistaDay" className="btn btn-primary" target="_blank">Visit App</a>
              </div>
          </div>

      </div>
      <div className="col-md-4">
        <div className="card" style={{ maxWidth: "18rem" }}>
          <img src="https://i.imgur.com/MrgEP18.png" className="card-img-top" alt="WorkoutTracker"/>
                <div className="card-body">
                  <h5 className="card-title">Workout Tracker</h5>
                  <p className="card-text">A Node, Express, and MongoDB App that tracks your workouts</p>
                  <a href="https://guarded-tor-39894.herokuapp.com/" className="btn btn-primary" target="_blank">Visit App</a>
                </div>
            </div>

      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="card" style={{ maxWidth: "18rem" }}>
          <img src="https://i.imgur.com/saoSkeo.png" className="card-img-top" alt="eSPACE" />
          <div className="card-body">
            <h5 className="card-title">Express NoteTaker</h5>
            <p className="card-text">An App for creating and accessing notes built with Express and Node</p>
            <a href="https://nameless-inlet-68056.herokuapp.com/" className="btn btn-primary" target="_blank">Visit App</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card" style={{ maxWidth: "18rem" }}>
          <img src="https://i.imgur.com/vBPj3VB.png" className="card-img-top" alt="ArtistaDay" />
          <div className="card-body">
            <h5 className="card-title">Day Planner</h5>
            <p className="card-text">A Javascript app for planning your day</p>
            <a href="https://hayleyrob.github.io/Day-Planner/" className="btn btn-primary" target="_blank">Visit App</a>
          </div>
        </div>

      </div>
      <div className="col-md-4">
        <div className="card" style={{ maxWidth: "18rem" }}>
          <img src="https://i.imgur.com/u00v92F.png" className="card-img-top" alt="WorkoutTracker" />
          <div className="card-body">
            <h5 className="card-title">Code Quiz</h5>
            <p className="card-text">A Javascript Quiz App for Coding</p>
            <a href="https://hayleyrob.github.io/Code-Quiz/" className="btn btn-primary" target="_blank">Visit App</a>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Portfolio