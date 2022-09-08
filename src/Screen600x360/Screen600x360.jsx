import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Screen600x360.css'

export const ScreenSubaway600x360 = () => {
 
  const [ itIsHour, setitIsHour ] = useState(false)
  const [ valueHour, setValueHour ] = useState(0)


  const [seconds, setSeconds] = useState(0)
  const [ minut, setMinut ] = useState(0)
  const [ hours, sethours ] = useState(0)


  const minutesUp = () => {

   let  time = new Date;
   setValueHour(time.getHours()) 
    valueHour == 21 ? setitIsHour(true) : setitIsHour(false)


    console.log(valueHour)
     setMinut(time.getMinutes())
     setSeconds(time.getSeconds())
    sethours(time.getHours())

  }



 useEffect(() => {

  const interval =  setInterval(minutesUp, 1000)

console.log('called useEffect')
return () => {
  clearInterval(interval)
} 

},[valueHour]) 


  return (
 
    <div className='container-600x360'>
   {   itIsHour &&     <div className='container-tittle' >
          <div className='title'>
          <h1 className='title-center1'>ES HORA DE</h1>
         <h1  className='title-center2'>ALMOZAR</h1>
          </div>
          <div  className='container-wacht'>
              <div className='showHour wacht2'>
                  <p>HORAS</p>
                 <h6>{` ${hours < 10 ? '0' + hours : hours}`}</h6>
              </div>
              <div className='showMinutes wacht2'>
                <p>MINUTOS</p>
                <h6>{` ${minut < 10 ? '0' + minut : minut}`}</h6>
              </div>
              <div className='showSeconds wacht2'>
                <p>SEGUNDOS</p>
                <h6>{` ${seconds < 10 ? '0' + seconds : seconds}`}</h6>
              </div>
          </div>

        </div> 
}
    </div>

  )
}
