const starginminuts =10;

let time = starginminuts *60;

const countdownel = document.getElementById('countdown');

setInterval(updatecountdown, 1000);

function updatecountdown() {
    const minutes = Math.floor(time/ 60);
    let seconds= time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    countdownel.innerHTML = `${minutes}: ${seconds}`;
    time--;
}