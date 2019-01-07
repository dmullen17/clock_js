function updateSecond() {
    const date = new Date(); 
    //let seconds = date.getSeconds();
    //console.log(seconds);  //out is 1, 2, 3 etc. need to convert it to degrees and add an offset of 15 seconds because we start at 12oclock
    let seconds = (date.getSeconds() / 60) * 360 + 90; 
    //console.log(seconds);
    // turn off the transition when it completes a full loop
    if (seconds === 90) {
        document.querySelector('.hand-second').style.transition = '0s';
    }
    document.querySelector('.hand-second').style.transform = `rotate(${seconds}deg)`;
}

setInterval(updateSecond, 1000); 

function updateMinute() {
    const date = new Date(); 
    let minute = (date.getMinutes()/60) * 360 + 90;
    if (minutes === 90) {
        document.querySelector('.hand-minute').style.transition = '0s';
    }
    document.querySelector('.hand-minute').style.transform = `rotate(${minute}deg)`;
}
setInterval(updateMinute, 5000);

function updateHour() {
    const date = new Date(); 
    let hour = (date.getHours()/12) * 360 + 90;
    if (hour === 90) {
        document.querySelector('.hand-minute').style.transition = '0s';
    }
    document.querySelector('.hand-hour').style.transform = `rotate(${hour}deg)`;
}
setInterval(updateHour, 5000);

// TODO: 
// 1. Make hour hand shorter - linear gradient? 
// 2. Fix second hand error where it resets 
