import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


export const Authcontext = createContext()

export function AuthProvider({ children }) {

    const [auth,setAuth] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('login'));
        setAuth(data?.email)
    }, []);
    function Logout() {
        setAuth(null)
        localStorage.removeItem('login')
        navigate('/')
        
    }
    return(
        <Authcontext.Provider value={{ setAuth,auth,Logout }}>
        {children}
        </Authcontext.Provider> 

    )
    
}