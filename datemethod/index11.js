console.log("calculate age from date of birth");

function ageCalculator() {

    let today = new Date()

    var userinput = document.getElementById("DOB").value;
    var DOB = new Date(userinput);
    if (userinput == null || userinput == '') {
        document.getElementById("message").innerHTML = "**Choose a date please!";
        return false;
    } else {

        let month = today.getMonth() - DOB.getMonth();
        console.log(month);

        let year = today.getFullYear() - DOB.getFullYear();
        console.log(year);

        let days = today.getDay() - DOB.getDay();
        console.log(days);

        `${month} + ${year} + ${days}e is age differenc`

    }
}




