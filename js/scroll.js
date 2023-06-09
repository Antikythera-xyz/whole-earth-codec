// HEADER SCROLL
window.addEventListener('scroll', onHeaderScroll);
title = document.getElementById("bannerTitle");

function onHeaderScroll () {
    var scrollPosition = window.scrollY,
        showHeaderPosition = 600;
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


// DISSOLVE EARTH SCROLL
window.addEventListener('scroll', onPointScroll);
cloud = document.getElementById("points");
pointsDisappear = document.getElementById("pointsDisappear");

function onPointScroll () {
    var scrollTop = document.body.scrollTop;

    // Determine if position is at a certain point
    if (scrollTop > pointsDisappear.getBoundingClientRect().bottom - window.innerHeight/2) {
        cloud.className = "hidden";
    } else {
        cloud.className = "visible";
    }
}


// CHANGE TEXT ON HOVER
