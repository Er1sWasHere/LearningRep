let folder = ["somethinghere", "someimagehere", "somesoftwarehere"];
let del = prompt("Want to open?");
let randel = Math.ceil(Math.random() * folder.length);
if (randel == 0){
    randel = 1;
}
folder.splice(randel);
alert(folder);