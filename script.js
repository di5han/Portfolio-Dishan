const menuBtn = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuBtn.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
});


const form = document.getElementById("contact-form");
const messageOut = document.getElementById("form-message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    messageOut.textContent = "Thank you! I will reply soon.";
    messageOut.style.color = "green";
    
    form.reset();
});