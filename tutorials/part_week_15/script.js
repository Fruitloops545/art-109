let images = ["Screenshot 2023-10-10 103456.png"]

let currentImageIndex = 0;

function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    document.getElementById("images").src = images[currentImageIndex];
}

