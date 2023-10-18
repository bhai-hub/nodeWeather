
import React from 'react'

function Place(props) {

  return (
    <>

    {props.data.location ==null ? <p className='starting'>Enter the city name</p> :
        <div className='result'>
            <div className='name'>
                <span><i class="bi bi-geo-alt-fill loco"></i>{props.data.location.name}</span>
            </div>
            <div className='image'>
                <img src={props.data.current.condition.icon} alt={props.data.current.condition.text}/>
            </div>
            <div className='temperature'>
                <span className='temp'>{props.data.current.temp_c}°Cel</span>
            </div>
            <div className='minMax'>
                <span>Min: {props.data.current.temp_c}°C | Max: {props.data.current.feelslike_c}°C</span>
            </div>
        </div>
        }
    </>
  )
}

export default Place
