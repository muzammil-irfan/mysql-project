import React, {useState} from 'react'
import logo1 from "../assets/Team1.png"
import logo2 from "../assets/team2.png"
import logo from "../assets/premierleague.png"
import { MdArrowForwardIos } from 'react-icons/md';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'


const FrontGame =  ({item, key}) => {
    const[favourite, setFavourite] = useState();
    const id = (item._id)
    const baseURL = `http://localhost:8000/api/teams/${id}`;

    const handleFavourite =  async(e)=>{
        e.preventDefault();
        const favouriteState = {favourite:true}
        const res = await axios
        .put(baseURL, favouriteState)
        .then((res) => {
            setFavourite(res.data)
            console.log(res.data)
            document.location.url = "/"

        });
    }



  return (
    <div  className="front__game">
        <div className="front__gameHeader">
            <div> 
            <img src={item.leagueLogo} className=" w-14 px-2 " alt="league logo"/>
            <div>
                <span>{item.league}</span>
                <span>{item.leagueLocation}</span>
            </div>
        
            </div>
            <Link to={`/game/${item._id}`} >
            <MdArrowForwardIos/>
            </Link>

        </div>
        <div className="front__gameBody">
            <Link to={`/game/${item._id}`} className="front__gameBodyInner">
                <span>{item.time} </span>
            <div className="front__gameInnerSection">
                <div>
                    <img src={item.firstTeamLogo} alt="league logo" className=" w-10 px-2 " />
                    <span>{item.firstTeam}</span>
                </div>
                <div>
                    <img src={item.secondTeamLogo} className=" w-10 px-2 " alt="league logo"/>
                    <span>{item.secondTeam}</span>
                </div>
            </div>


            </Link>
            {
                item.favourite === true?
                <button onClick={handleFavourite} >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="#FF6900" height="25" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                </button>

                :
                <button onClick={handleFavourite} >
                <AiOutlineStar size={25} />
                </button>


            }
            
        </div>
        
    </div>
  )
}



export default FrontGame