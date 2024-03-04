import {useState,useEffect} from "react";
import './App.css';

function App() {

  const [tips,setTips]= useState ("");

  useEffect ( () => {
    fetchTips ();
  }, []);

  const fetchTips = async () => {
    const result = await fetch ('http://www.boredapi.com/api/activity/');
    const data = await result.json();
    console.log(data.activity);
    setTips(data.activity)
  }
  return (
    <div className="App">
      <p>{tips}</p>
      <button onClick = {fetchTips}>New Tip</button>
    </div>
  );
}

export default App;
