import React, {useState} from "react";

const Login = () => {
   const[email, setEmail] = useState("")
   const[password, setPassword] = useState("")

   const handleLoginSubmit = (e) => {
      e.preventDefault()
   }


   return(
      <div>
         <h1> Login </h1>
         <form onSubmit={handleLoginSubmit}>
            <input
            placeholder="Email"
            value={email}
            
            />
            <input 
            placeholder="Password"
            />
            <button> Login </button>
         </form>
      </div>
   )
}

export default Login