/* =====================================================
   GET ALL CARDS
===================================================== */

const cards = document.querySelectorAll(".question-card");


/* =====================================================
   FLIP CARD
===================================================== */

cards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("flipped");

    });

});



/* =====================================================
   RESET BUTTON
===================================================== */

const resetButton =
    document.getElementById("resetButton");


resetButton.addEventListener("click", () => {

    cards.forEach(card => {

        card.classList.remove("flipped");

    });

});