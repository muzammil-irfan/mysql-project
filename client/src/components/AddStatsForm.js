import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddStatsForm = ({game}) => {
    const [firstTeamPosession, setfirstTeamPosession] = useState("")
    const [secondTeamPosession, setsecondTeamPosession] = useState("")
    const [firstTeamTarget, setfirstTeamTarget] = useState("")
    const [secondTeamTarget, setsecondTeamTarget] = useState("")

    const [firstTeamOffTarget, setfirstTeamOffTarget] = useState("")
    const [secondTeamOffTarget, setsecondTeamOffTarget] = useState("")
    const [firstTeamCorners, setfirstTeamCorners] = useState("")
    const [secondTeamCorners, setsecondTeamCorners] = useState("")

    const [firstTeamRedCard, setfirstTeamRedCard] = useState("")
    const [secondTeamRedCard, setsecondTeamRedCard] = useState("")
    const [firstTeamYellowCard, setfirstTeamYellowCard] = useState("")
    const [secondTeamYellowCard, setsecondTeamYellowCard] = useState("")
    const [stats, setStats] = useState([])

    const history = useNavigate()
    const id = game._id 

    const baseURL = `http://localhost:8000/api/stats/${id}`;
  
    function AddStats() {
        axios
        .post(baseURL, {
            firstTeamPosession,
            secondTeamPosession,
            firstTeamTarget,
            secondTeamTarget,
            firstTeamOffTarget,
            secondTeamOffTarget,
            firstTeamCorners,
            secondTeamCorners,
            firstTeamRedCard,
            secondTeamRedCard,
            firstTeamYellowCard,
            secondTeamYellowCard


        })
        .then((response) => {
            setStats(response.data);
            
            history(`/`);

        });
        console.log(stats)
    }
  return (
    <div className="mt-10 sm:mt-0">
    <div className="w-full">
      
      <div className=" ">
        <div>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-inherit sm:p-6">
              <div className="flex flex-row flex-wrap  items-start justify-between ">
                <div className="sm:w-[40%] w-[90%] m-2 ">
                  <label htmlFor="first-name" className="block text-sm font-semibold text-gray-300">
                    {game.firstTeam} Possession
                  </label>
                  <input
                    type="number"
                    value={firstTeamPosession}
                    onChange={(e)=>setfirstTeamPosession(e.target.value)}
                    name="possession"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-400 rounded-md"
                  />
                </div>
                <div className="sm:w-[40%] w-[90%] m-2 ">
                  <label htmlFor="first-name" className="block text-sm font-semibold text-gray-300">
                  {game.secondTeam}  Posession 
                  </label>
                  <input
                    type="number"
                    value={secondTeamPosession}
                    onChange={(e)=>setsecondTeamPosession(e.target.value)}
                    autoComplete="given-esecondTeamPosession"
                    className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-400 rounded-md"
                  />
                </div>
                <div className="sm:w-[40%] w-[90%] m-2 ">
                  <label htmlFor="Phone number" className="block text-sm font-semibold text-gray-300">
                  {game.firstTeam} Target
                  </label>
                  <input
                    type="number"
                    value={firstTeamTarget}
                    onChange={(e)=>setfirstTeamTarget(e.target.value)}
                    autoComplete="given-number"
                    className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-400 rounded-md"
                  />
                </div>

                <div className="sm:w-[40%] w-[90%] m-2">
                  <label htmlFor="team" className="block text-sm font-semibold  text-gray-400">
                  {game.secondTeam} Target
                  </label>
                  <input
                    type="number"
                    value={secondTeamTarget}
                    onChange={(e)=>setsecondTeamTarget(e.target.value)}
                    autoComplete="given-number"
                    className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-400 rounded-md"
                  />
                </div>
                <div className="sm:w-[40%] w-[90%] m-2">
                  <label htmlFor="Amount number" className="block text-sm font-semibold text-gray-300">
                  {game.firstTeam} Off Target 
                  </label>
                  <input
                    type="number"
                    value={firstTeamOffTarget}
                    onChange={(e)=>setfirstTeamOffTarget(e.target.value)}
                    autoComplete="given-Amount"
                    className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-400 rounded-md"
                  />
                </div>
                <div className="sm:w-[40%] w-[90%] m-2">
                  <label htmlFor="Amount number" className="block text-sm font-semibold text-gray-300">
                  {game.secondTeam} Off Target 
                  </label>
                  <input
                    type="number"
                    value={secondTeamOffTarget}
                    onChange={(e)=>setsecondTeamOffTarget(e.target.value)}
                    autoComplete="given-Amount"
                    className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-400 rounded-md"
                  />
                </div>
                <div className="sm:w-[40%] w-[90%] m-2">
                  <label htmlFor="Amount number" className="block text-sm font-semibold text-gray-300">
                  {game.firstTeam} Team Corners   
                  </label>
                  <input
                    type="number"
                    value={firstTeamCorners}
                    onChange={(e)=>setfirstTeamCorners(e.target.value)}
                    autoComplete="given-Amount"
                    className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-400 rounded-md"
                  />
                </div>
                <div className="sm:w-[40%] w-[90%] m-2">
                  <label htmlFor="Amount number" className="block text-sm font-semibold text-gray-300">
                  {game.secondTeam} Corners   
                  </label>
                  <input
                    type="number"
                    value={secondTeamCorners}
                    onChange={(e)=>setsecondTeamCorners(e.target.value)}
                    autoComplete="given-Amount"
                    className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-400 rounded-md"
                  />
                </div>
                <div className="sm:w-[40%] w-[90%] m-2">
                  <label htmlFor="Amount number" className="block text-sm font-semibold text-gray-300">
                  {game.firstTeam} Red Card
                  </label>
                  <input
                    type="number"
                    value={firstTeamRedCard}
                    onChange={(e)=>setfirstTeamRedCard(e.target.value)}
                    autoComplete="given-Amount"
                    className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-400 rounded-md"
                  />
                </div>
                <div className="sm:w-[40%] w-[90%] m-2">
                  <label htmlFor="Amount number" className="block text-sm font-semibold text-gray-300">
                  {game.secondTeam} Red Card
                  </label>
                  <input
                    type="number"
                    value={secondTeamRedCard}
                    onChange={(e)=>setsecondTeamRedCard(e.target.value)}
                    autoComplete="given-Amount"
                    className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-400 rounded-md"
                  />
                </div>
                <div className="sm:w-[40%] w-[90%] m-2">
                  <label htmlFor="Amount number" className="block text-sm font-semibold text-gray-300">
                  {game.firstTeam} Yellow Card
                  </label>
                  <input
                    type="number"
                    value={firstTeamYellowCard}
                    onChange={(e)=>setfirstTeamYellowCard(e.target.value)}
                    autoComplete="given-Amount"
                    className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-400 rounded-md"
                  />
                </div>
                <div className="sm:w-[40%] w-[90%] m-2">
                  <label htmlFor="Amount number" className="block text-sm font-semibold text-gray-300">
                  {game.secondTeam} Yellow Card
                  </label>
                  <input
                    type="number"
                    value={secondTeamYellowCard}
                    onChange={(e)=>setsecondTeamYellowCard(e.target.value)}
                    autoComplete="given-Amount"
                    className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-400 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-inherit text-right sm:px-6">
              <button
                onClick={AddStats}
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-bold rounded-md text-white bg-[#FF6900] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
              Set stats
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AddStatsForm