import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Details from './Details';
import IDetails from './types';
//import Update from './Update';
import apidata from './apidata.json';

function App() {
  const [userstate,setUserstate] = useState<IDetails[]>([]);
  const [userdata, setUsersData] = useState<IDetails[]>([]);

    useEffect(() => {
    return setUserstate(apidata);
  }, []);
  return (
    <div className="App">
     <>
     <Main/>
     <Details/>
     
     </>
    </div>
  );
}

export default App;
