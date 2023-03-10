// HEADER SCROLL
window.addEventListener('scroll', onHeaderScroll);
title = document.getElementById("title");

function onHeaderScroll () {
    var scrollPosition = window.scrollY,
        showHeaderPosition = 680;
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


// POINT CLOUD SCROLL
window.addEventListener('scroll', onPointScroll);
cloud = document.getElementById("points");
pointsDisappear = document.getElementById("pointsDisappear");

function onPointScroll () {
    var scrollTop = document.body.scrollTop;

    // Determine if position is at a certain point
    if (scrollTop > pointsDisappear.getBoundingClientRect().top - 3*window.innerHeight/4) {
        document.getElementById('titleSection').className = "hidden";
    } else {
        document.getElementById('titleSection').className = "visible";
    }
}


// DATA DIAGRAM SCROLL
dataDiagram = document.getElementById("dataDiagram");
dataDisappear = document.getElementById("dataDisappear");
data1 = document.getElementById("data1");
data2 = document.getElementById("data2");
var onDataScroll = function() {
  var newImageUrl = dataDiagram.src;
  var scrollTop = document.body.scrollTop + window.innerHeight/2;
  if (scrollTop > pointsDisappear.getBoundingClientRect().top) {
     newImageUrl = "img/Diagram1_v1.png";
     dataDiagram.className = "visible";
  }
  if (scrollTop > data1.getBoundingClientRect().top) {
     newImageUrl = "img/Diagram2_v1.png";
  }
  if (scrollTop > data2.getBoundingClientRect().top) {
     newImageUrl = "img/Diagram3_v1.png";
  }
  if (scrollTop > dataDisappear.getBoundingClientRect().top || scrollTop < pointsDisappear.getBoundingClientRect().top) {
     dataDiagram.className = "hidden";
  }
  dataDiagram.src = newImageUrl;
};
window.addEventListener("scroll", onDataScroll);
