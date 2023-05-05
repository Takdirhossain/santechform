import React from "react";
import Topnav from "../components/Topnav";
import Nav from "../components/Nav";
import Service from "../components/Service";
import Video from "../components/Video";
import Tesimonial from "../components/Tesimonial";
import Subscribe from "../components/Subscribe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Topnav></Topnav>
      
      <Service />
      <Video />
      <Tesimonial />
      <Subscribe />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
