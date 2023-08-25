// Modal magic.

// Dictionary containing locations where the modal should appear
// when the screen width is >1024px.
// This is required for best positions as multiple modals can be open at once.
const modalLoc = {
  sensing: ["9vw", "-5vw"],
  fm: ["46vw", "-5vw"],
  sensors: ["8vw", "61vw"],
  federation: ["23vw", "55vw"],
  anchoring: ["29vw", "11vw"],
  encoders: ["43vw", "50vw"],
  latent: ["62vw", "28vw"],
  finetuned: ["88vw", "61vw"],
  decoders: ["79vw", "5vw"],
};

// Close every modal in the document.
function closeAllModals() {
  // Get all elements with the class "modal"
  const modalElements = document.querySelectorAll('.modal');

  // Loop through each modal element and set display to "none"
  modalElements.forEach(modal => {
    modal.style.display = "none";
  });
}

// Calculate the offset for positioning the modal, taking into account
// the width of the screen.
// Takes 'btn' - the positioned element of the diagram highlight.
// Returns '[top, left]' - array of two strings that gives position of modal.
function getModalLoc(btn) {
  let computedStyle = window.getComputedStyle(btn);
  var top = computedStyle.getPropertyValue('top');
  var left = 0;

  if (window.innerWidth < 720) {
    // On the smallest screens, only adjust the Y position of the modal
    // to equal the highlight location.
    return [top, "0"];
  }
  if (window.innerWidth < 1024) {
    // On medium screens, adjust the Y position of the modal to match
    // the highlight, and set the X to match the highlight while ensuring it
    // doesn't get cut off.
    return [top, calculateModalLeft(computedStyle.getPropertyValue('left'))];
  }
  // On the largest screens, we just use a dictionary containing
  // hardcoded positions.
  return modalLoc[btn.id];
}

// Returns X position of the modal that roughly matches the highlight,
// without getting cut off the page.
function calculateModalLeft(left) {
  var intLeft = parseInt(left, 10);

  intLeft -= 100;
  if (intLeft < 0) {
    return "5vw";
  }
  if (intLeft > 376) {
    return "48vw";
  }
  return intLeft + "px"
}

// Check if there is more than one open modal in the entire document.
function moreThanOneOpenModal() {
  const elems = document.querySelectorAll(".modal");
  let i = 0;
  for (let j = 0; j < elems.length; j++) {
    if (window.getComputedStyle(elems[j]).display === "block") {
      i++;
      if (i > 1) {
        return true;
      }
    }
  }
  return false;
}

// Adjust modal positions according to the width of the screen.
function checkViewportWidthModal() {
  // In case there are multiple modals open, but the screen is resized
  // to a smaller width that only allows one open modal, close all modals.
  if (window.innerWidth < 1024 && moreThanOneOpenModal()) {
    closeAllModals();
  }

  const highlightElements = document.querySelectorAll('.highlight');
  highlightElements.forEach(btn => {
    let modal = btn.nextElementSibling;
    [modal.style.top, modal.style.left] = getModalLoc(btn);
  });
}

// Initial check when the page loads.
checkViewportWidthModal();

// Listen for the resize event and update the logic.
window.addEventListener("resize", checkViewportWidthModal);

// Main logic for opening and closing modals.
const highlightElements = document.querySelectorAll('.highlight');
highlightElements.forEach(btn => {
  // The modal itself. In the DOM it always follows
  // the positioned highlight button.
  let modal = btn.nextElementSibling;

  // The close button on the modal.
  let close = modal.querySelectorAll(".close")[0];

  // The highlight indicators vary depending on the screen width:
  // circles on smaller screens and text labels on wider ones.
  let circle = btn.querySelector(".mbtn");
  let label = btn.querySelector(".label");

  // When the user clicks on the button, open the modal.
  btn.onclick = function() {
    // If the screen is small, only one modal is permitted to be opened at once.
    if (window.innerWidth < 1024) {
      closeAllModals();
    }

    // Open the modal and hide the button.
    modal.style.display = "block";
    circle.style.display = "none";
    label.style.display = "none";
  }

  // When the user clicks on (x), close the modal.
  close.onclick = function() {
    modal.style.display = "none";

    // Also show the button again.
    if (window.innerWidth < 1024) {
      circle.style.display = "block";
    } else {
      label.style.display = "block";
    }
  }
});
