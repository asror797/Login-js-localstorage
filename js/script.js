let storage = window.localStorage; // local storage 
let email = document.getElementById("email"); //email input
let password = document.getElementById("password"); // password input
let loginBtn = document.getElementById("button"); // login button

// convert user info to object 
let user = storage.getItem("user");
const userInfo = JSON.parse(user)

// chekkin user log in
if(!(storage.user==undefined)) {
  location.href = './pages/logined.html';
}

//login section 
loginBtn.addEventListener("click",()=>{
  let loginData = new Object();
  loginData.emailName =email.value;
  loginData.password=password.value;
  let Value = JSON.stringify(loginData)

  storage.setItem("user",Value)
  location.href = './pages/logined.html';
  })


