import React from 'react'
import BetForm from '../components/Betform'
import Header from '../components/Header'
import TicketForm from '../components/TicketForm'

const Ticket = () => {
  return (
    <div>
        <Header/>
        <div>  
            <TicketForm/>
        </div>
    </div>
  )
}

export default Ticket