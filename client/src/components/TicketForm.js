import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'


export default function TicketForm() {
  const [bet, setBet] = useState("")
  const [fullname, setFullName] = useState("")
  const [mail, setMail] = useState("")
  const [mobilenumber, setMobileNumber] = useState("")
  const [loading, setLoading] = useState(true)
  const [game, setGame] = useState([])

  const history = useNavigate()
  const {id}=useParams();
    console.log(id)

    useEffect(() => {
      const fetchTeams = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/teams/${id}`)
        setGame(data)
        setLoading(false)
        console.log(game)
      }
      fetchTeams();
  
    }, []);



  const baseURL = `http://localhost:8000/api/tickets/${id}/ticket`;
  
  function AddBet() {
    axios
      .post(baseURL, {
        Fullname: fullname,
        Email: mail,
        Number:mobilenumber,
      })
      .then((response) => {
        setBet(response.data);
        setLoading(false)
        
        history(`/game/${id}`);

      });
  }


    return (
      <>
        
  
        <div className="mt-10 sm:mt-0">
          <div className="w-full">
            
            <div className=" sm:w-[50%] w-[95%] my-4 mx-auto">
              <div>
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-inherit sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-12 sm:col-span-12">
                        <label htmlFor="first-name" className="block text-sm font-semibold text-gray-300">
                          Full name
                        </label>
                        <input
                          type="text"
                          value={fullname}
                          onChange={(e)=>setFullName(e.target.value)}
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-400 rounded-md"
                        />
                      </div>
                      <div className="col-span-12 sm:col-span-12">
                        <label htmlFor="first-name" className="block text-sm font-semibold text-gray-300">
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={mail}
                          onChange={(e)=>setMail(e.target.value)}
                          autoComplete="given-email"
                          className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-400 rounded-md"
                        />
                      </div>
                      <div className="col-span-12 sm:col-span-12">
                        <label htmlFor="Phone number" className="block text-sm font-semibold text-gray-300">
                          Phone number
                        </label>
                        <input
                          type="number"
                          name="phone"
                          value={mobilenumber}
                          onChange={(e)=>setMobileNumber(e.target.value)}
                          autoComplete="given-number"
                          className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-400 rounded-md"
                        />
                      </div>
                      
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-inherit text-right sm:px-6">
                    <button
                      onClick={AddBet}
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-bold rounded-md text-white bg-[#FF6900] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    Buy ticket
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        
      </>
    )
  }
  