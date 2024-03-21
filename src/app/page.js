import React from "react";
import Navbar from "./components/nav";
import Main from "./components/main/main"
import Cafes from "./components/cafes";
import Locate from './components/locate'
import AboutUs from './components/aboutUs'
import Footer from './components/footer'
import Player from "./components/player";
import "../style/style.scss"

export default function Home() {
  return (
    <div className="container">
      <Navbar/>
      <Player/>
      <Main/>
      <Cafes/>
      <Locate/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}
