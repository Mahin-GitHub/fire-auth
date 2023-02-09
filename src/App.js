import React from 'react';
import AuthDetails from './Conponents/Auth/AuthDetails';
import SignIn from './Conponents/Auth/SignIn';
import SignUp from './Conponents/Auth/SignUp';

const App = () => {
  return (
    <div>
      <SignIn></SignIn>
      <SignUp></SignUp>
      <AuthDetails></AuthDetails>
    </div>
  );
};

export default App;