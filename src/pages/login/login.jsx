import { useContext, useState } from 'react'
import './login.css'
import {Link, useNavigate } from 'react-router-dom'
import { Authcontext } from '../../component/context/authcontext'
  import { ToastContainer, toast } from 'react-toastify';
  
export function Login() {
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
        const {setAuth} = useContext(Authcontext)
        const navigate = useNavigate()
        function handelsubmit(e) {
            e.preventDefault();
    
            const data = JSON.parse(localStorage.getItem('user')|| '[]')
    
               const check= data.find(d=>d.email === formdata.email && d.password === formdata.password); 
               
            if (check) {
                localStorage.setItem('login',JSON.stringify({email:formdata.email}))
                setAuth(formdata.email)
                setformdata({
                    email:'',
                    password:''
                })
                toast.success('Login Sucessfully')
                setTimeout(()=>{
                    navigate('/')
                },1000)
            }else
            {
                toast.error('Not Found')
            }
        
        }
    return(
        <>
         <ToastContainer />
        <form action="" onSubmit={handelsubmit}>
            <h1>Login</h1>
            <div className="registered1">
                <input className='registered-inp' placeholder='Email' type="text" name='email' value={formdata.email} onChange={handlechange} />
                <input className='registered-inp' placeholder='password' type="text" name='password' value={formdata.password}  onChange={handlechange}/>
                <button>Login</button>
            <Link to={'/signup'}>For Registered</Link>
            </div>
        </form>
        </>
    )
    
}