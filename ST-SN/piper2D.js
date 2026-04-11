let city = [[' ', ' ', ' ', ' ', '↗'],
            ['P', '↓', ' ', '↖', '↑'],
            [' ', ' ', '←', ' ', '↓'],
            [' ', '↖', '↙', ' ', '↙'],
            ['↓', '↓', '↓', ' ', ' ']];
let piperPos = [1, 0];
let deaf = 0
for(let x = 0; x < city.length; x++){
    for(let y = 0; y < city[x].length; y++){
        if(city[x][y] == ' '){
            continue;
        }
        if(city[x][y] == '↑'){
            let upRPos = [x, y];
            if(upRPos[1] < piperPos[1]){
                continue
            }
            else{
                deaf += 1;
            }
        }
        if(city[x][y] == '↓'){
            let downRPos = [x, y];
            if(downRPos[1] > piperPos[1]){
                continue
            }
            else{
                deaf += 1;
            }
        }
        if(city[x][y] == '←'){
            let leftRPos = [x, y];
            if(leftRPos[0] > piperPos[0]){
                continue
            }
            else{
                deaf += 1;
            }
        }
        if(city[x][y] == '→'){
            let rightRPos = [x, y];
            if(rightRPos[0] < piperPos[0]){
                continue
            }
            else{
                deaf += 1;
            }
        }
        if(city[x][y] == '↗'){
            let upRightRPos = [x, y];
            if(upRightRPos[0] < piperPos[0] && upRightRPos[1] > piperPos[1]){
                continue
            }
            else{
                deaf += 1;
            }
        }
        if(city[x][y] == '↖'){
            let upLeftRPos = [x, y];
            if(upLeftRPos[0] < piperPos[0] && upLeftRPos[1] < piperPos[1]){
                continue
            }
            else{
                deaf += 1;
            }
        }
        if(city[x][y] == '↙'){
            let downLeftRPos = [x, y];
            if(downLeftRPos[0] > piperPos[0] && downLeftRPos[1] < piperPos[1]){
                continue
            }
            else{
                deaf += 1;
            }
        }
        if(city[x][y] == '↘'){
            let downRightRPos = [x, y];
            if(downRightRPos[0] > piperPos[0] && downRightRPos[1] > piperPos[1]){
                continue
            }
            else{
                deaf += 1;
            }
        }
    }
}
alert(deaf);