// script.js - zajednički za sve stranice

document.addEventListener("DOMContentLoaded", function () {
    // 1) PASSWORD STRENGTH CHECKER
    const passwordInput = document.getElementById("password");
    const powerPoint = document.getElementById("power-point");

    if (passwordInput && powerPoint) {
        passwordInput.addEventListener("input", function () {
            let value = passwordInput.value;
            let score = 0;

            // Procjena složenosti (4 testa)
            if (value.length >= 8) {
                const tests = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];
                tests.forEach(regex => {
                    if (regex.test(value)) score++;
                });
            }

            const widthLevels = ["1%", "25%", "50%", "75%", "100%"];
            const colors = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];

            powerPoint.style.width = widthLevels[score];
            powerPoint.style.backgroundColor = colors[score];
        });
    }

    // 2) VALIDACIJA KONTAKT FORME
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            const name = contactForm.querySelector("#name");
            const email = contactForm.querySelector("#email");
            const message = contactForm.querySelector("#message");

            let valid = true;
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!name.value.trim()) {
                alert("Molimo unesite svoje ime i prezime.");
                valid = false;
            } else if (!emailRegex.test(email.value)) {
                alert("Molimo unesite ispravan email.");
                valid = false;
            } else if (!message.value.trim()) {
                alert("Molimo unesite poruku.");
                valid = false;
            }

            if (!valid) e.preventDefault();
        });
    }

    
    const offcanvasElement = document.getElementById("mainMenu");
    if (offcanvasElement) {
        const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);
        offcanvasElement.querySelectorAll("a.nav-link").forEach(link => {
            link.addEventListener("click", () => bsOffcanvas.hide());
        });
    }
});
