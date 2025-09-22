import { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import './signup.css'
import { ToastContainer, toast } from 'react-toastify';
export function Signup() {
    const[formdata,setformdata] =useState({
        username:'',
        email:'',
        password:''
    })
    function handlechange(e) {
        const{name,value}= e.target
        setformdata(prev=>({...prev,[name]: value}))
        // console.log(formdata);
        
        
    }
    const navigate = useNavigate()
    function handelsubmit(e) {
        e.preventDefault();

        const data = JSON.parse(localStorage.getItem('user')|| '[]')

           const filter = data.filter(d=>d.email === formdata.email); 
           
        if ( filter.length !=0) { 
             setformdata({
                    email:'',
                    password:'',
                    username:''
                })
                toast.success('Registered Sucessfully')
                setTimeout(()=>{
                    navigate('/login')
                },2000)
        }
          data.push(formdata)
          localStorage.setItem('user', JSON.stringify(data))
          
    
    }

    return(
        <>
         <ToastContainer />
        <form action="" onSubmit={handelsubmit}>
         <h1>Create Account</h1>
                <div className="registered">
                    <input className='registered-inp' type="text" placeholder='Username' name='username' value={formdata.username} onChange={handlechange}/>
                    <input className='registered-inp' type="email"  placeholder='Email'  name='email' value={formdata.email} onChange={handlechange}/>
                    <input className='registered-inp' type="password"  placeholder='Password' name='password' value={formdata.password} onChange={handlechange}/>
                    <button className='sign-up-btn'>Sign up</button>

                    <Link className='login-con' to={'/login'}>For login</Link>
                </div>

           
        </form>
        </>
    )
    
}