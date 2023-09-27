let signupForm = document.getElementById("signupForm");
const submitbtn = document.querySelector(".submit-btn");

signupForm.addEventListener("submit", (e) =>
 {
  e.preventDefault();
  const username1 = document.getElementById("username");
  const email = document.getElementById("email");
  const password1 = document.getElementById("password");

  localStorage.setItem('username2', 'username1');
  localStorage.setItem('password2', 'password1');


  if (username1.value != "" && email.value !="" && password1.value != "") {
  window.location.replace("logout.html");
  } else {
    alert("Ensure you input a value in all fields!");
    console.log(
      `This form has a username of ${username1.value} and email of ${email.value} and password of ${password1.value}`
    );

    username1.value = "";
    email.value="";
    password1.value = "";
  }
});
