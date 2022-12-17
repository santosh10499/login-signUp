// -----------------------------select Element 
let email = document.getElementById("email");
let password = document.getElementById("password");
let login = document.getElementById("log");
let createAccount = document.getElementById("create");
let message = document.getElementById("message");

// --------------------------------Get data from localStorage===================================
let data = localStorage.getItem("signupData");
let array = JSON.parse(data);
//===================================click event on login form matching data==========
login.addEventListener("click", () => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].email == email.value && array[i].password == password.value) {
      window.location.href = "home.html";
    } else {
      alert("User Not Found");
    }
  }
});

// ================================click event on click button]]]]]]]]]]]]]]]]]]]]]]]
createAccount.addEventListener("click", () => {
  window.location.href = "signup.html";
});
