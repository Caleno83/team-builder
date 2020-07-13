import React from "react";

const TeamMemberList = props => {
  return (
    <div className="teamList">
        <div className="title-list">
            <ul>
                <li>Name</li>
                <li>Email</li>
                <li>Role</li>
            </ul>
        </div>
      {props.list.map(list => (
        <div className="list" key={list.id}>
          <p>{list.name}</p>
          <p>{list.email}</p>
          <p>{list.role}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMemberList;

