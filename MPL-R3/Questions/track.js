/* =========================================================
   COMMON TRACK PAGE JAVASCRIPT

   Works for every track page.

   HTML controls the actual:
   - Track name
   - Question
   - Points
   - Answer
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const questionCards =
    document.querySelectorAll(".question-card");

const popup =
    document.getElementById("questionPopup");

const popupTrack =
    document.getElementById("popupTrack");

const popupQuestion =
    document.getElementById("popupQuestion");

const popupPoints =
    document.getElementById("popupPoints");

const popupAnswer =
    document.getElementById("popupAnswer");

const closePopup =
    document.getElementById("closePopup");

const answerButton =
    document.getElementById("answerButton");

const homeButton =
    document.getElementById("homeButton");

const powerButton =
    document.getElementById("powerButton");

const resetButton =
    document.getElementById("resetButton");


/* =========================================================
   CURRENT QUESTION
========================================================= */

let currentCard = null;


/* =========================================================
   OPEN QUESTION
========================================================= */

questionCards.forEach(card => {

    card.addEventListener("click", () => {

        currentCard = card;


        /* -----------------------------------------
           Read information directly from HTML
        ----------------------------------------- */

        const track =
            card.dataset.track;

        const question =
            card.dataset.question;

        const points =
            card.dataset.points;

        const answer =
            card.dataset.answer;


        /* -----------------------------------------
           Put information into popup
        ----------------------------------------- */

        popupTrack.textContent =
            track;

        popupQuestion.textContent =
            question;

        popupPoints.textContent =
            points;

        popupAnswer.textContent =
            answer;


        /* -----------------------------------------
           Hide previous answer
        ----------------------------------------- */

        popupAnswer.classList.remove("show");

        answerButton.textContent =
            "SHOW ANSWER";


        /* -----------------------------------------
           Open popup immediately
        ----------------------------------------- */

        popup.classList.add("active");

    });

});


/* =========================================================
   CLOSE POPUP
========================================================= */

function closeQuestion() {

    popup.classList.remove("active");

    popupAnswer.classList.remove("show");

}


closePopup.addEventListener(
    "click",
    closeQuestion
);


/* =========================================================
   CLICK OUTSIDE POPUP
========================================================= */

popup.addEventListener("click", event => {

    if (event.target === popup) {

        closeQuestion();

    }

});


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeQuestion();

    }

});


/* =========================================================
   SHOW / HIDE ANSWER
========================================================= */

answerButton.addEventListener("click", () => {

    const visible =
        popupAnswer.classList.contains("show");


    if (visible) {

        popupAnswer.classList.remove("show");

        answerButton.textContent =
            "SHOW ANSWER";

    } else {

        popupAnswer.classList.add("show");

        answerButton.textContent =
            "HIDE ANSWER";

    }

});


/* =========================================================
   HOME BUTTON
========================================================= */

homeButton.addEventListener("click", () => {

    /*
       Change this to your actual homepage
       if its filename is different.
    */

    window.location.href =
        "index.html";

});


/* =========================================================
   POWER UP
========================================================= */

let powerEnabled = false;


powerButton.addEventListener("click", () => {

    powerEnabled = !powerEnabled;


    document.body.classList.toggle(
        "power-mode",
        powerEnabled
    );


    if (powerEnabled) {

        questionCards.forEach(card => {

            card.style.boxShadow = `
                inset 0 2px 5px white,
                0 0 25px rgba(180, 90, 20, 0.65)
            `;

        });

    } else {

        questionCards.forEach(card => {

            card.style.boxShadow = "";

        });

    }

});


/* =========================================================
   RESET
========================================================= */

resetButton.addEventListener("click", () => {

    powerEnabled = false;


    document.body.classList.remove(
        "power-mode"
    );


    questionCards.forEach(card => {

        card.classList.remove("used");

        card.style.boxShadow = "";

    });


    closeQuestion();

});