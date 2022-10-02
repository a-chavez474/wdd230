function modified(){
    let d = new Date();
    let year = d.getFullYear();
  document.querySelector('#year').textContent = year;
  document.getElementById('date').innerHTML = "Last Updated: "+(document.lastModified);
}