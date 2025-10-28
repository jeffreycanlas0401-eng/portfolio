document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    if (menuIcon) {
        menuIcon.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Close menu when a link is clicked (only for mobile view)
    navItems.forEach(item => {
        item.addEventListener("click", function () {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove("active");
            }
        });
    });

    // Ensure menu stays open on larger screens
    window.addEventListener("resize", function () {
        if (window.innerWidth >= 1024) {
            navLinks.classList.remove("active");
        }
    });
});
