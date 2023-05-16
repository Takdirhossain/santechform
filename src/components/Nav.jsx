import { Link } from "react-router-dom";
import logo2 from "../assets/oterhs/logo -light.png"
import logo from "../assets/oterhs/logo (1).png"

const Nav = ({type}) => {
 
    return (
        <div className="  	pl-20 m-auto">
      <div className="navbar  ">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="text-xl">
              <Link to="/">Home </Link>
            </li>
            
           
            <li className="text-xl">
              <Link to="/registation">Channel Partner </Link>
            </li>
            <li className="text-xl">
              <Link to="/career">Career </Link>
            </li>

            <li className="text-xl">
              <Link to="/blog">Blogs </Link>
            </li>

            
            </ul>
          </div>
          <img className="w-1/2" src={logo2} alt="" />
        </div>
        <div className="navbar-center text-white ml-[300px] hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li className="text-xl">
              <Link to="/">Home </Link>
            </li>
            {
              type === "enterprice" &&  <li className="text-xl">
              <Link to="/regindividual">Client Registation </Link>
            </li>
            }
            {
              type === "individual" &&  <li className="text-xl">
              <Link to="/regenterprice">Client Registation </Link>
            </li>
            }
            
            <li className="text-xl">
              <Link to="/career">Career </Link>
            </li>
           
            <li className="text-xl">
              <Link to="/blog">Blogs </Link>
            </li>
           

           

           
          </ul>
        </div>
        <div className="navbar-end">
         

<button  className="ml-5">

</button>
        </div>
        
      </div>
      
    </div>
    );
};

export default Nav;