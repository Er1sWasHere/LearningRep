let currentmonth = 12
let currentday = 20
let date = currentday + "." + currentmonth
console.log(date)
let adDays = prompt("write in ammount of days");
currentday += parseInt(adDays);
if (currentday > 30) {
    currentmonth += Math.floor(currentday / 30);
    currentday = currentday % 30;
}
if (currentmonth > 12) {
    currentmonth = currentmonth % 12;
}
date = currentday + "." + currentmonth
console.log(date)