window.addEventListener('scroll', onScroll);
title = document.getElementById("title");

console.log("whats up");

function onScroll () {
    var scrollPosition = window.scrollY,
        showHeaderPosition = 680;

    console.log(scrollPosition);
    // Determine if position is at a certain point
    if (scrollPosition >= showHeaderPosition) {
        showHeader();
    } else {
        hideHeader();
    }
}

function showHeader() {
  title.style.display = "block";
}

function hideHeader() {
  title.style.display = "none";
}
