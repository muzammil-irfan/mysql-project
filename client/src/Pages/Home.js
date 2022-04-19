import React from 'react'
import Header from '../components/Header'
import FrontGame from '../components/FrontGame';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { GoCalendar } from 'react-icons/go';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';



const Home = () => {
  const [games, setGames] = useState([])
  const [open, setOpen] = useState(false);

  const [selected, setSelected] = useState();


  useEffect(() => {
    const fetchTeams = async () => {
      const { data } = await axios.get("http://localhost:8000/api/teams/")
      setGames(data.Team)
      console.log(data)
    }
    fetchTeams();

  }, []);
  
  return (
    <div>
      <Header/>
      <div className="hero__header flex flex-start items-start justify-between flex-row flex-wrap my-8 sm:w-[50%] w-[95%]  sm:mx-auto sm:my-20px my-2px ">
      <div>
      <NavLink to="/" activeClassName="bg-white text-gray-800"  className="px-3 py-2 rounded-2xl text-gray-700 font-semibold  bg-white ">Football</NavLink>
      <NavLink to="/admin/addGame"  className="px-3 py-2 rounded-2xl mx-3 bg-gray-900">Add Game</NavLink>
      <NavLink to="/admin/favourite"  className="px-3 py-2 rounded-2xl mx-3 bg-gray-900">Favourite</NavLink>
      </div>
      <button className="right-[5%]" onClick={()=>setOpen(!open)} >
        {
          open?
        <div className='flex flex-row'>
        <GoCalendar size="25"/>
        <RiArrowUpSFill  size="25"/>
        </div>
        :
        <div className='flex flex-row'>
        <GoCalendar size="25"/>
        <RiArrowDownSFill  size="25"/>
        </div>    
        }
      </button>
      {
        open?
        
      
      <DayPicker
      className='absolute bg-[#222222] bg-gray-800 p-4 sm:right-[25%] right-[5%] sm:top-[25%] top-[30%] sm:mx-0 mx-auto '
      mode="single"
      selected={selected}
      onSelect={setSelected}
      />
      :
      ""
      }

        </div>

      <div className="main__section">
        <div className="main__inner  sm:w-[50%] mx-auto w-[95%]"> 
        
         <div className='front__gameHome'> 
         {games.map((item)=>
          <FrontGame   item={item} key={item._id} />
         
         )}


          

         </div>
         

       
        
         

        </div>
        
      </div>
    </div>
  )
}

export default Home