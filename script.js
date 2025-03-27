document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded");

    // Dark mode toggle button
    const themeToggle = document.createElement("button");
    themeToggle.id = "theme-toggle";
    themeToggle.innerText = "🌙 Dark Mode";
    document.body.appendChild(themeToggle);

    // Function to toggle dark mode
    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeToggle.innerText = "☀️ Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            themeToggle.innerText = "🌙 Dark Mode";
            localStorage.setItem("theme", "light");
        }
    }

    // Event listener for dark mode toggle
    themeToggle.addEventListener("click", toggleDarkMode);

    // Load saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.innerText = "☀️ Light Mode";
    }

    // Back to Top Button
    const backToTopBtn = document.createElement("button");
    backToTopBtn.id = "backToTop";
    backToTopBtn.innerText = "🔝 Top";
    document.body.appendChild(backToTopBtn);
    
    // Show/hide Back to Top button
    function toggleBackToTopButton() {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    }

    // Scroll to top when button clicked
    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Scroll event listener
    window.addEventListener("scroll", function () {
        toggleBackToTopButton();
    });

    // Ensure Dark Mode Button is Always Visible
    themeToggle.style.position = "fixed";
    themeToggle.style.top = "20px";
    themeToggle.style.right = "20px";
    themeToggle.style.zIndex = "1000";
    
    // Ensure Back to Top Button is Styled Properly
    backToTopBtn.style.position = "fixed";
    backToTopBtn.style.bottom = "20px";
    backToTopBtn.style.right = "20px";
    backToTopBtn.style.zIndex = "1000";
    backToTopBtn.style.display = "none";
});