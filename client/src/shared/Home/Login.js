import React, {useState} from "react";

import './Login.css'

const Login = () => {
   const[email, setEmail] = useState("")
   const[password, setPassword] = useState("")

   const handleLoginSubmit = (e) => {
      e.preventDefault()
   }

   const handleEmail = (e) => {
      setEmail(e.target.value)
   }

   const handlePassword = (e) => {
      setPassword(e.target.value)
   }

   return(
      <div className="login">
         <h1> Login </h1>
         <form onSubmit={handleLoginSubmit} className="login-form">
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
            <button> Login </button>
         </form>
      </div>
   )
}

export default Login