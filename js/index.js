// Your code goes here

let welcome = document.querySelector('.intro h2');
welcome.addEventListener('mouseover', function(event) {
  event.target.style.color = '#feb74c';
});

// document.addEventListener('keydown', function(event) {
//   console.log("I'm not sure where this would be practical, but we movin!");
// });

// document.addEventListener('wheel', function(event) {
//   console.log("M O V I N F A S T");
// });

let logoName = document.querySelector('.logo-heading');
window.addEventListener('load', function(event) {
  logoName.style.color = '#feb74c';
});

// let newItem = '';
// newItem.addEventListener('focus', function(event) {
//   event.target.style.background = 'pink';
// });

window.addEventListener('resize', function(event) {
  logoName.style.fontSize = '50px';
});

// document.addEventListener('scroll', function(event) {
//   console.log('M O V I N F A S T A G A I N');
// });

// document.querySelector('.footer p').addEventListener('select', function(event) {
//   console.log('what are you doing in the footer?');
// });

document.querySelectorAll('nav a')[0].addEventListener('dblclick', function (e) {
  console.log('only need to click once homie');
});