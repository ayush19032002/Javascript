function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}



function validateForm() {
    let fname = document.getElementById("fname").value;
    console.log(fname);
    // window.alert(fname);

    let email = document.getElementById("email").value;
    console.log(email);
    // window.alert(email);

    let bdate = document.getElementById("bdate").value;
    console.log(bdate);
    // window.alert(bdate);

    let uesrname = document.getElementById("uesrname").value;
    console.log(uesrname);
    // window.alert(uesrname);

    let password = document.getElementById("password").value;
    console.log(password);
    // window.alert(password);

    let age = document.getElementById("age").value;
    console.log(age);
    // window.alert(age);

    let zipcode = document.getElementById("zipcode").value;
    console.log(zipcode);
    // window.alert(zipcode);

    let address = document.getElementById("address").value;
    console.log(address);
    // window.alert(address);

    let city = document.getElementById("city").value;
    console.log(city);
    // window.alert(city);

    let course = document.getElementById("course").value;
    console.log(course);
    // window.alert(course);
    let person = { uname: fname, useremail: email, birthdate: bdate, pass: password, age: age, zip: zipcode, add: address, city: city, course: course }
    console.log(person);


}