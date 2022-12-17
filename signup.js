// ========================select all the needed Element===========================
let email = document.getElementById("email");
let confirmEmail = document.getElementById("confirm-email");
let userName = document.getElementById("name");
let password = document.getElementById("password");
let signUp = document.getElementById("sign");
let cross = document.getElementById("Cross");
let userData = [];

// =======================add click function on signUp button and some validation====================
signUp.addEventListener("click", () => {
  if (userName.value == "") {
    userName.style.border = "1px solid red";
  } else {
    userName.style.border = "1px solid black";
  }
  if (email.value.includes("@") && email.value.includes("gmail.com")) {
    email.style.border = "1px solid black";
  } else {
    email.style.border = "1px solid red";
  }
  if (confirmEmail.value != email.value) {
    confirmEmail.style.border = "1px solid red";
  } else {
    confirmEmail.style.border = "1px solid black";
  }
  if (password.value != "") {
    password.style.border = "1px solid black";
  } else {
    password.style.border = "1px solid red";
  }

  if (userName.value != "" &&email.value == confirmEmail.value && password.value != "" && email.value.includes("@") && email.value.includes("gmail.com")) {
    userData.push({ email: email.value, password: password.value });

    localStorage.setItem("signupData", JSON.stringify(userData));
    window.location.href = "index.html";
  }
});

cross.addEventListener("click", () => {
  window.location.href = "index.html";
});
