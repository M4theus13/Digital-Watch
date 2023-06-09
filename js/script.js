const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const button = document.getElementById('button');

button.addEventListener('click', function() {
    const bar = document.getElementById('bar');
    if (bar.style.left === "-20vw") {
        bar.style.animation = "linear .2s open-menu";
        bar.style.left = "0vw";
    } else {
        bar.style.animation = "linear .2s close-menu";
        bar.style.left = "-20vw";
    }
})

const relogio = setInterval(function time() {
    let dateToday = new Date();

    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    
    let dd = dateToday.getDate();
    let MM = dateToday.getMonth()+1;
    let YYYY = dateToday.getFullYear();

    if (hr < 10) hr = "0" + hr;

    if (min < 10) min = "0" + min;

    if (s < 10) s = "0" + s;

    if (dd < 10) dd = "0" + dd;

    if (MM < 10) MM = "0" + MM;

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = s;

    day.textContent = dd;
    month.textContent = MM;
    year.textContent = YYYY;

})