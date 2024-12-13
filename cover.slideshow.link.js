// Cover Slideshow
(function initializeCoverSlideshow() {
    let coverCurrentSlide = 0;
    const coverSlides = document.querySelectorAll('.cover-slideshow-image');

    // Add a click event listener to the first cover slide
    if (coverSlides.length > 0) {
        coverSlides[0].addEventListener('click', () => {
            toggleProductVisibility('.product1-section'); // Redirect to "product1"
        });
    }

    setInterval(() => {
        // Remove the active class from the current slide
        coverSlides[coverCurrentSlide].classList.remove('active-cover');
        // Move to the next slide
        coverCurrentSlide = (coverCurrentSlide + 1) % coverSlides.length;
        // Add the active class to the new slide
        coverSlides[coverCurrentSlide].classList.add('active-cover');
    }, 2500);
})();

// Product Slideshows
let currentSlide = 0;
let currentSlides = null;
let slideshowInterval = null;

/**
 * Updates the current slide visibility.
 * @param {number} index - The index of the slide to show.
 */
function showSlide(index) {
    if (!currentSlides) return;

    // Hide the current slide
    currentSlides[currentSlide].classList.remove('active');
    // Calculate and show the next slide
    currentSlide = (index + currentSlides.length) % currentSlides.length;
    currentSlides[currentSlide].classList.add('active');
}

/**
 * Starts the slideshow for a given product section.
 * @param {string} productId - The selector for the product section.
 */
function startSlideshow(productId) {
    // Clear any existing slideshow interval
    if (slideshowInterval) clearInterval(slideshowInterval);

    const productSection = document.querySelector(productId);
    currentSlides = productSection.querySelectorAll('.slideshow-image');
    if (currentSlides.length > 0) {
        // Initialize the slideshow
        currentSlide = 0;
        currentSlides[currentSlide].classList.add('active');
        slideshowInterval = setInterval(() => showSlide(currentSlide + 1), 2500);
    }
}

/**
 * Toggles the visibility of product sections.
 * @param {string} productId - The selector for the product section to show.
 */
function toggleProductVisibility(productId) {
    // Hide all product sections
    document.querySelectorAll(
        '.product1-section, .product2-section, .product3-section, .product4-section, .product5-section, .product6-section, .product7-section'
    ).forEach(section => section.style.display = 'none');

    // Show the selected product section
    const productSection = document.querySelector(productId);
    if (productSection) {
        productSection.style.display = 'block';
        startSlideshow(productId); // Start the slideshow for the selected product
    }
}

// Add event listeners to product buttons
document.querySelectorAll('.product-name').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        toggleProductVisibility(targetId);
    });
});

// Add event listeners to dropdown links
document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href');
        toggleProductVisibility(targetId);
    });
});
