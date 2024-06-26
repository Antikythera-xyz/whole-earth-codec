// List of image IDs that should change on mobile vs desktop.
const imageIDs = ["1infra", "2info", "3resourcing", "4evolution"];
const mobileSrcs = ["img/1infra_mobile.gif", "img/2info_mobile.gif", "img/3resourcing_mobile.gif", "img/4evolution_mobile.png"];
const desktopSrcs = ["img/1infra.gif", "img/2info.gif", "img/3resourcing.gif", "img/4evolution.png"];

// Depending on the page width, show either dots or text labels to indicate
// diagram highlights.
function checkViewportWidth() {
  setCollapsibleHeight();
  
  const labelElements = document.querySelectorAll('.label');
  if (window.innerWidth >= 1024) {
    // Hide all diagram circles.
    const circleElements = document.querySelectorAll('.mbtn');
    circleElements.forEach(circle => {
      circle.style.display = "none";
    });
    // Show all text labels.
    showIfModalClosed(".label");

    // Change the image sources to desktop versions.
    changeImageSources(imageIDs, desktopSrcs);
  } else {
    // Show all diagram circles.
    showIfModalClosed(".mbtn");
    // Hide all text labels.
    labelElements.forEach(label => {
      label.style.display = "none";
    });

    // Change the image sources to mobile versions.
    changeImageSources(imageIDs, mobileSrcs);
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

// Change the source of images, which takes a list of IDs and a list of sources.
function changeImageSources(ids, sources) {
  for (let i = 0; i < ids.length; i++) {
    let img = document.getElementById(ids[i]);
    img.src = sources[i];
  }
}

// Set height if the collapsible is open.
function setCollapsibleHeight() {
  var coll = document.getElementsByClassName("collapsible");
  // If the collapsible has the class "active" change its height to the height of children.
  for (var i = 0; i < coll.length; i++) {
    if (coll[i].classList.contains("active")) {
      var content = coll[i].nextElementSibling;
      var totalHeight = 0;
      Array.from(content.children).forEach(child => {
        totalHeight += child.scrollHeight;
      });
      totalHeight += 240;
      content.style.maxHeight = totalHeight + "px";
    }
  }
}

// Initial check when the page loads.
checkViewportWidth();

// Listen for the resize event and update the logic.
window.addEventListener("resize", checkViewportWidth);

