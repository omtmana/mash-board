import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

const MainNavigation = (props) => {
   return(
      <MainHeader>
         <button>
            <span />
         </button>
         <h1>
            <Link to='/'> Dash </Link>
         </h1>
         <nav>
            <NavLinks />
         </nav>
      </MainHeader>
   )
}

export default MainNavigation