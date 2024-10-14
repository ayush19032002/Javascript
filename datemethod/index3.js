console.log("year in days");

function yearInDays() {
    const d = new Date();
    let year = d.getDay();

    let days = document.getElementById("days").value;
    let Year = ( days) * 365;
    let message = document.getElementById("message");

    message.textContent = "You are " + Year + " " + "days";
}

function reset() {
    document.getElementById("message").textContent = "";
    document.getElementById("days").value = "";
}
