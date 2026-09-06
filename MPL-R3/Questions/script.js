/* =========================================
   ELEMENTS
========================================= */

const questionCards = document.querySelectorAll(".question-card");

const popup = document.getElementById("questionPopup");

const popupQuestion = document.getElementById("popupQuestion");

const popupPoints = document.getElementById("popupPoints");

const closePopup = document.getElementById("closePopup");


/* =========================================
   QUESTION DATA
========================================= */

const questions = {
    1: {
        question: "What is the most popular sport in the world?",
        points: 100
    },

    2: {
        question: "Which country has won the most FIFA World Cups?",
        points: 200
    },

    3: {
        question: "Who has won the most Olympic gold medals?",
        points: 300
    },

    4: {
        question: "Which team has won the most IPL titles?",
        points: 400
    },

    5: {
        question: "Who holds the 100m world record?",
        points: 500
    },

    6: {
        question: "Which country hosted the 2024 Summer Olympics?",
        points: 600
    }
};


/* =========================================
   CLICK QUESTION CARD
========================================= */

questionCards.forEach(card => {

    card.addEventListener("click", () => {

        // Get question number
        const number = card.dataset.question;

        // Get corresponding question
        const selectedQuestion = questions[number];

        // Put question inside popup
        popupQuestion.textContent =
            selectedQuestion.question;

        // Put points inside popup
        popupPoints.textContent =
            selectedQuestion.points;

        // Immediately show popup
        popup.classList.add("active");

    });

});


/* =========================================
   CLOSE POPUP
========================================= */

closePopup.addEventListener("click", () => {

    popup.classList.remove("active");

});


/* =========================================
   CLICK OUTSIDE POPUP TO CLOSE
========================================= */

popup.addEventListener("click", (event) => {

    if (event.target === popup) {

        popup.classList.remove("active");

    }

});


/* =========================================
   ESC KEY TO CLOSE
========================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        popup.classList.remove("active");

    }

});