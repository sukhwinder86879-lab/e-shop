import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import './nav.css'
import { useContext, useState } from "react";
import { Authcontext } from "../context/authcontext";

export function Nav() {
    const [show,setShow] = useState(true)
    const {auth,Logout} = useContext(Authcontext)
    console.log(auth);
    
    return(
        <>
        <header>
           <div className="nav-bar">
             <div className="ham-menu">
                <GiHamburgerMenu  onClick={()=>setShow(!show)}/>
           </div>
               <div className="logo">
                <li className="logo-txt">YOUR</li>
                <li className="logo-txt2">LOGO</li>
            </div>
          
           
            <ul className="bar" style={{
                display : show === false ? "none":"flex",
                
            }}>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/room'}> <li>Room</li></Link>
               {!auth  && <Link to={'/Signup'}> <li>Signup</li></Link>}
               
             {auth  &&    <li onClick={Logout}>Logout</li>}
                
            </ul>
         
           </div>
           <div className="user-icon">
                         {auth  &&  <Link to={'/Profile'}> <FaRegUserCircle /></Link>}

           </div>

        </header>
        </>
    )
    
}