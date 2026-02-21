let seconds = 60
let minutes = Math.floor(seconds / 60)
seconds %= 60
let hours = Math.floor(minutes / 60)
minutes %= 60
let time = hours + "||" + (minutes) + "||" + (seconds)
console.log(time)