document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.querySelector(".carousel-container");
    const images = Array.from(document.querySelectorAll(".carousel-container img"));
    const imageWidth = images[0].offsetWidth;
    const totalImages = images.length;
    let position = 0;

    // Clone images for seamless looping
    images.forEach((image) => {
        let clone = image.cloneNode(true);
        carouselContainer.appendChild(clone);
    });

    function moveCarousel() {
        position -= 1; // Adjust speed if necessary
        carouselContainer.style.transform = `translateX(${position}px)`;

        // Reset position when the first set of images has fully moved out of view
        if (Math.abs(position) >= imageWidth * totalImages) {
            position = 0;
            carouselContainer.style.transform = `translateX(${position}px)`;
        }

        requestAnimationFrame(moveCarousel);
    }

    moveCarousel();
});
