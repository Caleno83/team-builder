import React from 'react';
import { useState } from "react";
import './App.css';
import TeamMemberList from "./components/TeamMembersList";

function App() {

  const [teamMembers, setTeamMembers] = useState([
    {
      name: "Jorge Jimenez",
      email: "calenocam24@gmail.com",
      role: "fullstack developer"
    }
  ]);

  return (
    <div className="App">
      <h1>JJ COMPANY</h1>
      <TeamMemberList list={teamMembers} />
    </div>
  );
}

export default App;
