import { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import useTitle from "../hooks/usetitle";
import Lottie from "lottie-web";
import demo from "../assets/about.json";
const About = () => {
  useTitle("about us");
  const container = useRef(null);
  let anim = null;

  useEffect(() => {
    anim = Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: demo,
    });

    return () => {
      anim.destroy();
    };
  }, []);
  return (
    <div>
      <div className="bg-gray-400">
        <Nav />
      </div>
      <div className="w-2/3 m-auto flex justify-between items-center aboutcontainer mt-20">
        <div className="w-1/2">
          <h2 className="text-5xl font-bold">What We Do?</h2>
          <p className="mt-5">
            We are one and only maintenance solution for individual and
            businesses to subscribe one and only solution to cover your complete
            maintenance of digital systems and property under service
            maintenance solution that includes any kind of fixing at customer
            premises by one of the companie's professional engineers at client
            premises. And be free from all maintenance issues for their
            home/office maintenance by using a plan subscription for multiple
            services in one single plan or as per service.
          </p>
        </div>
        <div ref={container} className="text-center  lg:text-left w-96 "></div>
      </div>
      <div className="w-2/3 m-auto">
        <h2 className="text-5xl font-bold"> We have two service models:</h2>
        <div className="flex justify-between mt-20">
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">B to B</h2>
              <ul>
                <li>Housing Society </li>
                <li>Corporate Office</li>
                <li>Retail, Center, Warehouse, Factory, Shopping Mall </li>
                <li>Hotels</li>
                <li>Hospital Resort</li>
                <li>Industry</li>
                <li>Govt.</li>
                <li>University</li>
              </ul>
             
            </div>
          </div>
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">B to C</h2>
             <ul>
              <li>
              Flat/Villa

              </li>
              <li>
              Office Shop/Showroom, Household, Guest House

              </li>
              <li>
              Clinic, Private Farm

              </li>
              <li>School</li>
             </ul>
            
            </div>
          </div>
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Our Values
</h2>
             <ul>
              <li>Commitment</li>
              <li>Passionate
</li>
              <li>Transparency
</li>
              <li>Consistency</li>
              <li>Efficiency</li>
             </ul>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
