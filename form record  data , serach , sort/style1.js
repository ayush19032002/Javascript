function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}
let records = JSON.parse(localStorage.getItem("localdata")) || [];
let isEdit = -1;
let renderTable = () => {

  document.getElementById('tableBody').innerHTML = records.map((item, index) => {
    return (
      `<tr>
            <td>${item.firstname}</td>
            <td>${item.userEmail}</td>
            <td>${item.userpass}</td>
            <td>${item.userno}</td>
            <td>${item.date}</td>
            <td>${item.userCountry}</td>
            <td><button onclick=editData(${index})>Edit</button></td>
            <td><button onclick="deleteData(this)">Delete</button></td>
      </tr>
            `
    )
  }).join('')
}
renderTable();

function validateForm() {
  let fullname = document.getElementById("nameErr").value;
  console.log(fullname);
  // window.alert(fullname);

  let email = document.getElementById("emailErr").value;
  console.log(email);
  // window.alert(email);

  let mobile = document.getElementById("mobileErr").value;
  console.log(mobile);
  // window.alert(mobile);

  let birthdate = document.getElementById("birthdateErr").value;
  console.log(birthdate);
  // window.alert(birthdate);

  let country = document.getElementById("countryErr").value;
  console.log(country);
  // window.alert(country);

  let password = document.getElementById("passwordErr").value;
  console.log(password);
  // window.alert(password);

  let person = { firstname: fullname, userEmail: email, userno: mobile, date: birthdate, userCountry: country, userpass: password }
  console.log(person);

  // edit in form data record  
  if (isEdit !== -1) {

    const updated = records.map((item, index) => {
      if (isEdit === index) {
        return person
      }
      else return item
    })
    records = updated;
    localStorage.setItem('localdata', JSON.stringify(updated))
    renderTable()
    isEdit - 1;
  }
  else {
    records.push(person);
    localStorage.setItem("localdata", JSON.stringify(records));
    renderTable();
  }
  console.log(records);

}
// edit in table row 
function editData(indx) {
  isEdit = indx;
  console.log(indx)

  const record = records?.find((item, index) => index === indx);
  console.log(record);

  document.getElementById("nameErr").value = record.firstname;
  document.getElementById("emailErr").value = record.userEmail;
  document.getElementById("mobileErr").value = record.userno;
  document.getElementById("birthdateErr").value = record.date;
  document.getElementById("countryErr").value = record.userCountry;
  document.getElementById("passwordErr").value = record.userpass;
}

// delete in table row 
function deleteData(button) {

  let row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

// search name in records 
function handlesearch() {
  const search = document.getElementById("myInput").value;

  const filtereddata = records.filter((item) => { return item.firstname === search });
  records = filtereddata;
  renderTable()
}

// sort table using alphabet wise name set 
function sortTable() {
  const sorteddata = records.sort((a, b) => { return (a > b ? 1 : -1) });
  records = sorteddata
  renderTable()
}