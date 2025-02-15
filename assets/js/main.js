// Toggle Mobile Menu
function toggleMobileMenu() {
    const menu = document.querySelector('.mobile-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Initialize AOS (After including the script in HTML)
AOS.init();

// Scroll event to enlarge image when scrolling down
window.addEventListener('scroll', function() {
    let imageContainer = document.getElementById('image-container');
    if (imageContainer) {
        let scrollPosition = window.scrollY;
        if (scrollPosition > 200) {
            imageContainer.classList.add('enlarge');
        } else {
            imageContainer.classList.remove('enlarge');
        }
    }
});

// Progress bar update on horizontal scroll
const cardContainer = document.getElementById("cardContainer");
const progressBar = document.getElementById("progressBar");

if (cardContainer && progressBar) {
    cardContainer.addEventListener("scroll", () => {
        const scrollWidth = cardContainer.scrollWidth - cardContainer.clientWidth;
        const scrollLeft = cardContainer.scrollLeft;
        const progress = (scrollLeft / scrollWidth) * 100;
        progressBar.style.width = `${progress}%`;
    });
}

// Image gallery scroll progress
const imageGallery = document.getElementById('imageGallery');
const progressBarGallery = document.querySelector('.progress-bar');

if (imageGallery && progressBarGallery) {
    imageGallery.addEventListener('scroll', () => {
        let scrollProgress = (imageGallery.scrollLeft / (imageGallery.scrollWidth - imageGallery.clientWidth)) * 100;
        progressBarGallery.style.width = `${scrollProgress}%`;
    });
}
