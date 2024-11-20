import React from 'react';
import Tabs from './components/Tabs';
import FileUpload from './components/FileUpload';

const App = () => {
  return (
    <div className="App">
      <h1>Swipe Invoice Management</h1>
      <FileUpload />
      <Tabs />
    </div>
  );
};

export default App;
