document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        if (targetId.startsWith("#")) {
            event.preventDefault(); // Prevent default anchor behavior
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the section
            }
        }
    });
});
