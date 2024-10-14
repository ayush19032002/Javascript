console.log("hour to days");

function hourstodays(){

    const d = new Date();
    let year = d.getDay();

    let hours = document.getElementById("days").value;
    let days = (hours * 24);
    let message = document.getElementById("message");

    message.textContent = "You are" +  days  + " "  + "hours";

}
function reset(){
    document.getElementById("message").textContent =" ";
    document.getElementById("days").value = " ";
}
