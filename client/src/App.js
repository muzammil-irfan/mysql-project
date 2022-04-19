import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import AddTeam from "./Admin/AddTeam";
import AllTickets from "./Admin/AllTickets";
import Favourite from "./Pages/Favourite";
import Home from "./Pages/Home";
import SingleTeam from "./Pages/SingleLeague";
import Ticket from "./Pages/Ticket";
import Vote from "./Pages/Vote";



function App() {
  return (
    <div className="App">
            <Router>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/game/:id" element={<SingleTeam/>} />
        <Route path="/:id/tab=:tabname" element={<SingleTeam/>} />
        <Route path="/:id/bet" element={<Vote/>} />
        <Route path="/:id/ticket" element={<Ticket/>} />
        <Route path="/admin/addGame" element={<AddTeam/>} />
        <Route path="/admin/favourite" element={<Favourite/>} />
        <Route path="/admin/tickets/:id" element={<AllTickets/>} />





        




        
  
  
        
        
  
      </Routes>
    </Router>
    </div>
  );
}

export default App;
