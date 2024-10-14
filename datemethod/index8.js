console.log("days to years");

function daystoyear(){

    const d = new Date();
    let year = d.getFullYear();

    let days = document.getElementById("years").value;
    let years = (days)/365;
    let message = document.getElementById("message");

    message.textContent = "You are" +  years  + " "  + "years";

}
function reset(){
    document.getElementById("message").textContent =" ";
    document.getElementById("years").value = " ";
}
