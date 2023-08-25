// HEADER SCROLL
let lastScrollTop = 0;
const banner = document.getElementById("banner");
let timeout;

// The header banner appears when scrolling up, for half a second before fading.
// It won't appear if we can see the splash landing logo.
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
// After scrolling past a certain point, the background earth will disappear.
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
