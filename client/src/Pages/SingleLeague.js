import React, {useState} from 'react'
import moment from 'moment'
import Header from '../components/Header'
import { Link, NavLink,  useNavigate, useParams } from 'react-router-dom'
import InfoTeam from '../components/InfoTeam'
import StatsTeam from '../components/StatsTeam'
import { useEffect } from 'react'
import axios from 'axios'

const SingleTeam = () => {
    const name2 = "stats"
    const name1 = "info"
    const {tabname, id}=useParams();
    const [game, setGame] = useState([])

    const [result, setResult] = useState()
    const [firstResult, setFirstResult] = useState()
    const [secondResult, setSecondResult] = useState()
    const [loading, setLoading] = useState(true)
    const history = useNavigate()

    const date = new Date();
    const formatedDate =   moment(date).format('YYYY/MM/DD');    

    const ticketTime = game.date
    const formatedresultDate =   moment(ticketTime).format('YYYY/MM/DD');    


  
    useEffect(() => {
      const fetchTeams = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/teams/${id}`)
        setGame(data)
      }
      fetchTeams();
  
    }, [id]);

    
   
    
    // const newStatId =  StatId[0]
    
    
    


      const baseURL = `http://localhost:8000/api/results/${id}/result`;

      function AddResults() {
        axios
          .post(baseURL, {
            firstTeam: firstResult,
            secondTeam: secondResult
          })
          .then((response) => {
            setResult(response.data);
            setLoading(false)
            setFirstResult("")
            setSecondResult("")
            console.log(response.data)
            history(`/`);

          });
      }

      console.log(result)

    
  return (
    <div>
        <Header/>
        <div className="hero__header flex flex-start flex-row flex-wrap my-8 sm:w-[50%] w-[100%] sm:mx-auto sm:my-20px my-2px ">
            <NavLink to="/"  className="px-3 py-2 rounded-2xl mx-3  bg-gray-900   font-semibold">Football</NavLink>
            <NavLink to="/admin/addGame"  className="px-3 py-2 rounded-2xl mx-3 font-semibold  bg-gray-900 ">Add Game</NavLink>
            <NavLink to="/admin/favourite"  className="px-3 py-2 rounded-2xl mx-3 bg-gray-900">Favourite</NavLink>
            <NavLink to={`/admin/tickets/${id}`}  className="px-3 py-2 rounded-2xl mx-3 bg-gray-900">Tickets</NavLink>



        </div>
       
        <div className="single__team  sm:w-[50%] mx-auto w-[95%] ">
        <div className='single__postBody'> 
        <div className='single__postBodyHeader'> 
            <div>
            <img src={game.leagueLogo} className=" w-10 px-2 " alt="league logo"/>
            <div> 
                <span>{game.league}</span>
                <span>{game.leagueLocation}</span>

            </div>


            </div>
        </div>
        



        </div>
        <div className='single__postBodyCenter'>
            <div className='single__postBodyCenterInner  py-4 sm:px-50 px-4 '> 
            <div>
                <img src={game.firstTeamLogo} className=" w-10 px-2 " alt="team logo" />
                <span>{game.firstTeam}</span>
            </div>
            <div>
                <h2 className='single__TeamResult'>
                    { 
                        !game.results?
                        <span className='text-sm font-semibold' > Results not added yet </span>
                        : 
                         <>
                         {
                             game.results.map((result)=>
                               <p>{result.firstTeam} - {result.secondTeam}</p> 
                             )
                         }

                         </>
                    }
                </h2>    
                <p>
                    {
                       !game.results?
                       "":
                       "Full time" 
                    }
                </p>
            </div>
            <div>
                <img src={game.secondTeamLogo} className=" w-10 px-2 " alt="team logo" />
                <span>{game.secondTeam}</span>
            </div>
            </div>
        </div>

        { game.results?
        "":
        
            <div className="flex py-5 flex-col  " >
                <span  className="text-md font-bold mx-4 "> Add results </span>
                <div  className="flex sm:flex-row flex-col ">
                    <div className="col-span-12 py-3 mx-3 sm:col-span-12">
                        <label htmlFor={game.firstTeam} className="block text-lg py-1 font-semibold text-gray-300">
                        {game.firstTeam}
                        </label>
                        <input
                            type="number"
                            name={game.firstTeam}
                            required
                            id={game.firstTeam}
                            value={firstResult}
                            onChange={(e) => setFirstResult(e.target.value)}
                            // placeholder={`Enter  {title}`}
                            className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-800 rounded-md"
                        />
                    </div>
                    <div className="col-span-12 py-3 mx-3 sm:col-span-12">
                        <label htmlFor={game.secondTeam} className="block text-lg py-1 font-semibold text-gray-300">
                        {game.secondTeam}
                        </label>
                        <input
                            type="number"
                            name={game.secondTeam}
                            id={game.secondTeam}
                            required
                            value={secondResult}
                            onChange={(e) => setSecondResult(e.target.value)}
                            // placeholder={`Enter  {title}`}
                            className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-800 rounded-md"
                        />
                    </div>



               
                
                </div>
                <button
                    onClick={AddResults}
                    type="submit"
                    className="inline-flex sm:w-[30%] w-[70%] mx-4 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-bold rounded-md text-white bg-[#FF6900]"
                >
                    {
                        loading? "Post results" : "Processing"
                    }

                </button>
                
            </div>
        }

        <div className=" border-bottom border-[#181818]  my-4  w-[100%]">
            <NavLink  to={`/${id}/tab=${name1}`} className={` pl-[12px] text-md hover:text-gray-200 font-semibold pr-2 
            { tabname = "info" ? text-blue-500 :  text-gray-400  } `}  activeClassName="text-blue-500" >Info</NavLink>
            <NavLink to={`/${id}/tab=${name2}`} className={` pl-[12px] text-md hover:text-gray-200 font-semibold pr-2 
            { tabname = "stats" ? text-blue-500 :  text-gray-400  } `}  >Stats</NavLink>
            <div className="py-3 px-2 my-4 border-t border-[#181818] w-[100%]"> 
            {
              tabname  === "info"  
                ?
                <div>
                    <span className="font-bold text-md px-4 text-gray-500 my-4">Match info</span>
                    <InfoTeam game={game} />
                </div>
                :
                tabname  === "stats"
                ?
                <div>
                 
                <StatsTeam game={game}/>
                </div>
                :''
                
               
                
            }
              
            </div>  

        </div>
        <div className='flex'>

        { 

         formatedDate >= formatedresultDate ?

        <span className="px-3" >Ticketing and Betting are out of time. Sorry!!</span>
        :
        <>
        {

        }
         {!game.results?
            <> 
            <Link to={`/${id}/bet`}  className="px-2 py-2 rounded-lg mx-4  bg-[#FF6900]">Add Bet</Link>
            { game.tickets.length <= 10 ?
            <Link to={`/${id}/ticket`}  className="px-2 py-2 rounded-lg mx-4  bg-[#FF6900]">Buy ticket</Link>
            :
            <span className="px-3" >Tickets are all sold out. Sorry</span>
            }

            </>
        :
            <span className="px-3" >Ticketing and Betting are out of time. Sorry!</span>


    
        }
        </>
        }

        </div>

        </div>
        

        
    </div>
  )
}

export default SingleTeam