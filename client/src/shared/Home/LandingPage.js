import React from "react";
import './LandingPage.css'

const LandingPage = () => {
   return (
      <div className="landing-page">
         <div className="landing-page-banner">
            <h1 className="lp-main-tag"> DASH </h1>
         </div>
         <div className="landing-page-div-two">
            <h1> What is Dash?</h1>
         <div className="lp-second-page">
            {/* <span> <h1> What is Dash? </h1></span> */}
               <div className="lp-item-1">
                  <h1> Item 1 </h1>
                  <p> Item 1 description </p>
               </div>
               <div className="lp-item-2">
                  <h1> Item 2 </h1>
                  <p> Item 2 description</p>
               </div>
               <div className="lp-item-3">
                  <h1> Item 3 </h1>
                  <p> Item 3 description </p>
               </div>
         </div>

         </div>
      </div>
   )
}

export default LandingPage