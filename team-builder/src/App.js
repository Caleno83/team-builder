import React from 'react';
import { useState } from "react";
import './App.css';
import TeamMemberList from "./components/TeamMembersList";
import Form from "./components/Form";

function App() {

  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <>
    <header>
      <h1>JJ COMPANY TEAM MEMBERS INFO</h1>
      <div className="forms">
      <Form list={teamMembers} setList={setTeamMembers}/>
      </div>
      </header>
      <div className="body">
      
      <TeamMemberList list={teamMembers} setList={setTeamMembers} />
    </div>
    </>
  );
}

export default App;
