console.log("millisecond to second ");


function millisecond() {
    const d = new Date();
    let year = d.getMilliseconds();

    let milliseconds = document.getElementById("second").value;
    let second = ( milliseconds / 1000 );
    let message = document.getElementById("message");

    message.textContent = "You are " + second + " " ;
}

function reset() {
    document.getElementById("message").textContent = "";
    document.getElementById("second").value = "";
}
