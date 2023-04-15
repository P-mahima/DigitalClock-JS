

function diaplayTime() {
  // console.log("JavaScript is Live");
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
  var sec = dateTime.getSeconds();

  var session = document.getElementById('sessions');

    if(hrs >= 12)
    {
      session.innerHTML = 'PM';
    }
    else
    {
      session.innerHTML = 'AM';
    }   
    
    
    if(hrs>=6 && hrs<11)
    {
      const Greeting = document.getElementsByClassName('divClass1')[0];
      Greeting.innerHTML = "GRAB SOME HEALTHY BRAEKFAST"
      console.log('GRAB SOME HEALTHY BRAEKFAST')
    }
    if(hrs>=11 && hrs<15)
    {
      const Greeting = document.getElementsByClassName('divClass1')[0];
      Greeting.innerHTML = "LET'S HAVE SOME LUNCH !!"
      console.log('LET`S HAVE SOME LUNCH ')
    }
    if(hrs>=15 && hrs<19)
    {
      const Greeting = document.getElementsByClassName('divClass1')[0];
      Greeting.innerHTML = "STOP YAWNING, GET SOME TEA...!!"
      console.log('STOP YAWNING, GET SOME TEA...!!')
    }
    if(hrs>=19 && hrs<24)
    {
      const Greeting = document.getElementsByClassName('divClass1')[0];
      Greeting.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP"
      console.log('CLOSE YOUR EYES AND GO TO SLEEP')
    }
    if(hrs>=1 && hrs<6)
    {
      const Greeting = document.getElementsByClassName('divClass1')[0];
      Greeting.innerHTML = "Good Night"
      console.log('GOOD NIGHT...!!!')
    }

    
    
    
    // kkkkk
    if (hrs>12) {
      hrs -= 12;
    PMAM = "pm";
  }

  if (hrs < 10) {
    hrs = "0" + hrs;
  }

  if (min < 10) {
    min = "0" + min;
  }

  if (sec < 10) {
    sec = "0" + sec;
  }


  document.getElementById('hours').innerHTML = hrs;
  document.getElementById('minutes').innerHTML = min;
  document.getElementById('seconds').innerHTML = sec;
  
  
}

setInterval(diaplayTime, 1000); 



function setTime()
{
  let picture = document.getElementById('photo')
  let two = document.getElementById('two');

  // id used in html fetch by using querySelector and assign in new variable name.
  let morning = document.querySelector('#morning');
  let afternoon = document.querySelector('#afternoon');
  let evening  = document.querySelector('#evening');
  let night = document.querySelector('#night');

  // In dropdown box to choose options via JS this is fixed syntax 
  let wake = morning.options[document.getElementById('morning').selectedIndex];
  let lunch = afternoon.options[document.getElementById('afternoon').selectedIndex];
  let even = evening.options[document.getElementById('evening').selectedIndex];
  let one = night.options[document.getElementById('night').selectedIndex];

  let para = document.getElementsByClassName("para");

  para[0].innerHTML = `Wake UP Time ${wake.innerHTML}`;
  para[1].innerHTML = `Lunch Time ${lunch.innerHTML}`;
  para[2].innerHTML =  `Nap Time ${even.innerHTML}`;
  para[3].innerHTML = `Night Time ${one.innerHTML}`;


  let time = new Date();
  let hrs = time.getHours();

  if(hrs === parseInt(morning.value))
  {
    two.innerHTML = 'GOOD MORNING';
    picture.src = './morning.svg';
  }

  else if(hrs === parseInt(afternoon.value))
  {
    two.innerHTML = 'GOOD AFTERNOON';
    picture.src = 'group.svg';
  }
  else if(hrs === parseInt(evening.value))
  {
    two.innerHTML = 'GOOD EVENING';
    picture.src = './cup.png';
  

  }
  else if(hrs === parseInt(night.value))
  {
    two.innerHTML = 'GOOD NIGHT';
    picture.src = './goodnight.svg';
  }
 
}