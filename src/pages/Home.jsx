import { useState } from "react";
import "../style/responsive.css";
import "../style/style.css";
import Logo from "../assets/oterhs/logo (1).png"
import logo2 from "../assets/oterhs/logo -light.png"
const Home = () => {
  const [element, setElement] = useState(false);
  console.log(element);
  return (
    <div>
      {
        element ? <></>
        :
        <div onClick={() => setElement(true)} class="floating-section">
        <div class="floating-container">
          <img src={Logo} alt="Company Logo" />
          <h2 class="floating-title">Select your profile</h2>
          <a class="floating-link">
            <div class="floating-enterprice">
              <h2 class="title-secondary">Enterprise</h2>
            </div>
          </a>
          <a class="floating-link" >
            <div class="floating-customer">
              <h2 class="title-secondary">Individual</h2>
            </div>
          </a>
        </div>
      </div>
      }
      
{
  element &&  <div>
  <header>
    <nav id="nav">
      <div class="navbar">
        <ul class="navbar-list">
          <li>
            <a class="nav-link" href="#about">
              About Us
            </a>{" "}
          </li>
          <li>
            <a class="nav-link" href="#services">
              Services
            </a>{" "}
          </li>
          <li>
            <a class="nav-link" href="#features">
              Features
            </a>{" "}
          </li>
          <li>
            <a class="nav-link" href="#subscribe">
              Subscribe Steps
            </a>{" "}
          </li>
        </ul>
        <a href="#">
          <img class="logo" src={logo2} alt="logo" />
        </a>

        <button class="ham">
          <span class="br top"></span>
          <span class="br center"></span>
          <span class="br bottom"></span>
        </button>
      </div>
    </nav>

    <div class="conteiner-opening">
      <div class="text-opening">
        <h1>
          <img
            class="logo-header"
            src="./img/logo-header.png"
            alt="Let Us Maintain"
          />
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
      <img src="./img/construccion.jpg" alt="construccion" />
    </div>
    <div class="let-us-maintain-item">
      <h2> What is LetUsMaintain.com ? </h2>

      <p>
        We are the one & only Facility Management Solution Company for
        both individuals &businesses to subscribe to our solution to cover
        your complete maintenance of digital systems & property under
        service maintenance solution that includes all kinds of fixing at
        client premises by our professionally trained engineers &
        technicians. And to make the client free mind for their
        private/commercial premises maintenance by activating the
        subscription for multiple services in one plan.
      </p>
      <a href="./aboutus.html" class="button-blue">
        Learn More
      </a>
    </div>
  </section>

  <section id="services" class="services-section">
    <h2 class="service-h2">Services</h2>

    <section class="services">
      <div class="service-item service1">
        <div class="img">
          <img
            class="img-item"
            src="./img/services/electrical.jpg"
            alt=""
          />
          <div class="hover-item">
            <p class="item-number">1</p>
            <img src="./img/logo-item.png" alt="logo-M" />
            <h2>Electrical & Electronics Maintenance</h2>
          </div>
        </div>
      </div>
      <div class="service-item service2">
        <div class="img">
          <img
            class="img-item"
            src="./img/services/plumbing.jpg"
            alt=""
          />
          <div class="hover-item">
            <p class="item-number">2</p>
            <img src="./img/logo-item.png" alt="logo-M" />
            <h2>Plumbing Maintenance</h2>
          </div>
        </div>
      </div>
      <div class="service-item service4">
        <div class="img">
          <img class="img-item" src="./img/services/system.jpg" alt="" />
          <div class="hover-item">
            <p class="item-number">3</p>
            <img src="./img/logo-item.png" alt="logo-M" />
            <h2>Computer System Maintenance</h2>
          </div>
        </div>
      </div>
      <div class="service-item service5">
        <div class="img">
          <img
            class="img-item"
            src="./img/services/carpenter.jpg"
            alt=""
          />
          <div class="hover-item">
            <p class="item-number">4</p>
            <img src="./img/logo-item.png" alt="logo-M" />
            <h2>Carpenter Services</h2>
          </div>
        </div>
      </div>
      <div class="service-item service6">
        <div class="img">
          <img class="img-item" src="./img/services/cleaner.jpg" alt="" />
          <div class="hover-item">
            <p class="item-number">5</p>
            <img src="./img/logo-item.png" alt="logo-M" />
            <h2>Housekeeping Services (Cleaning Services)</h2>
          </div>
        </div>
      </div>
      <div class="service-item service3">
        <div class="img">
          <img
            class="img-item"
            src="./img/services/garderning.jpg"
            alt=""
          />
          <div class="hover-item">
            <p class="item-number">6</p>
            <img src="./img/logo-item.png" alt="logo-M" />
            <h2>Gardening Services</h2>
          </div>
        </div>
      </div>

      <div class="service-item service7">
        <div class="img">
          <img
            class="img-item"
            src="./img/pexels-life-of-pix-8092.jpg"
            alt=""
          />
          <div class="hover-item">
            <p class="item-number">7</p>
            <img src="./img/logo-item.png" alt="logo-M" />
            <h2>Premises Review</h2>
          </div>
        </div>
      </div>
    </section>

    <section class="services-popup">
      <div class="service-popup popup1 hidden ">
        <div class="popup-text ">
          <h2>Electrical & Electronics Maintenance</h2>
          <ul>
            <li>Switchbox Installation (Any type)</li>
            <li>Switchboard Repairing</li>
            <li>Switch & Socket Repairing</li>
            <li>Fan (Ceiling/Standing/Wall) Installation, Repairing</li>
            <li>Lights Installation wall, ceiling, (Any type)</li>
            <li>
              MCB Installation, Meter Installation, Circuit Repairing
            </li>
            <li>Power House Maintenance & Servicing</li>
            <li>
              Wiring (Internal/Outer), Casing (Shot Repair & New
              Installing)
            </li>
          </ul>
          <img
            class="close"
            src="./img/icons8-multiplicar-24.png"
            alt=""
          />
        </div>
      </div>
      <div class="service-popup popup2 hidden">
        <div class="popup-text">
          <h2>Plumbing Solutions</h2>
          <ul>
            <li>Leakage Repairing</li>
            <li>Washbasin Installation & Repairing</li>
            <li>Waste Pipe Installation</li>
            <li>Bathroom Accessories Installation/Repairing </li>
            <li>Bath Fitting Installation</li>
            <li>Water Pipe Blockage Repairing</li>
            <li>Drainage Pipe Installation/Repairing</li>
            <li>Commode Installation/Part Changing</li>
            <li>Tap Installation & Repair (Any type)</li>
            <li>Toilet Seat Accessories Replacement (Any type)</li>
            <li>Water Tank Installation/ Leakage Repair</li>
            <li>Water Motor Servicing/ Installation/Changing</li>
            <li>
              Any kind of Product Installation or servicing or maintenance{" "}
            </li>
          </ul>
          <img
            class="close"
            src="./img/icons8-multiplicar-24.png"
            alt=""
          />
        </div>
      </div>
      <div class="service-popup popup3 hidden ">
        <div class="popup-text">
          <h2>Landcaping Solutions</h2>
          <ul>
            <li>
              Maintain and grow the garden to ensure it meets specific
              requirements and expectations.
            </li>
            <li>
              Basic maintenance such as cutting the grass, emptying bins,
              managing weeds control and leaf raking.
            </li>
            <li>
              Plant and nurture new trees, flowers, and various plants.
            </li>
            <li>
              Work with hand tools and basic light machinery such as plant
              vehicles, and small diggers.{" "}
            </li>
            <li>Servicing all garden equipment and machinery.</li>
            <li>
              Maintain a clean garden by clearing rubbish and litter from
              the garden and grounds.
            </li>
            <li>
              Provide guidance to management on matters related to the
              garden.
            </li>
            <li>
              Will advise management on the costs of plants and garden
              necessities with detailed written quotations and reports.
            </li>
            <li>
              Ensure a safe environment for staff and clients by adhering
              to safety and health regulations.
            </li>
            <li>
              Snow removal efforts may be overseen and/or assisted with.
              [If Require]
            </li>
            <li>
              Lawns and/or sporting fields may be irrigated, mowed, raked,
              and trimmed.
            </li>
          </ul>
          <img
            class="close"
            src="./img/icons8-multiplicar-24.png"
            alt=""
          />
        </div>
      </div>
      <div class="service-popup popup4 hidden ">
        <div class="popup-text ">
          <h2>Computer Hardware & Software Maintenance </h2>
          <h3>Offline Support:</h3>
          <ul>
            <li>Computer or Desktop deployment, relocation and setup</li>
            <li>
              Virus and spyware removal & malicious software prevention
            </li>
            <li>
              Hardware Installations, & upgrading memory, hard drives,
              SSD’s video cards, disc drives etc
            </li>
            <li>
              Computer peripheral installation, configuration and
              networking, including printers{" "}
            </li>
            <li>Network design and configuration </li>
            <li>
              Software installation & upgrades, such as operating system &
              database applications
            </li>
            <li>
              Troubleshooting & repairing of internet access connection
              issues
            </li>
            <li>
              Router and firewall installation configuration, &
              troubleshooting
            </li>
            <li>Email and messaging configuration and support</li>
            <li>Data backup & recovery solutions</li>
            <li>Password recovery services</li>
          </ul>
          <h3>Online Support</h3>
          <ul>
            <li>
              Locating and removing viruses and other malicious software
              from the system
            </li>
            <li>
              Tuning up a personal computer, helping it to start and
              function much faster
            </li>
            <li>
              Configuring & repairing email access clients, such as
              outlook, and their associated data files
            </li>
            <li>
              Configuring external devices, such as printers, scanners,
              and external storage drives{" "}
            </li>
            <li>
              Performing standard routine maintenance such as examining
              system logs for issues{" "}
            </li>
            <li>
              Assisting in data back-up processes and migrating data
              between multiple computers in a networks
            </li>
            <li>
              Checking network connections for possible vulnerabilities
            </li>
            <li>Resolving various software and hardware conflicts</li>
            <li>
              Assisting in the installation and upgrading of various
              software packages
            </li>
            <li>
              Repairing errors that cause a computer to lock or freeze up
            </li>
            <li>
              Setting up secure wireless networks once the proper
              equipment connections are in place
            </li>
          </ul>
          <img
            class="close"
            src="./img/icons8-multiplicar-24.png"
            alt=""
          />
        </div>
      </div>
      <div class="service-popup popup5 hidden ">
        <div class="popup-text ">
          <h2>Carpenter Services</h2>
          <ul>
            <li>Curtain & Blinds Installation/Repairing</li>
            <li>Doors & Window Installation/Repairing</li>
            <li>Locks & Handle Installation/Replacement</li>
            <li>All kinds of Drawer & Shelf Repairing. </li>
            <li>Furniture Installation & Repairing</li>
            <li>Furniture Assembling (Any type).</li>
            <li>Furniture Dismantle</li>
            <li>
              Any type of accessories, product
              Replacement/Repairing/Installation
            </li>
            <li>Custom Building of any product </li>
            <li>Sunmica Sheet Replacement/ Installation </li>
            <li>Plywood/Blockboard Installation</li>
            <li>Any kind of repairing as per carpenter related tasks</li>
          </ul>
          <img
            class="close"
            src="./img/icons8-multiplicar-24.png"
            alt=""
          />
        </div>
      </div>
      <div class="service-popup popup6 hidden ">
        <div class="popup-text ">
          <h2>Cleaning Solution</h2>
          <ul>
            <li>Washroom Cleaning</li>
            <li>Area Cleaning [Indoors & Outdoors]</li>
            <li>Water Tank Cleaning</li>
            <li>Appliances Cleaning </li>
            <li>Glasses Cleaning </li>
            <li>Pantry Cleaning</li>
            <li>Appliances Cleaning</li>
            <li>Furniture Cleaning</li>
            <li>
              Keeping up to date everything which can be maintained by
              cleaning and keeping good hygiene of the premises{" "}
            </li>
          </ul>
          <img
            class="close"
            src="./img/icons8-multiplicar-24.png"
            alt=""
          />
        </div>
      </div>
      <div class="service-popup popup7 hidden">
        <div class="popup-text ">
          <h2>Premises Review</h2>
          <ul>
            <li>Premises review by Facility Management Manager </li>
            <li>
              Helping to change parts or and to make decisions about
              condition of premises maintenance status
            </li>
            <li>
              Drafting reports and share it with the owner or any
              representative other of the premises
            </li>
            <li>
              Advising on increasing efficiency and cost effectiveness{" "}
            </li>
            <li>
              Supervising multi-disciplinary services team that service as
              per standard of the premises{" "}
            </li>
            <li>
              Ensuring that facilities such as electrical, plumbing,
              computers, and others are well maintained or not, if not
              then give consulting about to make changes
            </li>
            <li>
              Review of premises is just like you do your health checkups,
              its check-up of your premises maintenance condition
            </li>
          </ul>
          <img
            class="close"
            src="./img/icons8-multiplicar-24.png"
            alt=""
          />
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
        <div class="cell features-left">
          <img
            class="img-valor"
            src="./img/feature-mantenimiento.png"
            alt="logo"
          />
        </div>
        <div class="cell">
          <p class="text pre-line">
            The only Subscription Based Facility Maintenance Service
            Provider
          </p>
        </div>
      </li>
      <li class="item-features">
        <div class="cell">
          <p class="text pre-line">
            Improved clarity of solutions and process will not be tedious
            since we will be giving service at a convenient price
          </p>
        </div>
        <div class="cell features-right">
          <img
            class="img-valor"
            src="./img/features-clarity.png"
            alt="logo"
          />
        </div>
      </li>
      <li class="item-features">
        <div class="cell features-left">
          <img
            class="img-valor"
            src="./img/features-custumer.png"
            alt="logo"
          />
        </div>
        <div class="cell">
          <p class="text pre-line">
            Impressive and permanent solutions with customer satisfaction
          </p>
        </div>
      </li>
      <li class="item-features">
        <div class="cell">
          <p class="text pre-line">100+ services under single package</p>
        </div>
        <div class="cell features-right">
          <img
            class="img-valor"
            src="./img/features-100services.png"
            alt="logo"
          />
        </div>
      </li>
      <li class="item-features">
        <div class="cell features-left">
          <img
            class="img-valor"
            src="./img/feature-user.png"
            alt="logo"
          />
        </div>
        <div class="cell">
          <p class="text pre-line">
            Client can Track service records by just login into dashboard
          </p>
        </div>
      </li>
      <li class="item-features">
        <div class="cell">
          <p class="text pre-line">24x7 Help Desk</p>
        </div>
        <div class="cell features-right">
          <img
            class="img-valor"
            src="./img/feature-24hours.png"
            alt="logo"
          />
        </div>
      </li>
    </ul>
  </div>

  <div id="portfolio" class="portfolio2">
    <div class="swiffy-slider" id="subscribe">
      <h2 class="portfolio-title"> Before Subscription</h2>
      <br />
      <ul class="slider-container">
        <li class="portfolio-img">
          <ul class="portfolio-description">
            <li class="item-number">1</li>

            <li class="step">Visit www.letusmaintain.com</li>
          </ul>
        </li>
        <li class="portfolio-img">
          <ul class="portfolio-description">
            <li class="item-number">2</li>

            <li class="step">Go through the platform</li>
          </ul>
        </li>
        <li class="portfolio-img">
          <ul class="portfolio-description">
            <li class="item-number">3</li>

            <li class="step">Fill the Subscription Form</li>
          </ul>
        </li>
        <li class="portfolio-img">
          <ul class="portfolio-description">
            <li class="item-number">4</li>

            <li class="step">Choose from multiple payment option</li>
          </ul>
        </li>
        <li class="portfolio-img">
          <ul class="portfolio-description">
            <li class="item-number">5</li>

            <li class="step">Contract Signing</li>
          </ul>
        </li>
        <li class="portfolio-img">
          <ul class="portfolio-description">
            <li class="item-number">6</li>

            <li class="step">Your account is activated now</li>
          </ul>
        </li>
        <li class="portfolio-img">
          <ul class="portfolio-description">
            <li class="item-number">7</li>

            <li class="step">Enjoy</li>
          </ul>
        </li>
      </ul>

      <button type="button" class="slider-nav"></button>
      <button type="button" class="slider-nav slider-nav-next"></button>
      <div class="slider-indicators">
        <button class="active" id="step_button">
          1
        </button>
        <button id="step_button">2</button>
        <button id="step_button">3</button>
        <button id="step_button">4</button>
        <button id="step_button">5</button>
        <button id="step_button">6</button>
        <button id="step_button">7</button>
      </div>
    </div>
    <br />
    <br />
    <div class="swiffy-slider">
      <h2 class="portfolio-title"> After Subscription</h2>
      <br />
      <ul class="slider-container">
        <li class="portfolio-img">
          <ul class="portfolio-description">
            <li class="item-number">1</li>

            <li class="step">After team reach to your premises</li>
          </ul>
        </li>
        <li class="portfolio-img">
          <ul class="portfolio-description">
            <li class="item-number">2</li>

            <li class="step">Login to client dashboard</li>
          </ul>
        </li>
        <li class="portfolio-img">
          <ul class="portfolio-description">
            <li class="item-number">3</li>

            <li class="step">Go through with all features</li>
          </ul>
        </li>
        <li class="portfolio-img">
          <ul class="portfolio-description">
            <li class="item-number">4</li>

            <li class="step">Service Request</li>
          </ul>
        </li>
        <li class="portfolio-img">
          <ul class="portfolio-description">
            <li class="item-number">5</li>

            <li class="step">
              Facility Manager will assign task to the technician
            </li>
          </ul>
        </li>
        <li class="portfolio-img">
          <ul class="portfolio-description">
            <li class="item-number">6</li>

            <li class="step">Technician will complete his task</li>
          </ul>
        </li>
        <li class="portfolio-img">
          <ul class="portfolio-description">
            <li class="item-number">7</li>

            <li class="step">Fill the service feedback form</li>
          </ul>
        </li>
      </ul>

      <button type="button" class="slider-nav"></button>
      <button type="button" class="slider-nav slider-nav-next"></button>

      <div class="slider-indicators">
        <button class="active" id="step_button">
          1
        </button>
        <button id="step_button">2</button>
        <button id="step_button">3</button>
        <button id="step_button">4</button>
        <button id="step_button">5</button>
        <button id="step_button">6</button>
        <button id="step_button">7</button>
      </div>
    </div>
  </div>

  <section class="us">
    <div class="choose-us">
      <h2>Why Choose Us?</h2>
      <div class="item-us">
        <img src="./img/icons8-aprobación-80.png" alt="Icon 1" />
        <h3>Qualified Personnel</h3>
        <p>
          We have qualified professionals for all the services we provide.
          Quality service is our pride.
        </p>
      </div>
      <div class="item-us">
        <img src="./img/icons8-servicio-50.png" alt="Icon 2" />
        <h3>Impeccable Service</h3>
        <p>
          Our services are world-class and we ensure to deliver give
          on.time delivery.
        </p>
      </div>
      <div class="item-us">
        <img src="./img/icons8-auriculares-50.png" alt="Icon 3" />
        <h3>24/7 Customer Service</h3>
        <p>
          Our clients can reach us at any moment in time. During the day
          or night.
        </p>
      </div>
    </div>
  </section>

  <footer>
    <div class="footer-links">
      <a class="footer-link" href="#">
        Terms & Conditions
      </a>
      <a class="footer-link" href="#">
        Privacy Policy
      </a>
      <a class="footer-link" href="#">
        Payment Policy
      </a>
      <a class="footer-link" href="#">
        Join Team
      </a>
      <a class="footer-link" href="#">
        Channel Partner
      </a>
      <a class="footer-link" id="corporate-footer" href="#">
        Corporate Offices
      </a>
      <a class="footer-link" id="sales-contact-up" href="#">
        Sales Contact
      </a>
      <a class="footer-link" href="#">
        User Login
      </a>
    </div>
    <form id="region-form" class="sales-contact">
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
    </form>

    <form id="sales-contact" class="sales-contact">
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
    </form>

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
        <p>Hong Kong </p>
        <p>and UAE</p>
      </div>
      <div class="footer6">
        <p>United Kingdom</p>
        <p>Ireland</p>
        <p>Netherlands</p>
        <p>Italy</p>
        <p>Hungary</p>
        <p>Switzerland</p>
        <p>Germany</p>
        <p>Poland</p>
        <p>Sweden</p>
        <p>Denmark</p>
        <p>Belgium</p>
        <p>France</p>
        <p>Spain</p>
        <p>and Portugal</p>
      </div>
      <div class="footer7">
        <p>Canada</p>
        <p>and United States of America</p>
      </div>
    </div>
    <hr class="hr-footer" />

    <div class="logo-footer">
      <img src="./img/logo-letusmaintain.png" alt="Company Logo" />
      <p>Copyright: All rights reserved ©2023</p>
      <div class="links-footer">
        <a
          class="footer-link"
          href="https://www.facebook.com/profile.php?id=100092328792629"
          target="_blank"
        >
          <img src="./img/icons8-facebook-24.png" alt="facebook" />
        </a>
        <a
          class="footer-link"
          href="https://instagram.com/letusmaintain?igshid=NTc4MTIwNjQ2YQ=="
          target="_blank"
        >
          <img src="./img/icons8-instagram-50.png" alt="instragram" />
        </a>
        <a
          class="footer-link"
          href="https://twitter.com/letusmaintain?s=21&t=ITFELYxk4Sjk4PwhNSI7WQ"
          target="_blank"
        >
          <img src="./img/icons8-twitter-30.png" alt="twitter" />
        </a>
        <a
          class="footer-link"
          href="https://www.linkedin.com/showcase/letusmaintain-com/"
          target="_blank"
        >
          <img src="./img/icons8-linkedin-30.png" alt="linkedin" />
        </a>
      </div>
    </div>
  </footer>
</div>
}
     
    </div>
  );
};

export default Home;
