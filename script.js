// THIS IS FOR SECONDS
let sec = document.getElementById('sec')
sec.style.transform = "rotate(90deg)"
let s = 90;

// THIS IS FOR MINITUES
let min = document.getElementById('min')
min.style.transform = "rotate(90deg)"
let m = 90;

// THIS IS FOR HOURS
let hr = document.getElementById('hr')
hr.style.transform = "rotate(90deg)"
let h = 90;

// THIS IS FOR SECONDS
setInterval(() => {
    s += 6;
    sec.style.transition = "all 1s"
    sec.style.transform = "rotate(" + s + "deg)";
}, 1000);

// THIS IS FOR MINITUES
setInterval(() => {
    m += 6;
    min.style.transition = "all 1s"
    min.style.transform = "rotate(" + m + "deg)";
}, 1000 * 60);

// THIS IS FOR HOURS
setInterval(() => {
    h += 6;
    hr.style.transition = "all 1s"
    hr.style.transform = "rotate(" + h + "deg)";
}, 1000 * 60 * 60);