import { NavLink } from "react-router-dom";

const Nav = () => {

    const  links = <>
                <li className="mr-5" ><NavLink to="/">Home</NavLink></li>
                <li className="mr-5"><NavLink to="/donations">Donation</NavLink></li>
                <li className="mr-5"><NavLink to="/statistics">Statistics</NavLink></li>
    </>
    return (
        // <div>
            
            // </div>
            <div className="navbar bg-base-100 ">
            <div className="flex-1">
                <img src="https://i.ibb.co/BPgP8Ks/Logo.png" alt="" />
              {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-2 text-xl  font-bold">
                {links }

                {/* <li>
                  <details>
                    <summary>
                      Parent
                    </summary>
                    <ul className="p-2 bg-base-100">
                      {links }
                    </ul>
                  </details>
                </li> */}
              </ul>
            </div>
          </div>

    );
};

export default Nav;