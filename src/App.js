import React from 'react';
import './App.css';

import MyNavBar from './MyNavbar/MyNavbar';
import Jumbo from './Jumbo/Jumbo';
import LandingCard from './LandingCard/LandingCard';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
      <MyNavBar/>
      <div className="container">
        <Jumbo/>
        <div className="row text-center">
            <LandingCard image="https://cdn.arstechnica.net/wp-content/uploads/2017/10/Futurama-800x449.jpg" title="Card 1" description="Soon enough. I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Look, everyone wants to be like Germany, but do we really have the pure strength of 'will'? Bender, I didn't know you liked cooking. That's so cute." btnUrl="http://fillerama.io/" btnClassName="btn btn-primary" btnName="button1" />
            <LandingCard image="https://vignette.wikia.nocookie.net/en.futurama/images/6/67/Futurama-01_0.jpg/revision/latest?cb=20141012181430" title="Card 2" description="Bite my shiny metal ass. I'm sorry, guys. I never meant to hurt you. Just to destroy everything you ever believed in. Who said that? SURE you can die! You want to die?! There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors!" btnUrl="http://fillerama.io/" btnClassName="btn btn-danger" btnName="button2" />
            <LandingCard image="https://fsmedia.imgix.net/b7/5f/24/d9/c4fd/47e6/a638/8b692c08695f/futurama.jpeg?rect=225%2C0%2C799%2C400&auto=format%2Ccompress&dpr=2&w=650" title="Card 3" description="What kind of a father would I be if I said no? Well, then good news! It's a suppository. That's right, baby. I ain't your loverboy Flexo, the guy you love so much. You even love anyone pretending to be him!" btnUrl="http://fillerama.io/" btnClassName="btn btn-success" btnName="button3" />
            <LandingCard image="https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/07/futurma-main-920x584.jpg" title="Card 4" description="There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors! Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. Cruel though they may be…" btnUrl="http://fillerama.io/" btnClassName="btn btn-warning" btnName="button4" />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
