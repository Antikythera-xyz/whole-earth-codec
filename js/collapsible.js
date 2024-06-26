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
        // Ensure the video is ready to play
        if (video.readyState >= 2) {
            try {
                var canvas = document.createElement('canvas');
                canvas.width = 1;  // We only need the first pixel
                canvas.height = 1;
                var ctx = canvas.getContext('2d');

                // Draw the first frame of the video onto the canvas
                ctx.drawImage(video, 0, 0, 1, 1);
                var pixelData = ctx.getImageData(0, 0, 1, 1).data;

                // Convert pixel data to an RGB CSS color
                var color = 'rgb(' + pixelData[0] + ',' + pixelData[1] + ',' + pixelData[2] + ')';
                console.log(color);
                div.style.backgroundColor = color; // Set the background color of the div
                button.style.backgroundColor = color; // Set the background color of the button
            } catch (e) {
                console.error("Error extracting color: ", e);
            }
        }
    });
});