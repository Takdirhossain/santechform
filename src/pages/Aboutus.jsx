import React from "react";
import "../style/aboutus.css"
import About from "../assets/oterhs/wepik-export-20230511113815kksJ.png";
import Nav from "../components/Nav";
const Aboutus = () => {
  return (
    <>
          
      <div>
        <img  className="images " src={About} alt="About" />
        <div >

        </div>
        <p
          style={{
            color: "blue",
            fontSize: "27px",
            fontFamily: "fantasy",
            marginTop: "25px",
            marginLeft: "10px",
          }}
        >
          What We Do?
        </p>
        <div
          style={{
            color: "black",
            fontSize: "19px",
            marginLeft: "30px",
            marginRight: "30px",
            fontFamily: "sans-serif",
          }}
        >
          We are one and only maintenance solution for individual and businesses
          to subscribe one and only solution to cover your complete maintenance
          of digital systems and property under service maintenance solution
          that includes any kind of fixing at customer premises by one of the
          companie's professional engineers at client premises. And be free from
          all maintenance issues for their home/office maintenance by using a
          plan subscription for multiple services in one single plan or as per
          service.
        </div>
      </div>
      <div>
        <p
          style={{
            color: "blue",
            fontSize: "27px",
            fontFamily: "fantasy",
            marginLeft: "10px",
            marginTop:"20px"
          }}
        >
          We have two service models:
        </p>
        <div class="container">
          <div class="col">
            <h2 className="bullet-points">B to B</h2>
            <ul >
              <li>Housing Society</li>
              <li>Corporate Office</li>
              <li>Retail, Center, Warehouse, Factory, Shopping Mall</li>
              <li>Hotels</li>
              <li>Hospital Resort</li>
              <li>Industry</li>
              <li>Govt.</li>
              <li>University</li>
            </ul>
          </div>
          <div class="col">
            <h2 className="bullet-points">B to C</h2>
            <ul >
              <li>Flat/Villa</li>
              <li>Office Shop/Showroom, Household, Guest House</li>
              <li>Clinic, Private Farm</li>
              <li>School</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col1">
            <h2>Our Values</h2>
            <ul>
              <li>Commitment</li>
              <li>Passionate</li>
              <li>Transparency</li>
              <li>Consistency</li>
              <li>Efficiency</li>
            </ul>
          </div>
    </>
  );
};

export default Aboutus;
