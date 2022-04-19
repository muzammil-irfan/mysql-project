import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextInput from './TextInput'


const AddGame = () => {


  const [game, setGame] = useState("")
  const [league, setLeague] = useState("")
  const [leagueLogo, setLeagueLogo] = useState("")
  const [leagueLocation, setLeagueLocation] = useState("")
  const [firstTeam, setFirstTeam] = useState("")
  const [firstTeamLogo, setFirstTeamLogo] = useState("")
  const [secondTeamLogo, setSecondTeamLogo] = useState("")
  const [secondTeam, setSecondTeam] = useState("")
  const [referee, setReferee] = useState("")
  const [venue, setVenue] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")





  const [loading, setLoading] = useState(true)
  const history = useNavigate()


  const handleUpload = async(e) => {
    e.preventDefault();
    const files = e.target.files
    console.log("file=====>", files);
    const data = new FormData()
    data.append("file", files[0])
    data.append("upload_preset", "saintatl")
    data.append("cloud_name","saintjames")
    const res = await fetch("https://api.cloudinary.com/v1_1/saintjames/image/upload",{method:"post",body: data})
    const file = await res.json()
    console.log(file.url)
    if (file) {
      if (e.target.name === "leagueLogo") {
        console.log("leagueLogo can work")
        setLeagueLogo(file.url)
        
      }
      else if( e.target.name === "firstTeamLogo"){
        console.log("setFirstTeamLogo cant work")
        setFirstTeamLogo(file.url)

      }
      else{
        console.log("setSecondTeamLogo cant work")
        setSecondTeamLogo(file.url)
      }
    }
    

  }
 
  const baseURL = "http://localhost:8000/api/teams/";
  
  const AddGame = async() =>{
   const res = await axios
      .post(baseURL, {
        league,
        leagueLogo,
        leagueLocation,
        firstTeam,
        firstTeamLogo,
        secondTeam,
        secondTeamLogo,
        referee,
        venue,
        date,
        time
      })
      .then((response) => {
        setGame(response.data);
        setLoading(false)
        
        history(`/`);

      });
  }


  return (
    <div>
        <span className="font-bold text-xl  " > Add a Match </span>
        <div className="flex flex-col  py-3">
          <div className="col-span-12 py-3 mx-3 sm:col-span-12">
                <label htmlFor="Add league" className="block text-lg py-1 font-semibold text-gray-300">
                Add league
                </label>
                <input
                    type="text"
                    name="Add league"
                    value={league}
                    onChange={(e)=>setLeague(e.target.value)}
                    // placeholder={`Enter  {title}`}
                    className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-800 rounded-md"
                />
            </div>
          <div className="col-span-12 py-3 mx-3 sm:col-span-12">
              <label htmlFor="logo" className="block text-lg py-1 font-semibold text-gray-300">
              League Logo
              </label>
              <input
                  type="file"
                  name="leagueLogo"
                  onChange={(e)=>handleUpload(e)}
                  // placeholder={`Enter  {title}`}
                  className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-800 rounded-md"
              />
          </div>
          <div className="col-span-12 py-3 mx-3 sm:col-span-12">
                <label htmlFor="Add league" className="block text-lg py-1 font-semibold text-gray-300">
                League Location
                </label>
                <input
                    type="text"
                    name="Add league location"
                    value={leagueLocation}
                    onChange={(e)=>setLeagueLocation(e.target.value)}
                    // placeholder={`Enter  {title}`}
                    className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-800 rounded-md"
                />
            </div>
            <div className="col-span-12 py-3 mx-3 sm:col-span-12">
                <label htmlFor="First team" className="block text-lg py-1 font-semibold text-gray-300">
                First team
                </label>
                <input
                    type="text"
                    name="Add First team"
                    value={firstTeam}
                    onChange={(e)=>setFirstTeam(e.target.value)}
                    // placeholder={`Enter  {title}`}
                    className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-800 rounded-md"
                />
            </div>
            <div className="col-span-12 py-3 mx-3 sm:col-span-12">
                <label htmlFor="First team logo" className="block text-lg py-1 font-semibold text-gray-300">
                First team logo
                </label>
                <input
                    type="file"
                    name="firstTeamLogo"
                    onChange={(e)=>handleUpload(e)}
                    // placeholder={`Enter  {title}`}
                    className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-800 rounded-md"
                />
            </div>
            <div className="col-span-12 py-3 mx-3 sm:col-span-12">
                <label htmlFor="Second team " className="block text-lg py-1 font-semibold text-gray-300">
                Second team 
                </label>
                <input
                    type="text"
                    name="second Team"
                    value={secondTeam}
                    onChange={(e)=>setSecondTeam(e.target.value)}
                    // placeholder={`Enter  {title}`}
                    className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-800 rounded-md"
                />
            </div>
            <div className="col-span-12 py-3 mx-3 sm:col-span-12">
                <label htmlFor="second team logo" className="block text-lg py-1 font-semibold text-gray-300">
                Second team logo
                </label>
                <input
                    type="file"
                    name="secondTeamLogo"
                    onChange={(e)=>handleUpload(e)}
                    // placeholder={`Enter  {title}`}
                    className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-800 rounded-md"
                />
            </div>
            <div className="col-span-12 py-3 mx-3 sm:col-span-12">
                <label htmlFor="referee " className="block text-lg py-1 font-semibold text-gray-300">
                Referee 
                </label>
                <input
                    type="text"
                    name="referee"
                    value={referee}
                    onChange={(e)=>setReferee(e.target.value)}
                    // placeholder={`Enter  {title}`}
                    className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-800 rounded-md"
                />
            </div>
            <div className="col-span-12 py-3 mx-3 sm:col-span-12">
                <label htmlFor="Venue " className="block text-lg py-1 font-semibold text-gray-300">
                Venue 
                </label>
                <input
                    type="text"
                    name="venue"
                    value={venue}
                    onChange={(e)=>setVenue(e.target.value)}
                    // placeholder={`Enter  {title}`}
                    className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-800 rounded-md"
                />
            </div>
            <div className="col-span-12 py-3 mx-3 sm:col-span-12">
                <label htmlFor="Time " className="block text-lg py-1 font-semibold text-gray-300">
                Time 
                </label>
                <input
                    type="text"
                    name="time"
                    value={time}
                    onChange={(e)=>setTime(e.target.value)}
                    // placeholder={`Enter  {title}`}
                    className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-800 rounded-md"
                />
            </div>
            <div className="col-span-12 py-3 mx-3 sm:col-span-12">
                <label htmlFor="Date " className="block text-lg py-1 font-semibold text-gray-300">
                Date 
                </label>
                <input
                    type="date"
                    name="date"
                    value={date}
                    onChange={(e)=>setDate(e.target.value)}
                    // placeholder={`Enter  {title}`}
                    className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-800 rounded-md"
                />
            </div>
            
            <div className="my-5">
            <button
                onClick={AddGame}
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-bold rounded-md text-white bg-[#FF6900]"
            >
            Add Game
            </button>
            </div>








        </div>
    </div>
  )
}

export default AddGame