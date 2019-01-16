let secondHand = document.querySelector('.hand-second');
let minuteHand = document.querySelector('.hand-minute');
let hourHand = document.querySelector('.hand-hour');

function updateTime() {
    let date = new Date();
    
    //console.log(date.getSeconds());
    let seconds = date.getSeconds();
    let secondsDegrees = (seconds / 60) * 360 + 90;
    if (secondsDegrees == 90) { 
        secondHand.style.transition = 'transform 0s';
    }
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    let minutes = date.getMinutes();
    let minutesDegrees = (minutes / 60) * 360 + 90;
    if (minutesDegrees == 90) {
        minuteHand.style.transition = 'transform 0s';
    }
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    
    let hours = date.getHours(); 
    let hoursDegrees = (hours / 12) * 360 + 90;
    if (hoursDegrees == 90) {
        hourHand.style.transition = 'transform 0s';
    }
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(updateTime, 1000);