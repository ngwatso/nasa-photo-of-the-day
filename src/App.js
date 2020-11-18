import React, {useState} from "react";
import "./App.css";
import axios from "axios";


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

function axiosData() {
  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=F5nq55ivbKdgbLmJ82khNLjE0emrxfKho6ddDenJ&date=${date()}`)
    .then(res => console.log('APOD', res.data))
    .catch(err => console.log('Something went wrong!!', err));
}

axiosData()

function App() {

  const [nasaData, setNasaData] = useState([]);






  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
