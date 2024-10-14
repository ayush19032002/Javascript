console.log("days to months");

function daystomonth(){

    const d = new Date();
    let year = d.getMonth();

    let months = document.getElementById("days").value;
    let days = (months/30 );
    let message = document.getElementById("message");

    message.textContent = "You are" +  days  + " "  + "month";

}
function reset(){
    document.getElementById("message").textContent =" ";
    document.getElementById("days").value = " ";
}
