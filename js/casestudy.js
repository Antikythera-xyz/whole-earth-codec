
// Close every case study in the document.
function closeAllCS() {
    // Get all elements with the class "modal"
    const modalElements = document.querySelectorAll('.cs');
  
    // Loop through each modal element and set display to "none"
    modalElements.forEach(modal => {
      modal.style.display = "none";
    });
  }
  

var scrollPosition;

document.querySelectorAll(".cbtn").forEach(function(btn) {
    btn.onclick = function() {
        var modal = document.getElementById(btn.getAttribute("data-modal"));
        console.log("opening modal", modal);
        modal.style.display = "block";

        scrollPosition = document.documentElement.scrollTop;
        document.body.classList.add('no-scroll');
        document.body.style.top = -scrollPosition + 'px';
    };
});

document.querySelectorAll(".close").forEach(function(span) {
    span.onclick = function() {
        var modal = span.closest(".cs");
        console.log("closing cs", modal);
        modal.style.display = "none";
        
        document.body.classList.remove('no-scroll');
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, scrollPosition);
    };
});

closeAllCS();