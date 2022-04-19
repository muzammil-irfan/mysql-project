import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import AddStatsForm from './AddStatsForm';
import StatsBox from './StatsBox';

const StatsTeam = (props) => {
    const [statsResult, setStatsResult] = useState([])
    const gameResult = (props.game)
    console.log(gameResult)

    // const chelsea = 2
    // const manchester = 4
    // const totalPossessions= chelsea + manchester


    useEffect(() => {
        if(gameResult.stats){
            const StatId = gameResult.stats[0]
            console.log(StatId)
            const fetchTeams = async () => {
                const { data } = await axios.get(`http://localhost:8000/api/stats/${StatId}`)
                setStatsResult(data)
                console.log(data)
              }
              fetchTeams();
        
            }
        
    
      }, [gameResult ]);

  return (
    <div>
        {
         gameResult.stats.length > 0 ?
        <div>
        <StatsBox  fistItem={statsResult.firstTeamPosession}  secondItem={statsResult.secondTeamPosession} title="Posessions" />
        <StatsBox  fistItem={statsResult.firstTeamTarget}  secondItem={statsResult.secondTeamTarget} title="Goals on Target" />
        <StatsBox  fistItem={statsResult.firstTeamOffTarget}  secondItem={statsResult.secondTeamOffTarget} title="Goals off Target" />
        <StatsBox  fistItem={statsResult.firstTeamCorners}  secondItem={statsResult.secondTeamCorners} title="Corners" />
        <StatsBox  fistItem={statsResult.firstTeamRedCard}  secondItem={statsResult.secondTeamRedCard} title="Red cards" />
        <StatsBox  fistItem={statsResult.firstTeamYellowCard}  secondItem={statsResult.secondTeamYellowCard} title="Yellow cards" />


        </div>
        :
        <>
        <span className=" text-lg px-6 py-3  font-medium ">Add game stats. </span>
        <AddStatsForm  game={gameResult} />
        </>
        }
    </div>
  )
}

export default StatsTeam