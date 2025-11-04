import  "./ListStyle.css"
import React, { useState } from 'react';

function List({ users }) {
  const [userList, setUserList] = useState(users);

  const handleAddExclamations = (id) => {
    const updatedUsers = userList.map(user => {
      if (user.id === id) {
        return { ...user, name: '!!! ' + user.name };
      }
      return user;
    });
    setUserList(updatedUsers);
  };

  return (
    <>
      {userList.map((item) => (
        <div key={item.id} className="user">
          <li>
            <p>name - {item.name}</p>
            <p>age - {item.age}</p>
          </li>
          <button onClick={() => handleAddExclamations(item.id)}>add !!!</button>
        </div>
      ))}
    </>
  );
}

export default List;
