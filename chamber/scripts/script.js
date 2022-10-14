window.onload = function() {
  let now = new Date();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let year = now.getFullYear();
  let dateTime = month + "/" + day + "/" + year + " " + now.toLocaleTimeString();
  document.getElementById("time").textContent = dateTime;
}
function toggleMenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}