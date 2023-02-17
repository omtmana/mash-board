import React from "react";
import { useNavigate } from "react-router-dom";
import './LandingPage.css'

const LandingPage = () => {
   let navigate = useNavigate()

   const handleHabitDashboard = () => {
      navigate('/habit')
   }

   const handleFinanceDashboard = () => {
      navigate('/finance')
   }



   return (
      <div className="landing-page">
         <div className="landing-page-banner">
            <h1 className="lp-main-tag"> MASH </h1>
            <p> Data Visualization for your personal growth</p>
         </div>
         <div className="landing-page-div-two">
            <h1> What is Mash?</h1>
         <div className="lp-second-page">
            {/* <span> <h1> What is Dash? </h1></span> */}
               <div className="lp-item-1" onClick={handleHabitDashboard}>
                  <h1> Habit Tracker </h1>
                  <p> Item 1 description </p>
               </div>
               <div className="lp-item-2" onClick={handleFinanceDashboard}>
                  <h1> Finance Tracker </h1>
                  <p> Item 2 description</p>
               </div>
               <div className="lp-item-3">
                  <h1> Data Visualization </h1>
                  <p> Item 3 description </p>
               </div>
         </div>

         </div>
      </div>
   )
}

export default LandingPage