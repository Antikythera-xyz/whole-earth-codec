// Modal magic.

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

function closeAllModals() {
  // Get all elements with the class "modal"
  const modalElements = document.querySelectorAll('.modal');

  // Loop through each modal element and set display to "none"
  modalElements.forEach(modal => {
    modal.style.display = "none";
  });

  if (window.innerWidth < 1024) {
    const circleElements = document.querySelectorAll('.mbtn');
    circleElements.forEach(circle => {
      circle.style.display = "block";
    });
  }
}

function getModalLoc(btn) {
  let computedStyle = window.getComputedStyle(btn);
  var top = computedStyle.getPropertyValue('top');
  var left = 0;

  if (window.innerWidth < 720) {
    return [top, "0"];
  }
  if (window.innerWidth < 1024) {
    return [top, calculateModalLeft(computedStyle.getPropertyValue('left'))];
  }
  return modalLoc[btn.id];
}

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

function checkViewportWidthModal() {
  if (window.innerWidth < 1024 && moreThanOneOpenModal()) {
    closeAllModals();
  }

  const highlightElements = document.querySelectorAll('.highlight');
  highlightElements.forEach(btn => {
    let modal = btn.nextElementSibling;
    // When the user clicks on the button, open the modal
    [modal.style.top, modal.style.left] = getModalLoc(btn);
  });
}

// Initial check when the page loads
checkViewportWidthModal();

// Listen for the resize event and update the logic
window.addEventListener("resize", checkViewportWidthModal);


const highlightElements = document.querySelectorAll('.highlight');
highlightElements.forEach(btn => {
  let modal = btn.nextElementSibling;
  let close = modal.querySelectorAll(".close")[0];
  let circle = btn.querySelector(".mbtn");
  let label = btn.querySelector(".label");

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    if (window.innerWidth < 1024) {
      closeAllModals();
    }

    modal.style.display = "block";
    circle.style.display = "none";
    label.style.display = "none";
  }

  // When the user clicks on (x), close the modal
  close.onclick = function() {
    modal.style.display = "none";
    if (window.innerWidth < 1024) {
      circle.style.display = "block";
    } else {
      label.style.display = "block";
    }
  }
});
