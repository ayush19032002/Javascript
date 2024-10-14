console.log("days to hours");

function daystohours(){

    const d = new Date();
    let year = d.getHours();

    let days = document.getElementById("hours").value;
    let hours = (days*24);
    let message = document.getElementById("message");

    message.textContent = "You are" +  hours  + " "  + "days";

}
function reset(){
    document.getElementById("message").textContent =" ";
    document.getElementById("hours").value = " ";
}
