

const hour_span = document.getElementById("hour");
const min_span = document.getElementById("min");
const sec_span = document.getElementById("sec");

//........................................................

function printTheHour(){    
    const fullDate = new Date();
    let hours = fullDate.getHours();
    let mins = fullDate.getMinutes();
    let secs = fullDate.getSeconds();

    if(hours < 10) hours = "0" + hours;
    if(mins < 10) mins = "0" + mins;
    if(secs < 10) secs = "0" + secs;

    hour_span.innerHTML = hours;
    min_span.innerHTML= mins;
    sec_span.innerHTML = secs;
}

setInterval(printTheHour, 100);