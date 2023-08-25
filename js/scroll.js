// HEADER SCROLL
let lastScrollTop = 0;
const banner = document.getElementById("banner");
let timeout;

window.addEventListener("scroll", function() {
  clearTimeout(timeout); // Clear previous timeout
  var scrollPosition = window.scrollY;
  var showHeaderPosition = 560;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop < lastScrollTop && scrollPosition > showHeaderPosition) {
    banner.className = "visible";
  } else {
    banner.className = "hidden";
  }
  lastScrollTop = scrollTop;

  // Set a timeout to hide the element after a delay
    timeout = setTimeout(() => {
      banner.className = "hidden";
    }, 500); // Adjust the delay (in milliseconds) as needed
});

// DISSOLVE EARTH SCROLL
window.addEventListener('scroll', onDissolveClipScroll);
dissolveClip = document.getElementById("dissolveClip");
pointsDisappear = document.getElementById("pointsDisappear");

function onDissolveClipScroll () {
    var scrollTop = document.body.scrollTop;

    // Determine if position is at a certain point
    if (scrollTop > pointsDisappear.getBoundingClientRect().bottom - window.innerHeight/2) {
        dissolveClip.className = "hidden";
    } else {
        dissolveClip.className = "visible";
    }
}
