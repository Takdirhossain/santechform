import { useState } from "react";
import "../style/responsive.css"
import "../style/style.css"
import Logo from "../assets/oterhs/logo (1).png";
import logo2 from "../assets/oterhs/logo -light.png";
import aboutus from "../assets/oterhs/construccion.jpg";
import Electrical from "../assets/services/electrical.jpg";
import servicehover from "../assets/oterhs/logo-item.png";
import carpenter from "../assets/services/carpenter.jpg";
import cleaner from "../assets/services/cleaner.jpg";
import garderning from "../assets/services/garderning.jpg";
import plumbing from "../assets/services/plumbing.jpg";
import system from "../assets/services/system.jpg";
import permises from "../assets/oterhs/pexels-life-of-pix-8092.jpg";
import { handaleservice } from "../functions/Servicemodal";
import mantenimiento from "../assets/oterhs/feature-mantenimiento.png"
import clarity from '../assets/oterhs/features-clarity.png'
import customer from "../assets/oterhs/features-custumer.png"
import services from "../assets/oterhs/features-100services.png"
import user from "../assets/oterhs/feature-user.png"
import clock from '../assets/oterhs/feature-24hours.png'
import qualified from "../assets/oterhs/icons8-aprobación-80.png"
import services2 from "../assets/oterhs/icons8-servicio-50.png"
import support from "../assets/oterhs/icons8-auriculares-50.png"
import facebook from "../assets/oterhs/icons8-facebook-24.png"
import instagram from "../assets/oterhs/icons8-instagram-50.png"
import linkedin from "../assets/oterhs/icons8-linkedin-30.png"
import twitter from "../assets/oterhs/icons8-twitter-30.png"
import click from "../assets/oterhs/feature-clickk.png"
import login from "../assets/oterhs/feature-loginn.png"
import year from "../assets/oterhs/feature-year.png"
import { ServicesSliderIndivisiul } from "../components/Subscribe";
import { sales } from "../functions/SalesContact";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";


const Indivisul = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedPackagePrice, setSelectedPackagePrice] = useState("");

  const handleRegionSelection = (e) => {
    const selectregion = e.target.value;

    setSelectedRegion(selectregion);
    setSelectedCountry("");
    setSelectedPackagePrice("");
  };
  const handleCountrySelection = (e) => {
    const country = e.target.value;
    console.log(country);
    setSelectedCountry(country);
    setSelectedPackagePrice(sales[selectedRegion][country]);
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <header>
        <nav id="nav">
       <Nav/>
        </nav>

        <div class="conteiner-opening">
          <div class="text-opening">
            <h1>
              <img class="logo-header" src={logo2} alt="Let Us Maintain" />
            </h1>
            <button class="button-light">Get Started</button>
            <a class="button-light" href="./customer.html">
              Go Customer Site
            </a>
          </div>
        </div>
      </header>

      <div id="about" class="etiquetas">
        <div class="etiqueta-item">
          <p class="etiquetas-info">2019</p>
          <p class="etiquetas-titulo">Founded</p>
        </div>
        <div class="etiqueta-item">
          <p class="etiquetas-info">150+</p>
          <p class="etiquetas-titulo">Clients</p>
        </div>
        <div class="etiqueta-item">
          <p class="etiquetas-info">270+</p>
          <p class="etiquetas-titulo">Team Size</p>
        </div>
        <div class="etiqueta-item">
          <p class="etiquetas-info">Worldwide</p>
          <p class="etiquetas-titulo">Locations</p>
        </div>
      </div>

      <section class="let-us-maintain">
        <div class="let-us-maintain-item">
          <img src={aboutus} className="aboutimg" alt="construccion" />
        </div>
        <div class="let-us-maintain-item">
          <h2> What is LetUsMaintain.com? </h2>

          <p>
            We are the one & only Facility Management Solution Company for both
            individuals &businesses to subscribe to our solution to cover your
            complete maintenance of digital systems & property under service
            maintenance solution that includes all kinds of fixing at client
            premises by our professionally trained engineers & technicians. And
            to make the client free mind for their private/commercial premises
            maintenance by activating the subscription for multiple services in
            one plan.
          </p>
          <a href="./aboutus.html" class="button-blue">
            Learn More
          </a>
        </div>
      </section>

      <section id="services" class="services-section">
        <h2 class="service-h2">Services</h2>

        <section class="services">
          <div onClick={() => handaleservice(1)} class="service-item service1">
            <div class="img">
              <img class="img-item" src={Electrical} alt="" />
              <div class="hover-item">
                <p class="item-number">1</p>
                <img src={servicehover} alt="logo-M" />
                <h2>Electrical & Electronics Maintenance</h2>
              </div>
            </div>
          </div>
          <div onClick={() => handaleservice(2)}  class="service-item service2">
            <div class="img">
              <img class="img-item" src={plumbing} alt="" />
              <div class="hover-item">
                <p class="item-number">2</p>
                <img src={servicehover} alt="logo-M" />
                <h2>Plumbing Maintenance</h2>
              </div>
            </div>
          </div>
          <div onClick={() => handaleservice(3)} class="service-item service4">
            <div class="img">
              <img class="img-item" src={system} alt="" />
              <div class="hover-item">
                <p class="item-number">3</p>
                <img src={servicehover} alt="logo-M" />
                <h2>Computer System Maintenance</h2>
              </div>
            </div>
          </div>
          <div onClick={() => handaleservice(4)}  class="service-item service5">
            <div class="img">
              <img class="img-item" src={carpenter} alt="" />
              <div class="hover-item">
                <p class="item-number">4</p>
                <img src={servicehover} alt="logo-M" />
                <h2>Carpenter Services</h2>
              </div>
            </div>
          </div>
          <div onClick={() => handaleservice(5)}  class="service-item service6">
            <div class="img">
              <img class="img-item" src={cleaner} alt="" />
              <div class="hover-item">
                <p class="item-number">5</p>
                <img src={servicehover} alt="logo-M" />
                <h2>Housekeeping Services (Cleaning Services)</h2>
              </div>
            </div>
          </div>
          <div onClick={() => handaleservice(6)}   class="service-item service3">
            <div class="img">
              <img class="img-item" src={garderning} alt="" />
              <div class="hover-item">
                <p class="item-number">6</p>
                <img src={servicehover} alt="logo-M" />
                <h2>Gardening Services</h2>
              </div>
            </div>
          </div>

          <div onClick={() => handaleservice(7)} class="service-item service7">
            <div class="img">
              <img class="img-item" src={permises} alt="" />
              <div class="hover-item">
                <p class="item-number">7</p>
                <img src={servicehover} alt="logo-M" />
                <h2>Premises Review</h2>
              </div>
            </div>
          </div>
        </section>        
      </section>

      <div class="container-features">
        <div class="title-features">
          <h2>FEATURES</h2>
          <hr />
        </div>

        <ul class="features">
          <li class="item-features">
            <div class="cell  features-left">
              <img
                class="img-valor test"
                src={mantenimiento}
                alt="logo"
              />
            </div>
            <div class="cell">
              <p class="text pre-line">
              Package Includes Service cost, fixing, repairing, as per services if any need of parts and any new kind of hardware that will be provided by user itself or it can be purchased by them on nominal discount from our partner stores.
              </p>
            </div>
          </li>
          <li class="item-features">
            <div class="cell">
              <p class="text pre-line">
              Our technician is just a click away from your premises whenever you need support just think about one brand Letusmaintain.com


              </p>
            </div>
            <div class="cell features-right">
              <img
                class="img-valor"
                src={click}
                alt="logo"
              />
            </div>
          </li>
          <li class="item-features">
            <div class="cell features-left">
              <img
                class="img-valor test"
                src={user}
                alt="logo"
              />
            </div>
            <div class="cell">
              <p class="text pre-line">
              Once subscribed the package then just verify your details via mail, and register into subscriber login with your username & password provided at the time of subscribing the plan on your provided email address


              </p>
            </div>
          </li>
          <li class="item-features">
            <div class="cell">
              <p class="text pre-line">To file the service complaint just use your dashboard login</p>
            </div>
            <div class="cell features-right">
              <img
                class="img-valor"
                src={login}
                alt="logo"
              />
            </div>
          </li>
          <li class="item-features">
            <div class="cell features-left">
              <img class="img-valor test" src={clock} alt="logo" />
            </div>
            <div class="cell">
              <p class="text pre-line">
              The service engineer will be at your doorstep within 2 to 3 hours after filling the request or as per your convenience
              </p>
            </div>
          </li>
          <li class="item-features">
            <div class="cell">
              <p class="text pre-line">Plan valid for one year from the date of subscription</p>
            </div>
            <div class="cell features-right">
              <img
                class="img-valor"
                src={year}
                alt="logo"
              />
            </div>
          </li>
        </ul>
      </div>

     <ServicesSliderIndivisiul/>

      <section class="us">
        <div class="choose-us">
          <h2>Why Choose Us?</h2>
          <div class="item-us">
            <img className="testcontact" src={qualified} alt="Icon 1" />
            <h3>Qualified Personnel</h3>
            <p>
              We have qualified professionals for all the services we provide.
              Quality service is our pride.
            </p>
          </div>
          <div class="item-us">
            <img className="testcontact" src={services2} alt="Icon 2" />
            <h3>Impeccable Service</h3>
            <p>
              Our services are world-class and we ensure to deliver give on.time
              delivery.
            </p>
          </div>
          <div class="item-us ">
            <img className="testcontact" src={support} alt="Icon 3" />
           <div>
           <h3>24/7 Customer Service</h3>
            <p>
              Our clients can reach us at any moment in time. During the day or
              night.
            </p>
           </div>
          </div>
        </div>
      </section>

      <footer>
        <div class="footer-links">
        <Link to="/trames"><a class="footer-link" >
            Terms & Conditions
          </a></Link>
          <Link to="/privacy">
          <a class="footer-link">
            Privacy Policy
          </a>
          </Link>
          <Link to="/cancellation">
          
          <a class="footer-link" >
            Payment Policy
          </a>
          </Link>
          <Link to="/career">
          <a class="footer-link" >
            Join Team
          </a>
          </Link>
         <Link to="/registation">
         <a class="footer-link" >
            Channel Partner
          </a>
         </Link>
        
          <a class="footer-link" id="corporate-footer" href="#">
            {/* The button to open modal */}
            <label htmlFor="my-modal" className="">
              Corporate Office
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <select
                  value={selectedOption}
                  onChange={handleOptionChange}
                  name=""
                  id=""
                >
                  <option value="">Select A Region</option>
                  <option value="asia">Asia</option>
                  <option value="europe">Europe</option>
                  <option value="northamerica">North America</option>
                </select>
                <div>
                  {selectedOption === "asia" && (
                    <div className="mt-5">
                      Street: 10, Hermes Centre, Sector 17, Vashi, Navi Mumbai
                      City: Mumbai State: Maharashtra Phone Number: 02227890390
                      Country: India
                    </div>
                  )}
                  {selectedOption === "europe" && (
                    <div className="mt-5">
                      Street: Thwake Bldg, 1431-90139 Ekalakala City: Machakos
                      State: Machakos Phone Number: +254-4420255 Country: United
                      Kingdom
                    </div>
                  )}
                  {selectedOption === "northamerica" && (
                    <div className="mt-5">
                      Street: Box No. 80361 City: Toronto State:  Montreal Phone
                      Number: +97142726743 Country:Canada
                    </div>
                  )}
                </div>
                <div className="modal-action">
                  <label htmlFor="my-modal" className="btn">
                    Got It
                  </label>
                </div>
              </div>
            </div>
          </a>
          <a class="footer-link" id="sales-contact-up" href="#">
            <label htmlFor="my-modal-6" className="">
             Sales Contract
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <span>Select Region</span>
                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <select
                    required
                    onClick={(e) => handleRegionSelection(e)}
                    name="country"
                    className="focus:outline-none w-full bg-transparent"
                    id=""
                  >
                    {Object.keys(sales).map((region) => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>
                </div>
                <div class="md:col-span-2">
                  <label for="country">Country*</label>
                  <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    {selectedRegion && (
                      <>
                        <select
                          className="focus:outline-none w-full bg-transparent"
                          onClick={(e) => handleCountrySelection(e)}
                        >
                          {Object.keys(sales[selectedRegion]).map((country) => (
                            <option key={country} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                      </>
                    )}
                  </div>
                  <p className="mt-5">{selectedPackagePrice}</p>
                </div>
                <div className="modal-action">
                  <label htmlFor="my-modal-6" className="btn">
                    Yay!
                  </label>
                </div>
              </div>
            </div>
          </a>
          <a class="footer-link" href="#">
            User Login
          </a>
        </div>
        {/* <form id="region-form" class="sales-contact">
          <h3>Choose your region</h3>
          <select id="region-select">
            <option value="">Select a region</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="north-america">North America</option>
          </select>
          <div id="address-fields">
            <p>
              {" "}
              Street: <span id="street"></span>{" "}
            </p>
            <p>
              City: <span id="city"></span>
            </p>
            <p>
              State:<span id="state"></span>
            </p>
            <p>
              Phone Number:<span id="phone"></span>
            </p>
            <p>
              Country:<span id="country"></span>
            </p>
          </div>
          <button type="submit">Got it, thanks!</button>
          <img
            class="close-image"
            src="./img/icons8-multiplicar-24.png"
            alt=""
          />
        </form> */}

        {/* <form id="sales-contact" class="sales-contact">
          <h3>Choose your region</h3>

          <select id="contry-contact">
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="northamerica">North America</option>
          </select>
          <select name="country-option" id="country-option">
            <option value="India">India</option>
            <option value="Singapore">Singapore</option>
            <option value="Thailand">Thailand</option>
            <option value="Turkey">Turkey</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="UAE">UAE</option>
          </select>
          <div id="content">
            <p>
              <strong>Stree:</strong>{" "}
              <span class="street">
                10, Hermes Centre, Sector 17, Vashi, Navi Mumbai
              </span>
            </p>
            <p>
              <strong>City:</strong>
              <span class="city">Mumbai</span>
            </p>
            <p>
              <strong>City:</strong>
              <span class="state">Maharashtra</span>
            </p>
            <p>
              <strong>Phone:</strong> <span class="phone">02227890390</span>
            </p>
            <p>
              <strong>Country:</strong> <span class="country">India</span>
            </p>
          </div>
          <button type="submit">Got it, thanks!</button>
          <img
            class="close-image"
            src="./img/icons8-multiplicar-24.png"
            alt=""
          />
        </form> */}

        <div class="footer-grid">
          <div class="footer1"> Operational In </div>
          <div class="footer2"> Asia </div>
          <div class="footer3"> Europe </div>
          <div class="footer4"> North America </div>
          <div class="footer5">
            <p>India</p>
            <p>Singapore</p>
            <p>Thailand</p>
            <p>Turkey</p>
            <p> Hong Kong</p>
            <p>and UAE</p>
          </div>
          <div class="footer6">
            <p>United Kingdom</p>
            <p> Ireland</p>
            <p> Netherlands</p>
            <p> Italy</p>
            <p> Hungary</p>
            <p> Switzerland</p>
            <p> Germany</p>
            <p> Poland</p>
            <p> Sweden</p>
            <p> Denmark</p>
            <p> Belgium</p>
            <p> France</p>
            <p> Spain</p>
            <p> and Portugal</p>
          </div>
          <div class="footer7">
            <p>Canada</p>
            <p> and United States of America</p>
          </div>
        </div>
        <hr class="hr-footer" />

        <div class="logo-footer">
          <img src={Logo} alt="Company Logo" />
          <p>Copyright: All rights reserved ©2023</p>
          <div class="links-footer">
            <a
              class="footer-link"
              href="https://www.facebook.com/profile.php?id=100092328792629"
              target="_blank"
            >
              <img src={facebook} alt="facebook" />
            </a>
            <a
              class="footer-link"
              href="https://instagram.com/letusmaintain?igshid=NTc4MTIwNjQ2YQ=="
              target="_blank"
            >
              <img src= {instagram} alt="instragram" />
            </a>
            <a
              class="footer-link"
              href="https://twitter.com/letusmaintain?s=21&t=ITFELYxk4Sjk4PwhNSI7WQ"
              target="_blank"
            >
              <img src={twitter} alt="twitter" />
            </a>
            <a
              class="footer-link"
              href="https://www.linkedin.com/showcase/letusmaintain-com/"
              target="_blank"
            >
              <img src= {linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Indivisul;
