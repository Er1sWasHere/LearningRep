let phonenum = "AaronVodovoz: 0786-452-285";
let number = "";
let name = phonenum.match(/[A-Za-z]+/);
console.log(name);
number = phonenum.match(/[0-9]{1,12}[-][0-9]{1,12}[-][0-9]{1,12}/);
console.log(number);

let tag = "<tag attribute='value'>Content</tag>";

let txt = "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."
let vowels = [A,E,I,O,U,a,e,i,o,u];

let exactword = /[aeiouAEIOU][a-z]+[^aeiou]/;