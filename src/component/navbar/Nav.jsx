import { NavLink } from "react-router-dom";
import "./Nav.css"; 
const Nav = () => {

    const  links = <>
                <li className="mr-5 hidden md:block lg:block" ><NavLink to="/"  >Home</NavLink></li>
                <li className="mr-5 hidden md:block lg:block"><NavLink to="/donations">Donation</NavLink></li>
                <li className="mr-5 hidden md:block lg:block"><NavLink to="/statistics">Statistics</NavLink></li>
    </>
    const  linksTab = <>
    <li className="mr-5 " ><NavLink to="/"  >Home</NavLink></li>
    <li className="mr-5 "><NavLink to="/donations">Donation</NavLink></li>
    <li className="mr-5 "><NavLink to="/statistics">Statistics</NavLink></li>
</>
    return (
        // <div>
            
            // </div>
            <div className="navbar w-full  ">
            <div className="flex-1">
                <img className=" w-28 h-12 lg:w-40 lg:h-16" src="https://i.ibb.co/BPgP8Ks/Logo.png" alt="" />
              
            </div>
            <div className="flex-none">
              <ul className=" menu menu-horizontal px-2 text-xl  font-bold">
                {links }

                 <li className="md:hidden lg:hidden">
                  
                  <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-32 z-[1] p-0 shadow bg-base-100 rounded-box w-24">
                    {linksTab}
                  </ul>
                </div>

                </li> 
              </ul>
            </div>
          </div>

    );
};

export default Nav;