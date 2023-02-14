import React from "react";
import { Link } from "react-router-dom";

import './MainNavigation.css'
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

const MainNavigation = (props) => {
   return(
      <MainHeader>
         {/* <button>
            <span />
         </button> */}
         <h1>
            <Link to='/'> Dash </Link>
         </h1>
         <h3>
            <Link to='/login'> Login </Link>
         </h3>
         <button>
            <Link to='/signup'> Sign Up </Link>
         </button>
         <nav>
            <NavLinks />
         </nav>
      </MainHeader>
   )
}

export default MainNavigation