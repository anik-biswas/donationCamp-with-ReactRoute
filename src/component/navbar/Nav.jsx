const Nav = () => {
    return (
        // <div>
            
            // </div>
            <div className="navbar bg-base-100 ">
            <div className="flex-1">
                <img src="https://i.ibb.co/BPgP8Ks/Logo.png" alt="" />
              {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-2 text-xl font-bold">
                <li><a>Home</a></li>
                <li><a>Donation</a></li>
                <li><a>Statics</a></li>

                {/* <li>
                  <details>
                    <summary>
                      Parent
                    </summary>
                    <ul className="p-2 bg-base-100">
                      <li><a>Link 1</a></li>
                      <li><a>Link 2</a></li>
                    </ul>
                  </details>
                </li> */}
              </ul>
            </div>
          </div>

    );
};

export default Nav;