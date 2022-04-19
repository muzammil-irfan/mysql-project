import React from 'react'
import Header from '../components/Header'
import {  NavLink,  useParams } from 'react-router-dom'
import AddGame from '../components/AddGame';


const AddTeam = () => {
    const {tabname}=useParams();
    console.log(tabname)
    

    
  return (
    <div>
        <Header/>
        <div className="hero__header flex flex-start flex-row flex-wrap my-8  sm:w-[50%] mx-auto w-[100%]">
            <NavLink to="/"  className="px-3 py-2 rounded-2xl mx-3  bg-gray-900   font-semibold">Football</NavLink>
            <NavLink to="/admin/addTeam"   className="px-3 py-2 rounded-2xl mx-3  text-gray-900 bg-white text-gray-700">Add Game</NavLink>
            <NavLink to="/admin/favourite"  className="px-3 py-2 rounded-2xl mx-3 bg-gray-900">Favourite</NavLink>

        </div>
        <div className="sm:w-[50%] w-[95%] mx-auto px-3 py-3 " > 
          <AddGame/>
          
        </div>


       
    </div>
  )
}

export default AddTeam