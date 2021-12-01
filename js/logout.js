let logOutBtn = document.getElementById("logOut");

logOutBtn.addEventListener("click",()=>{
  window.localStorage.clear();
  location.href='./../index.html'

})