// Variables Declartion
let sec = document.getElementById('sec')
let min = document.getElementById('min')
let hr = document.getElementById('hr')

// SETTING ALL HANDS TO 0 Degree;
sec.style.transform = "rotate(90deg)"
min.style.transform = "rotate(90deg)"
hr.style.transform = "rotate(90deg)"
let rotate = 90;
let s = rotate;

// THIS IS FOR SECONDS
setInterval(() => {
    // Variables Declaraiton
    let date = new Date()
    let secs = date.getUTCSeconds()
    s += 6;
    let rotation = rotate;
    rotation = rotate + secs * 6;
    // min.style.transition = "all 0.4s ease"
    sec.style.transform = "rotate(" + rotation + "deg)";
}, 1000);

// THIS IS FOR MINITUES
setInterval(() => {
    // Variables Declaraiton
    let date = new Date()
    let mins = date.getMinutes()
    // mins = 59;
    s += 6;
    let rotation = rotate;
    rotation = rotate + mins * 6;
    min.style.transition = "all 1s ease"
    min.style.transform = "rotate(" + rotation + "deg)";
}, 1000);

// THIS IS FOR HOURS
// Hours had different rotation as compared to Minutes & Seconds
setInterval(() => {
    // Variables Declaraiton
    let date = new Date()
    let hrs = date.getHours()
    let mins = date.getMinutes()
    // mins = 60;
    hrs = hrs * 60 + mins;
    s += 0.5;
    let rotation = rotate;
    rotation = rotate + hrs * 0.5; // 90 + (hrs*60+mins) * 0.5; 
    // For Example 90 + (2*60+22) * 0.5 // Expected 162.5 
    // console.log(rotation);
    hr.style.transform = "rotate(" + rotation + "deg)";
}, 1000);
