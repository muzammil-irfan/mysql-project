import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom'
import Header from '../components/Header'
import moment from "moment"
const AllTickets = () => {
    const { id}=useParams();

    const [ticket, setTickets] = useState([])
    useEffect(() => {
        const fetchTeams = async () => {
          const { data } = await axios.get(`http://localhost:8000/api/teams/${id}`)
          setTickets(data)
        }
        fetchTeams();
    
      }, [id]);

      const AllticketArray =  (ticket.tickets)



  return (
    <div>
          <Header/>
        <div className="hero__header flex flex-start flex-row flex-wrap my-8 sm:w-[50%] w-[100%] sm:mx-auto sm:my-20px my-2px ">
            <NavLink to="/"  className="px-3 py-2 rounded-2xl mx-3  bg-gray-900   font-semibold">Football</NavLink>
            <NavLink to="/admin/addGame"  className="px-3 py-2 rounded-2xl mx-3 font-semibold  bg-gray-900 ">Add Game</NavLink>
            <NavLink to="/admin/favourite"  className="px-3 py-2 rounded-2xl mx-3 bg-gray-900">Favourite</NavLink>
            <NavLink to={`/admin/tickets/${id}`}  className="px-3 py-2 rounded-2xl mx-3 text-gray-700 font-semibold  bg-white">Tickets</NavLink>
        </div>
        <div className="flex flex-row items-start justify-between py-5 px-4 sm:w-[50%] w-[95%] mx-auto border-b border-[#181818]  ">
            
            <div>
                <span className="text-lg font-semibold" >{ticket.firstTeam}</span>
            </div>
                    
            <div>
                <span>vs</span>
            </div>
                    
            <div>
                <span className="text-lg font-semibold">{ticket.secondTeam}</span>
            </div>

    

        </div>
        <div class="flex flex-col  sm:w-[50%] mx-auto ">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full text-center">
                    <thead class=" bg-[#333333]  ">
                        <tr>
                        <th scope="col" class="text-lg font-medium text-white px-6 py-4">
                            Name
                        </th>
                        <th scope="col" class="text-lg font-medium text-white px-6 py-4">
                            Email
                        </th>
                        <th scope="col" class="text-lg font-medium text-white px-6 py-4">
                            Number
                        </th>
                        <th scope="col" class="text-lg font-medium text-white px-6 py-4">
                            Date
                        </th>
                        </tr>
                    </thead >
                    

                            {/* // <span className="p-4 flex items-center justify-center w-[100%] " >No tickets Available</span>
                            // : */}
                            <tbody>
                                {
                                AllticketArray && AllticketArray.map((item)=>
                                    
                                    
                                        
                                        <tr class="bg-inherit border-b border-[#181818] ">
                                        <td class="px-6 py-4  text-sm font-medium text-gray-400">
                                            {item.Fullname}
                                        </td>
                                        <td class="text-sm text-gray-400 font-medium px-6 py-4 whitespace-nowrap">
                                            {item.Email}
                                        </td>
                                        <td class="text-sm text-gray-400 font-medium px-6 py-4 whitespace-nowrap">
                                            {item.Number}
                                        </td>
                                        <td class="text-sm text-gray-400 font-medium px-6 py-4 whitespace-nowrap">
                                        {moment(item.createdAt).format('DD/MM/YYYY')}
                                        </td>
                                        </tr>
                                    )
                                }
                                {
                                !AllticketArray.length  &&
                                    
                                    
                                        
                                     <span className="p-4 flex items-center justify-center w-[100%] " >No tickets Available</span>

                                   
                                }
                                
                            </tbody>
                            
                           
                    </table>
                </div>
                </div>
            </div>
            {/* <div className="flex items-start justify-start flex-col ">
                <span className="text-lg  font-medium"> James nthigah </span>
                <span className="text-md  font-medium"> Jamesnthigah@gmail.com </span>
                <span> Number </span>

            
            </div>
            <div>
                <span> Date </span>
                <span> Time </span>

            </div>
             */}
        </div>
    </div>
  )
}

export default AllTickets