import React from 'react';
import NavBar from './components/Navbar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Card from './components/Card'
// import About from './components/About'
// import Portfolio from './components/Portfolio'

const App = () => {
  return (
    <>
        <NavBar />
        <About />
        <hr></hr>
        <Portfolio />
        <Card text ="LanChi" />
        <Card text ="Jonah" />
        <Card text = "Shane" />
       

    </>
        
  );
}

export default App;
