let pascal = "PascalStuff"
let snake = ""
for(let i = 0; i < pascal.length; i++ ){
    if(pascal[i] == pascal[i].toUpperCase()){
        snake += "_" + pascal[i].toLowerCase()
    }
    else {
        snake += pascal[i]
    }
}
if (snake[0] == "_"){
    snake = snake.slice(1)
}
console.log(snake)