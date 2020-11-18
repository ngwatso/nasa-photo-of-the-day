import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import Apod from "./Apod"


let date = function() {
  let today = new Date();
  let yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();

  if (mm < 10) mm = '0' + mm;
  if (dd < 10) dd = '0' + dd;

  return `${yyyy}-${mm}-${dd}`
};

console.log(date())


function App() {

  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    console.log('fetching data')
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=F5nq55ivbKdgbLmJ82khNLjE0emrxfKho6ddDenJ&date=${date()}`)
      .then(res => setNasaData(res.data))
      .catch(err => console.log('Something went wrong!!', err));
  }, [])
  console.log(nasaData)



  return (
    <div className="App">
      
        <Apod imgData={nasaData} />
      
      
    </div>
  );
}

export default App;
