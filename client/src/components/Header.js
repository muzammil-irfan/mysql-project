import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/livescore1.png"


const Header = () => {
  const [search, setSearch] = useState("")



  return (
    <div className="header__main ">
        <div className="header__inner  sm:w-[50%] mx-auto w-[95%]">
           <Link to="/" ><img  src={logo} className="sm:w-[100%] w-[70%] " alt="logo"/></Link> 
            <div>
            <input type="text" value={search} onChange={(e)=> setSearch(e.target.value) } placeholder="search" className='sm:w-[50%] w-[90%] '/>
            </div>
        </div>
        
        
    </div>
  )
}

export default Header