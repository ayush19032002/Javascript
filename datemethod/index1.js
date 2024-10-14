console.log("datamethod");
let datetoday = new Date();
console.log(datetoday);

 let pastedate = new Date();
 console.log(pastedate);

 let year = pastedate.getFullYear();
 console.log(pastedate);

 let month = pastedate.getMonth();
 console.log(month);

 let date = pastedate.getUTCDate();
 console.log(date);

 let d = new Date ();
document.getElementById("demo").innerHTML = d.getFullYear();

let e = new Date ();
document.getElementById("date1").innerHTML = e.getDate();

let f = new Date ("2/1/2024");
document.getElementById("date2").innerHTML = f.getMonth();

let g = new Date ();
document.getElementById("date3").innerHTML = g.getDay();

let h = new Date ();
document.getElementById("date4").innerHTML = h.getHours();

let i = new Date();
document.getElementById("date5").innerHTML = i.getMinutes();

let j = new Date ();
document.getElementById("date6").innerHTML = j.getSeconds();
 
pastedate.setFullYear("2040");
console.log(pastedate);

pastedate.setDate("3");
console.log(3);

pastedate.setHours("3");
console.log(pastedate);

pastedate.setMinutes("25");
console.log(pastedate);

pastedate.setMonth("1");
console.log(pastedate);

pastedate.setSeconds("20");
console.log(pastedate);

pastedate.setTime("");
console.log(pastedate);

pastedate.setMilliseconds("5000");
console.log(pastedate);

pastedate.setFullYear("2024");
console.log(pastedate);

pastedate.setDate("5");
console.log(pastedate);

pastedate.setDate("");
console.log(pastedate);

const r = new Date ();
r.setFullYear(2024 , 1 , 4);
document.getElementById("demo").innerHTML = r;

var w = new Date ();
w.setDate(10);
document.getElementById("date1").innerHTML = w;



function myfunction(){

    let fieldvalue = document.getElementById("date").value;
    
    let today = new Date (fieldvalue);
    console.log(today.getFullYear() + 2);
}

