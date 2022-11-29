//display a banner on Mondays or Tuesdays only at the very top of the page that says "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m." 
/* IF/ELSE IF */

// Declare and initialize a new variable to hold the current date
function modified(){
    let d = new Date();
    let year = d.getFullYear();
   
  document.querySelector('#year').textContent = year;
  document.getElementById('modified').innerHTML = "Last Updated: "+(document.lastModified);
  }

  let currentDay = new Date();
  let dayOfWeek = currentDay.getDay();
  let message;
  if (( dayOfWeek == 1 ) ||( dayOfWeek == 2)) {
  message = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."; 
  document.querySelector('#banner').textContent = message;
  }
  else {
  document.querySelector("#banner").classList.remove("bannerDisplay");
  }