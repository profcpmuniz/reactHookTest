import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import  First, {Second, Third} from './Components';


function App() {
  const [age, setAge] = useState(28);
  const [date, setDate] = useState(null);
  

  
  useEffect(() => {
    setDate(Date.now());
  }, []);

  useEffect(() => {
    setDate(Date.now());
  }, [age]);



  const handle = () =>  {
    const newAge = age + 1;
    setAge(newAge)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>{date}</h1>
       <h1>{age}</h1>
       <button onClick={handle}>Click Here</button>
        <First></First>
        <Second></Second>
        <Third></Third>
      </header>
    </div>
  );
}

export default App;
