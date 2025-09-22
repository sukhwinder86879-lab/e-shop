
import './App.css'
import { Routes,Route } from 'react-router-dom'
import { Nav } from './component/nav/nav'
import { Home } from './pages/Home/home'
import { Signup } from './pages/signup/signup'
import { Login } from './pages/login/login'
import { Room } from './pages/Roomimg/roomimg'
import { Profile } from './pages/profile/profile'



function App() {


  return (
    <div >
<Nav/>


    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/room' element={<Room/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Profile' element={<Profile/>}/>
    

    </Routes>
 
    </div>
  )
}

export default App
