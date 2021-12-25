import React from 'react';
import Profile from './Profile/profileComponents';


function App() {

  /*The HandleName Function */

  const handleName = name => alert (name);

  return (
    <div className="App">

      <Profile fullname="Fullname:Emna Abdessalem"  bio="Bio:I am learning how to develop Websites" 
      profession="Profession:WebDevelopment Student" handleName={handleName}>
         http://erothtechnologies.com/assets/uploads/file-59.jpg </Profile>
    </div>
  );
}

export default App;
