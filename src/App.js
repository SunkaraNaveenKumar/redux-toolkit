import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Navigation from './Components/Navigation';
import DisplayNews from './Components/DisplayNews';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getInitialData } from './Store/Slices/hnSearchSlice';

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(getInitialData())
  },[])
  return (
    <div>
      <Navigation/>
      <DisplayNews/>
    </div>
  );
}

export default App;
