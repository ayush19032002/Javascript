console.log("months to years");

function monthstoyears(){

    const d = new Date();
    let year = d.getFullYear();

    let months = document.getElementById("years").value;
    let years = (months)/12;
    let message = document.getElementById("message");

    message.textContent = "You are" +  years  + " "  + "years";

}
function reset(){
    document.getElementById("message").textContent =" ";
    document.getElementById("years").value = " ";
}
