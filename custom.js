$(document).ready(function () {
  console.log("ready!");
  showtable();
});

function show() {
  var element2 = document.getElementById("tabledata");
  element2.classList.remove("col-md-12");

  var element = document.getElementById("tabledata");
  element.classList.add("col-md-5");

  var element2 = document.getElementById("formtable");
  element2.classList.remove("delt");

  var element1 = document.getElementById("formtable");
  element1.classList.add("col-md-7");

  element1.classList.add("show");
}

// function back() {
//   var element5 = document.getElementById("showdata");
//   element5.classList.remove("show");

//   var element2 = document.getElementById("form-detl");
//   element2.classList.remove("hide");

//   // console.log(show);
//   var element4 = document.getElementById("showdata");
//   element4.classList.add("show");
//   var element3 = document.getElementById("form-detl");
//   element3.classList.add("show");
// }

//   localStorage.setItem("name", "faiz");
//   localStorage.setItem("age", "22");
//   localStorage.setItem("phone", "warid");
//   //   localStorage.removeItem("name");

//   //   console.log(localStorage.getItem("age"));
//   console.log(localStorage.key("2"));

function inputData() {
  let formData = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    email: document.getElementById("email").value,
    pwd: document.getElementById("pwd").value,
  };
  const key = formData.fname;

  const value = [formData.lname, formData.email, formData.pwd];

  var xhr = new XMLHttpRequest();
  if (key && value) {
    //   localStorage.setItem(JSON.stringify(key, value));
    localStorage.setItem(key, value);
    // localStorage.reload();
  }
  xhr.onload = function () {
    console.log(this.response);
  };
  showtable();

  return false;
}

function showtable() {
  let iterative_html = "";
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    //   console.log(key);
    const value = localStorage.getItem(key);
    // console.log(value);

    var res = value.split(",");
    //   console.log(res);

    let name = res[0];
    //   console.log(name);
    let email = res[1];
    let pass = res[2];

    var output = document.getElementById("output");

    iterative_html += `
    <tr>
      <td>${name}</td>
      <td>${email}</td>
      <td>${pass}</td>
      <td><button type="button"id="del" class="btn btn-outline-danger"  onClick="del('${key}')">Delete</button>
        <button type="button"id="del" class="btn btn-outline-success"  onClick="edit('${key}')">Edit</button>
        </td>
    </tr>`;

    //   cdocument.getElementById("output").innerHTML +=
    //     "${key}: ${value} <br>";
  }
  let html = `
    <table class="main">
        <tbody>
            <tr>
                <th>First Name</th>  <th> Email Address</th> <th>Password</th><th>Action</th>
            </tr>
            ${iterative_html}
        </tbody>
    </table>`;
  output.innerHTML = html;
}

function del(key) {
  console.log(key);
  localStorage.removeItem(key);
  showtable();
}

function edit(key) {}
