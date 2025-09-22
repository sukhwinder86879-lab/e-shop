import { useEffect, useState } from 'react';
import { CgProfile } from "react-icons/cg";
import './profile.css'
export function Profile() {
    const [profile,setProfile] = useState({})
    
    
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('user')|| '[]')
        const loginUser =  JSON.parse(localStorage.getItem('login')|| 'null')
        // console.log(loginUser);
        const loginUserData = data.find(d => d?.email === loginUser?.email)
        if (loginUserData) {
            setProfile(loginUserData)
        }
    },[])
    return(
        <>
        <div className="profile-con">
           <div className="profile-data">
            <div className="profile-icon"><CgProfile /></div>
            <div className="user-name">
                <label htmlFor=""> Username :</label>
            <li>{profile?.username?.toUpperCase()}</li>
            </div>
            <div className="user-name">
                <label htmlFor=""> Email :</label>
               <li>{profile?.email}</li>
            </div>
      
           
           </div>
        </div>
        </>
    )
    
}