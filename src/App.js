import React from 'react';
import Temp from './Temp';
import FileUploader from './FileUploader';
import Message from './Message';

const App = () => {
  return (
    <div>
      <Temp></Temp>
      <br></br>
      <FileUploader></FileUploader>
      <br></br>
      <Message></Message>
    </div>
  );
}

export default App;
