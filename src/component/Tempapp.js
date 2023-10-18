import React, {useState} from 'react'
import "../css/style.css"
import Place from "./Place"



function Tempapp() {

  const [userInput, setUserInput] = useState('');

  const handelInpurChange = (event) =>{
    setUserInput(event.target.value);
  }

  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.weatherapi.com/v1/current.json?key=3d8c3846d674495ba38141908210511&q=' +userInput+ '&aqi=no'); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setApiData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <>
        <div className='box'>
            <div className='inputData'>
                <input type='search' className='inputFeild' value={userInput} onChange={handelInpurChange} placeholder='Enter the city'/>
                <button className='btn1' onClick={fetchData}><i class="bi bi-search"></i></button>
            </div>
            <Place data={apiData}/>
        </div>

        <footer>
            <span>Made by Bhairav</span>
        </footer>
    </>
  )
}

export default Tempapp
