window.onload = function() {
  
  let mins = 0;
  let sec = 0;
  let tens = 0;
  let appendMins = document.querySelector('#mins');  
  let appendSec = document.querySelector('#sec');  
  let appendTens = document.querySelector('#tens');

  let startBtn = document.querySelector('#Start');
  let stopBtn = document.querySelector('#Stop');
  let resetBtn = document.querySelector('#Reset');

  let Interval;

  const startTimer = () => {

  	tens++;

  	if (tens<= 9) {

        
  		appendTens.innerHTML = '0' + tens;

  	}if (tens>9) {

  		appendTens.innerHTML = tens;

  	} if (tens>99) {

  		sec++;
  		appendSec.innerHTML= '0' + sec;
  		tens = 0;
  		appendTens.innerHTML = '0' + 0

  	} if (sec > 9) {
  		appendSec.innerHTML= sec;
  	} if (sec > 59) {
  		mins++;
  		appendMins.innerHTML = '0' + mins;
  		sec=0;
  		appendSec.innerHTML = '0'+ 0
  	}



  }

 startBtn.addEventListener('click' , () => {
  	clearInterval(Interval);
  	Interval= setInterval(startTimer , 10)
  })

 stopBtn.addEventListener('click' , () => {
 	clearInterval(Interval);
 })

 resetBtn.addEventListener('click' , () => {

 	clearInterval(Interval)
 	mins = '00';
 	sec= '00';
 	tens = '00'

 	appendMins.innerHTML = mins;
 	appendSec.innerHTML = sec;
 	appendTens.innerHTML = tens;
 })
 
 
}


console.log('hell')