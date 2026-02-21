    let bin = "110100011010001101000 110100111010011101001";
    let result = "";
    function binCheck(bstr) {
        let txt = bstr.split(' ');
        for (let i = 0; i < txt.length; i++) {
        let binn = txt[i];
        let norbin = txt[i].substring(0, txt[i].length / 3);
        if (binn.length != norbin.length * 3) {
            console.log("Error.");
        }

        else{
        let binToTxt = norbin.match(/.{1,8}/g); // copilot v pomosh'
        for (let b = 0; b < binToTxt.length; b++) {
            let charCode = parseInt(binToTxt[b], 2);
            result += String.fromCharCode(charCode);
        }
        }
        }
        console.log(result);
    }
    binCheck(bin);