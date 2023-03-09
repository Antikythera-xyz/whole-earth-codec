// HEADER SCROLL
window.addEventListener('scroll', onHeaderScroll);
title = document.getElementById("title");

console.log("whats up");

function onHeaderScroll () {
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

// DATA DIAGRAM SCROLL
dataDiagram = document.getElementById("dataDiagram");
data1 = document.getElementById("data1");
data2 = document.getElementById("data2");
var onScrollHandler = function() {
  var newImageUrl = dataDiagram.src;
  var scrollTop = document.body.scrollTop + window.innerHeight/2;
  console.log(scrollTop);
  if (scrollTop < data1.getBoundingClientRect().top) {
     newImageUrl = "img/Diagram1_v1.png";
  }
  if (scrollTop > data1.getBoundingClientRect().top) {
     newImageUrl = "img/Diagram2_v1.png";
  }
  if (scrollTop > data2.getBoundingClientRect().top) {
     newImageUrl = "img/Diagram3_v1.png";
  }
  dataDiagram.src = newImageUrl;
};
window.addEventListener("scroll", onScrollHandler);
