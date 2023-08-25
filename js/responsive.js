// Depending on the page width, show either dots or text labels to indicate
// diagram highlights.
function checkViewportWidth() {
  const labelElements = document.querySelectorAll('.label');
  if (window.innerWidth >= 1024) {
    // Hide all diagram circles.
    const circleElements = document.querySelectorAll('.mbtn');
    circleElements.forEach(circle => {
      circle.style.display = "none";
    });
    // Show all text labels.
    showIfModalClosed(".label");
  } else {
    // Show all diagram circles.
    showIfModalClosed(".mbtn");
    // Hide all text labels.
    labelElements.forEach(label => {
      label.style.display = "none";
    });
  }
}

// Showing all highlights requires extra logic as they shouldn't be shown
// if the modal is still open.
function showIfModalClosed(className) {
  const elems = document.querySelectorAll(".highlight");
  elems.forEach(btn => {
    let modal = btn.nextElementSibling;
    let circle = btn.querySelector(className);

    if (window.getComputedStyle(modal).display != "block") {
      circle.style.display = "block";
    }
  });
}

// Initial check when the page loads.
checkViewportWidth();

// Listen for the resize event and update the logic.
window.addEventListener("resize", checkViewportWidth);
