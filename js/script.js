// Toggle main menu
var menuBtn = document.getElementById('menuBtn');
var topHeader = document.getElementById('topHeader');

menuBtn.addEventListener('click', function(){
  if(topHeader.classList.contains('active')) {
    topHeader.classList.remove('active');
  } else {
    topHeader.classList.add('active');
  }
});

// Toggle toTop button
var toTopBtn = document.getElementById('toTopBtn');

window.addEventListener('scroll', function() {
  // console.log(window.scrollY)
  if(window.scrollY > 100) {
      toTopBtn.style.display = 'flex';
  } else {
    toTopBtn.style.display = 'none';
  }
});
