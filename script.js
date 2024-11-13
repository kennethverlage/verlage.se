// script.js

document.addEventListener("DOMContentLoaded", function () {
    const languageSwitcher = document.getElementById("language-switcher");
    const languageData = {};

    fetch("content.json")
        .then((response) => response.json())
        .then((data) => {
            Object.assign(languageData, data);
            switchLanguage();
        });

    languageSwitcher.addEventListener("change", switchLanguage);

    function switchLanguage() {
        const selectedLanguage = languageSwitcher.value;
        const content = languageData[selectedLanguage];

        if (content) {
            document.getElementById("hero-title").innerText = content["hero-title"];
            document.getElementById("hero-description").innerText = content["hero-description"];
            document.getElementById("contact-button").innerText = content["contact-button"];
            document.getElementById("about-title").innerText = content["about-title"];
            document.getElementById("about-description").innerText = content["about-description"];
            document.getElementById("services-title").innerText = content["services-title"];
            document.getElementById("contact-title").innerText = content["contact-title"];
            document.getElementById("contact-description").innerText = content["contact-description"];
            document.getElementById("submit-button").innerText = content["submit-button"];
            document.getElementById("footer-text").innerText = content["footer-text"];

            const servicesGrid = document.getElementById("services-grid");
            servicesGrid.innerHTML = "";

            content.services.forEach((service) => {
                const serviceCard = document.createElement("div");
                serviceCard.className = "service-card";
                const serviceTitle = document.createElement("h3");
                serviceTitle.innerText = service.title;
                const serviceDescription = document.createElement("p");
                serviceDescription.innerText = service.description;

                serviceCard.appendChild(serviceTitle);
                serviceCard.appendChild(serviceDescription);
                servicesGrid.appendChild(serviceCard);
            });
        }
    }

    // Existing script functionality can be added below if applicable.
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('open');
    }

    document.querySelector('.hamburger').addEventListener('click', toggleMenu);
});
