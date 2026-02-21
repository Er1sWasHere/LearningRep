let action = ["up", "up", "up", "left", "left", "left", "left", "down", "right", "right", "down", "down"]
let rightS = 0
let leftS = 0
let upS = 0
let downS = 0
let right = 'right'
let left = 'left'
let up = 'up'
let down = 'down'
for(let i = 0; i < action.length; i++) {
    if(action[i] == "right") {
        rightS += 1
    } else if(action[i] == "left") {
        leftS += 1
    } else if(action[i] == "up") {
        upS += 1
    } else if(action[i] == "down") {
        downS += 1
    }
}
console.log("right: " + rightS)
console.log("left: " + leftS)
console.log("up: " + upS)
console.log("down: " + downS)
while(rightS && leftS > 0){
    let rightIn = action.indexOf(right)
    action.splice(rightIn, 1)
    let leftIn = action.indexOf(left)
    action.splice(leftIn, 1)
    rightS -= 1
    leftS -= 1
}
while(downS && upS > 0){
    let upIn = action.indexOf(up)
    action.splice(upIn, 1)
    let downIn = action.indexOf(down)
    action.splice(downIn, 1)
    upS -= 1
    downS -= 1
}
console.log(action)
