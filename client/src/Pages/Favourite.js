import React from 'react'
import Header from '../components/Header'
import FrontGame from '../components/FrontGame';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Favourite = () => {
  const [favourite, setFavourite] = useState([])
  const date = new Date();
  console.log(date)





  useEffect(() => {
    const fetchTeams = async () => {
      const { data } = await axios.get("http://localhost:8000/api/teams/favourite")
      setFavourite(data)
      console.log(data)
    }
    fetchTeams();

  }, []);


  

  
  return (
    <div>
      <Header/>
      <div className="hero__header flex flex-start flex-row flex-wrap my-8 sm:w-[50%] mx-auto w-[100%]">
      <NavLink to="/"   className="px-3 py-2 rounded-2xl mx-3  bg-gray-900  ">Football</NavLink>
      <NavLink to="/admin/addGame"  className="px-3 py-2 rounded-2xl mx-3 bg-gray-900">Add Game</NavLink>
      <NavLink to="/admin/favourite"  className="px-3 py-2 rounded-2xl mx-3 text-gray-700 font-semibold  bg-white">Favourite</NavLink>

        </div>

      <div className="main__section">
        <div className="main__inner sm:w-[50%] mx-auto w-[100%]"> 
        
          

         <div className='py-10  w-[100%]'> 
       

             {  
             
             favourite.map((item)=>
                <FrontGame   item={item} key={item._id} />
               
               )
               
             }
            
         


          

         </div>
         

       
        
         

        </div>
        
      </div>
    </div>
  )
}

export default Favourite