const starginminuts =10;

let time = starginminuts *60; //is iqual to seconds

const countdownel = document.getElementById('countdown');

setInterval(updatecountdown, 1000);

function updatecountdown() {
    const minutes = Math.floor(time/ 60); //so seconds turns into mins
    let seconds= time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds; //to show: 09-01
    
    countdownel.innerHTML = `${minutes}: ${seconds}`;
    time--;
}