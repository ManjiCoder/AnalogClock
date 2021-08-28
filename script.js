// THIS IS FOR SECONDS
let sec = document.getElementById('sec')
let min = document.getElementById('min')
let hr = document.getElementById('hr')

// SETTING ALL HANDS TO 12;
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
    // secs = 30;
    if (secs == 0) {
        s = 90;
    }
    if (secs != 0) {
        s += 6;
        let rotation = rotate;
        rotation = rotate + secs * 6;
        sec.style.transform = "rotate(" + rotation + "deg)";

    }
}, 1000);

// THIS IS FOR MINITUES
setInterval(() => {
    // Variables Declaraiton
    let date = new Date()
    let mins = date.getMinutes()
    // mins = 46;
    if (mins == 0) {
        s = 90;
    }
    if (mins != 0) {
        s += 6;
        let rotation = rotate;
        rotation = rotate + mins * 6;
        min.style.transform = "rotate(" + rotation + "deg)";

    }
    // console.log(mins);
}, 1000);

// THIS IS FOR HOURS
// Hours had different rotation as compared to Minutes & Seconds
setInterval(() => {
    // Variables Declaraiton
    let date = new Date()
    let hrs = date.getHours()
    // hrs = 18;
    if (hrs == 0) {
        s = 90;
    }
    if (hrs != 0) {
        s = s + 30;
        let rotation = rotate;
        rotation = rotate + hrs * 30;
        // console.log(rotation);
        hr.style.transform = "rotate(" + rotation + "deg)";
    }
    // console.log(hrs);
}, 1000);
