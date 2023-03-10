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

// CODEC SCROLL
codec = document.getElementById("codec");
codecDisappear = document.getElementById("codecDisappear");
var onCodecScroll = function() {
  var scrollTop = document.body.scrollTop + 2*window.innerHeight/3;
  if (scrollTop > codecDisappear.getBoundingClientRect().top) {
     codec.className = "sticky hidden";
  } else {
     codec.className = "sticky visible";
  }
};
window.addEventListener("scroll", onCodecScroll);

// CASE STUDY SCROLL
finetunedDiagram = document.getElementById("finetunedDiagram");
finetuned1 = document.getElementById("finetuned1");
finetuned2 = document.getElementById("finetuned2");
finetuned3 = document.getElementById("finetuned3");
finetuned4 = document.getElementById("finetuned4");
caseDisappear = document.getElementById("caseDisappear");
var onCaseScroll = function() {
  var newImageUrl = finetuned.src;
  var scrollTop = document.body.scrollTop + window.innerHeight/2;
  if (scrollTop > finetuned1.getBoundingClientRect().top) {
     newImageUrl = "img/Diagram6_v1.png";
     finetunedDiagram.className = "visible";
     caseDisappear.className = "hidden";
  }
  if (scrollTop > finetuned2.getBoundingClientRect().top) {
     newImageUrl = "img/Diagram7_v1.png";
  }
  if (scrollTop > finetuned3.getBoundingClientRect().top) {
     newImageUrl = "img/Diagram8_v1.png";
  }
  if (scrollTop < finetuned1.getBoundingClientRect().top) {
     finetunedDiagram.className = "hidden";
     caseDisappear.className = "visible";
  }
  if (scrollTop > finetuned4.getBoundingClientRect().top) {
     finetunedDiagram.className = "hidden";
  }
  finetunedDiagram.src = newImageUrl;
};
window.addEventListener("scroll", onCaseScroll);
