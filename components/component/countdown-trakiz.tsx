import React from 'react'
import { NumberBox } from './NumberBox'

interface timeProps{
  days: number | string,
  hours:number | string ,
  minutes:number | string,
  seconds:number | string,
}

export const TimerContainer = ({days, hours, minutes ,seconds }: timeProps) => {

  let daysFlip = false;
  let hoursFlip = false;
  let minutesFlip = false;
  let secondsFlip = true;

  //@ts-ignore
 if (seconds <=0 && minutes <=0 && hours <=0 && days <=0){
   daysFlip =  false;
   hoursFlip =  false;
   minutesFlip = false;
   secondsFlip = false;
 }

 if(seconds == 0){
   if( minutes !=0){
    seconds=59;
   }
   
   secondsFlip = false;
   minutesFlip = true;
 }
 if (minutes == 0 ){
    if( hours !=0){
      minutes=59;
    }
   
   minutesFlip = false;
   hoursFlip = true;
 }

 if( hours == 0){
   hoursFlip = false;
   if(days !=0){
     daysFlip = true;
   }
   
 }

 
  // @ts-ignore
   if(days <10){
     days="0"+days
   }

  // @ts-ignore
   if(hours <10){
     hours="0"+hours
   }


  // @ts-ignore
   if(minutes <10){
     minutes="0"+minutes
   }

  // @ts-ignore
   if(seconds < 10){
     seconds="0"+seconds
     
   }
  
    return (
       <div className="font-inter flex py-4 md:gap-6 justify-between items-center md:items-center md:justify-between rounded-xl md:px-6 md:py-1 ">
            <NumberBox num={days } flip={daysFlip} />
            <span className="text-5xl md:inline-block md:text-7xl font-light font-inter text-gray-50 ">:</span>
            <NumberBox num={hours } flip={hoursFlip} />
            <span className=" text-5xl md:inline-block md:text-7xl font-light font-inter text-gray-50 ">:</span>
            <NumberBox num={minutes} flip={minutesFlip}/>
            <span className=" text-5xl md:inline-block md:text-7xl font-light font-inter text-gray-50 ">:</span>
            <NumberBox num={seconds } flip={secondsFlip} />
        </div>
    )
}