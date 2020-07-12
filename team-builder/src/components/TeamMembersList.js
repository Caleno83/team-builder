import React from "react";

const TeamMemberList = props => {
  return (
    <div>
      {props.list.map(list => (
        <div key={list.id}>
          <p>Name: {list.name}</p>
          <p>Email Address: {list.email}</p>
          <p>Title: {list.role}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMemberList;

