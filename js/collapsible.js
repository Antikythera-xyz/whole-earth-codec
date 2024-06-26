var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        var icon = this.querySelector(".cIcon");
        if (content.style.maxHeight){
            content.style.maxHeight = null;
            icon.textContent = "+";
        } else {
            let totalHeight = 0;
            Array.from(content.children).forEach(child => {
                totalHeight += child.scrollHeight;
            });
            totalHeight += 240;
            content.style.maxHeight = totalHeight + "px";
            icon.textContent = "\u2013";
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById('blueVideo');
    var div = document.getElementById('phase3');
    var button = document.getElementById('bPhase3');

    video.addEventListener('loadeddata', function() {
        if (video.readyState >= 2) { // Ensures video is ready to be processed
            try {
                var canvas = document.createElement('canvas');
                var context = canvas.getContext('2d');
                canvas.width = video.videoWidth; // Set canvas size equal to video size
                canvas.height = video.videoHeight;
                context.drawImage(video, 0, 0, canvas.width, canvas.height); // Draw the video frame to canvas

                var pixel = context.getImageData(10, 10, 1, 1).data; // Get the color of the pixel at (10, 10)
                var color = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`; // Convert pixel data to RGB
                button.style.backgroundColor = color; // Set the background color of the button
                div.style.backgroundColor = color; // Set the background color of the div
            } catch (e) {
                console.error("Error extracting color: ", e);
            }
        }
    });
});