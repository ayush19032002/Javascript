console.log("seconds to hours");

function secondtohours(){

    const d = new Date();
    let year = d.getHours();

    let seconds = document.getElementById("hours").value;
    let hours = (seconds/3600);
    let message = document.getElementById("message");

    message.textContent = "You are" +  hours  + " "  + "hours";
 
}
function reset(){
    document.getElementById("message").textContent =" ";
    document.getElementById("hours").value = " ";
}
