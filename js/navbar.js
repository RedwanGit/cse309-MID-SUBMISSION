function loadNavbar() {
    fetch('/navbar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('navbar-placeholder').innerHTML = html;
            // Initialize Feather icons after navbar is loaded
            feather.replace();
            // Highlight active page after navbar is loaded
            highlightActivePage();
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });
}

function highlightActivePage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('[data-page]');

    navLinks.forEach(link => {
        const page = link.dataset.page;
        if (currentPath === '/' && page === 'home') {
            link.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        } else if (currentPath.includes(page) && page !== 'home') {
            link.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
    initializeDropdown();
});
