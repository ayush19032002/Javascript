console.log("date method");
let datetoday = new Date();
console.log(datetoday);

let pastedate = new Date("12/12/2023");
console.log(pastedate);

let year = pastedate.getFullYear();
console.log(pastedate);

let month = pastedate.getMonth() + 1;
console.log(month);

let date = pastedate.getDate();
console.log(date);

function myfunction(){

    let Fieldvalue = document.getElementById("dat");
    console.log(new Date(Fieldvalue));

    let dataform = new Date(Fieldvalue);
    console.log(month);
}


pastedate.setFullYear("2030");
console.log(pastedate);

pastedate.setDate("11");
console.log(pastedate);

pastedate.setMonth("9");
console.log(pastedate);

pastedate.setFullYear("2039");
console.log(pastedate);

pastedate.setDate();
console.log(pastedate);

let d = new Date ("10/11/2023");
document.getElementById("demo").innerHTML = d.getFullYear();

let e = new Date("11/12/2020");
document.getElementById("dat").innerHTML = e.getMonth() -9;

let c = new Date("12/11/2040");
document.getElementById("datee").innerHTML = c.getFullYear();

let a = new Date();
document.getElementById("dateeee").innerHTML = a.getDate();

let b = new Date();
document.getElementById("date1").innerHTML = b.getFullYear();

let f = new Date();
document.getElementById("month1").innerHTML = f.getMonth();
