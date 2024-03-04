import {useState,useEffect} from "react";
import './App.css';
import image from "./image.jpeg";

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
  return (<div>

    <div className="App">
      <img className="background-image" src = {image} alt="pic"></img>
    </div>

    <div className="App">
      <p>{tips}</p>
      </div>

      <div className="btn">
      <button onClick = {fetchTips}>New Tip</button>
    </div>
    </div>
    
  );
}

export default App;
