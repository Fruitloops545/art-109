let images = ["images/images1.jpeg", "images/images2.jpeg", "images/images3.jpeg"];

let currentImageIndex = 0;

function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    document.getElementById("images").src = images[currentImageIndex];
}

