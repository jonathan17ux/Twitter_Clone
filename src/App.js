import React from 'react'
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import  Widgets  from './Widgets';

function App() {
  return (
    <div className="app">
      <p> Let's build a Twitter Clone</p>
      
      <Sidebar />
      
        {/*Feed */}
       <Feed />
       
       {/*widgets */}
       <Widgets />
    </div>
  );
}

export default App;
