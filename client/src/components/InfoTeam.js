import React from 'react'
import { GiCalendar, GiSoccerField, GiWhistle } from 'react-icons/gi';
const InfoTeam = ({game}) => {
  console.log(game)
  return (
    <div className="py-3 my-2 border border-[#181818]">
        <div className="flex flex-row items-center border-b px-3 py-3  border-[#181818] justify-start"> 
            <GiCalendar  size="30px"  />
            <div className="flex flex-col px-2 ">
                <span className="text-md font-semibold text-gray-500 " >{game.date}</span>
                <p className="text-sm font-semibold text-gray-500" >Date</p>
            </div>
         </div>
         <div className="flex flex-row items-center border-b px-3 py-3  border-[#181818] justify-start"> 
            <GiSoccerField  size="30px"  />
            <div className="flex flex-col px-2 ">
                <span className="text-md font-semibold text-gray-500 " >{game.venue}</span>
                <p className="text-sm font-semibold text-gray-500" >Venue</p>
            </div>
         </div>
         <div className="flex flex-row items-center  px-3 py-3   justify-start"> 
            <GiWhistle  size="30px"  />
            <div className="flex flex-col px-2 ">
                <span className="text-md font-semibold text-gray-500 " >{game.referee}</span>
                <p className="text-sm font-semibold text-gray-500" >Referee</p>
            </div>
         </div>
        
    </div>
  )
}

export default InfoTeam