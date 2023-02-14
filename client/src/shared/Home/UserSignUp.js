import React, { useState } from "react";

import './UserSignUp.css'

const UserSignUp = () => {
   const [firstName, setFirstName] = useState("")
   const [lastName, setLastName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const handleSignUp = (e) => {
      e.preventDefault()
      console.log("Sign up!")
   }

   const handleFirstName = (e) => {
      setFirstName(e.target.value)
   }

   const handleLastName = (e) => {
      setLastName(e.target.value)
   }

   const handleEmail = (e) => {
      setEmail(e.target.value)
   }

   const handlePassword = (e) => {
      setPassword(e.target.value)
   }

   return (
      <div className="user-sign-up">
         <h1> Sign Up </h1>
         <div>
            <form onSubmit={handleSignUp} className="user-sign-up-form">
               <input
                  placeholder="First Name"
                  value={firstName}
                  onChange={handleFirstName}
               />
               <input
                  placeholder="Last Name"
                  value={lastName}
                  onChange={handleLastName}
               />
               <input
                  placeholder="Email"
                  value={email}
                  onChange={handleEmail}
               />
               <input
                  placeholder="Password"
                  value={password}
                  onChange={handlePassword}
               />
               <button> Sign Up! </button>
            </form>

         </div>
      </div>
   )
}

export default UserSignUp