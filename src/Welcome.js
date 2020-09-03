import React from 'react';
import { getUser, removeUserSession } from './Utils/Common';

function Welcome(props) {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  const handleSearch = () => {
    //removeUserSession();
    props.history.push('/search');
  }

  return (
    <div>
      Welcome to Loan Management App {user.name}!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" onClick={handleLogout} value="Logout" /><br /><br />
      <p><input type="button" onClick={handleSearch} value="Search for loan" /></p>
     
    </div>
  );
}

export default Welcome;
