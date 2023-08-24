import React,{useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  const[alert,setAlert] = useState(null);
  const [mode, setmode] = useState('light');
const togglemode = () =>{
  if(mode === "dark"){
    document.body.style.backgroundColor="white";
    setmode('light');
    setAlert('Success! changes to light mode');
  }
  else{
    document.body.style.backgroundColor="black";
    setmode('dark');
    setAlert('Success! changes to dark mode');
  }
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}
  return (
    <>
    <Router>
      <Navbar title='TextUtilx' mode={mode} togglemode={togglemode} />
      <Alert alert={alert}/>
      <Routes>
        <Route path='/' element={<TextForm mode={mode}/>} />
        <Route path='/About' element={<About mode={mode} />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
