window.onload = function() {
  let now = new Date();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let year = now.getFullYear();
  let dateTime = month + "/" + day + "/" + year + " " + now.toLocaleTimeString();
  document.getElementById("time").textContent = dateTime;
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("clik", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
))
