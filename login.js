let loginForm = document.getElementById("loginForm");
const submitbtn = document.querySelector(".submit-Btn");

loginForm.addEventListener("submit", (e) => {
    
  e.preventDefault();

  const username = document.getElementById("username");
  const password = document.getElementById("password");

  if (username.value == "" || password.value == "") {
    alert("Ensure you input a value in all fields!");
  } else {
    window.location.replace("logout.html");
    console.log(
      `This form has a username of ${username.value} and password of ${password.value}`
    );

    username.value = "";
    password.value = "";
  }
});
