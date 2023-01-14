// change color when scroll down
const headNav = document.getElementById("head-nav"),
      homeLogo = document.getElementById("home-logo"),
      itemNav = document.getElementById("item-nav"),
      ulNav = document.getElementById("ul-nav"),
      hambar = document.querySelector('.fa-bars'),
      xmark = document.querySelector('.fa-xmark'),
      hamMenu = document.getElementById("ham-menu");

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {

      headNav.style.backgroundColor = '#ff5333';
      itemNav.style.backgroundColor = '#ff5333';
      headNav.style.color = '#fff';
      hamMenu.style.color = '#fff';
    } else if (window.scrollY === 0) {

      headNav.style.backgroundColor = '#fff';
      itemNav.style.backgroundColor = '#fff';
      headNav.style.color = '#000';
      hamMenu.style.color = '#000';
    }
  });

// ham menu-------------------------------------------------------------
let barToggle = 0;

//toggle
hamMenu.addEventListener('click', (event) => {
  
  if(barToggle === 0){
    activeHam();

  }else if(barToggle === 1){
    inactiveHam();

  }
});


function activeHam() {
  hambar.style.opacity = "0";
  xmark.style.opacity = "1";
  homeLogo.style.opacity = "0";
  homeLogo.style.pointerEvents = "none";

  itemNav.style.opacity = "1";
  itemNav.style.pointerEvents = "auto";
  itemNav.style.height = "20rem";

  itemNav.style.display = "flex";
  ulNav.style.flexDirection = "column";
  itemNav.style.justifyContent = "center";
  itemNav.style.alignItems = "center";
  ulNav.style.gap = "2.4rem";
  ulNav.style.fontSize = "1.5rem";

  barToggle = 1;
}

function inactiveHam() {
  hambar.style.opacity = "1";
  xmark.style.opacity = "0";
  homeLogo.style.opacity = "1";
  homeLogo.style.pointerEvents = "auto";

  itemNav.style.opacity = "0";
  itemNav.style.pointerEvents = "none";
  itemNav.style.height = "100%";

  itemNav.style.display = "block";
  ulNav.style.flexDirection = "row";
  ulNav.style.justifyContent = "end";
  ulNav.style.gap = "0";
  ulNav.style.fontSize = "1rem";


  barToggle = 0;
}
window.inactiveHam = inactiveHam;

//navbar media query
document.onreadystatechange = function() {
  let lastScrollPosition = 0;

  const mql = window.matchMedia('(min-width: 762px)');

  function handleMediaQueryChange(event) {
    if (event.matches) {
      inactiveHam();
      itemNav.style.opacity = "1";
      itemNav.style.pointerEvents = "auto";

    } else {
      itemNav.style.opacity = "0";

    }
  }

  mql.addListener(handleMediaQueryChange);
  handleMediaQueryChange(mql);
};

//click out of area of ham-menu to close menu
document.addEventListener('click', function(event) {
  // Check if the clicked element is hamMenu or a descendant of navButtons
  if (!event.target.closest('.item-nav') && !event.target.closest('.ham-menu') && barToggle===1) {
    inactiveHam();
  }});