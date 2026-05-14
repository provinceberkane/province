// Ouverture et fermeture du menu sur mobile
const menuButton = document.getElementById("menuBtn");
const navigationMenu = document.getElementById("navMenu");

if (menuButton && navigationMenu) {
    menuButton.addEventListener("click", function () {
        navigationMenu.classList.toggle("open");
    });
}

// Système FAQ accordéon
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
        const answer = question.nextElementSibling;
        answer.classList.toggle("show");
    });
});

// Animation légère au chargement des cartes
const cards = document.querySelectorAll(".card, .info-card, .platform-card");

cards.forEach(function (card, index) {
    card.style.opacity = "0";
    card.style.transform = "translateY(12px)";

    setTimeout(function () {
        card.style.transition = "0.4s";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, index * 100);
});
