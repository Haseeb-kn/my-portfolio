document.addEventListener("DOMContentLoaded", () => {
  let currentPage = window.location.pathname.split("/").pop();

  // Handle root page ("/") as "index.html"
  if (currentPage === "" || currentPage === "/") {
    currentPage = "index.html";
  }

  const links = document.querySelectorAll("nav ul li a");

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

// Replace "haseeb-site" with a unique name for your site
fetch("https://counterapi.dev/api/v1/team/haseeb/counter/visitor-count/hit")
  .then(res => res.json())
  .then(data => {
    document.getElementById("visitor-count").innerText = data.value;
  })
  .catch(err => {
    console.error("Visitor counter error:", err);
    document.getElementById("visitor-count").innerText = "N/A";
  });
