const searchBox = document.getElementById('searchBox'),
  googleIcon = document.getElementById('googleIcon');

// googleIcon.onmouseover  = function () {
//   searchBox.classList.toggle('active');
// };
function  reload(){
  window.onload = function() {

    searchBox.classList.toggle('active');

  }
}
setInterval(reload, 200);