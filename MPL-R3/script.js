// =========================================
// TRACK DATA
// =========================================

const tracks = {

    "Sports": {
        icon: "🏆",
        description: "Test your knowledge of sports, players, teams and legendary moments."
    },

    "Movies": {
        icon: "🎬",
        description: "Lights, camera, action! Identify movies, characters and famous scenes."
    },

    "Memes": {
        icon: "😄",
        description: "Think you're a meme master? Let's find out!"
    },

    "Tiebreaker": {
        icon: "🏆",
        description: "The final challenge. Only the sharpest minds survive the tiebreaker."
    },

    "Maths": {
        icon: "π",
        description: "Put your mathematical skills and problem-solving abilities to the test."
    },

    "Songs": {
        icon: "♫",
        description: "Recognize songs, artists, lyrics and iconic musical moments."
    },

    "Games": {
        icon: "🎮",
        description: "Level up! Challenge yourself with questions from the world of gaming."
    },

    "Rapid Fire": {
        icon: "⚡",
        description: "No time to think. Answer as many questions as possible!"
    }

};


// =========================================
// ELEMENTS
// =========================================

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");
const popupIcon = document.getElementById("popupIcon");

let selectedTrack = "";


// =========================================
// OPEN TRACK
// =========================================

function openTrack(trackName) {

    selectedTrack = trackName;

    const track = tracks[trackName];

    popupTitle.textContent = trackName.toUpperCase();

    popupText.textContent = track.description;

    popupIcon.textContent = track.icon;

    popup.classList.add("active");
}


// =========================================
// CLOSE POPUP
// =========================================

function closePopup() {

    popup.classList.remove("active");
}


// =========================================
// START TRACK
// =========================================

function startTrack() {

    alert(
        `Starting ${selectedTrack} track!`
    );

    closePopup();
}


// =========================================
// HOME BUTTON
// =========================================

function goHome() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// =========================================
// POWER UP
// =========================================

function powerUp() {

    document.body.classList.toggle("powered");

    const button =
        document.querySelector(".power-btn");

    if (document.body.classList.contains("powered")) {

        button.querySelector("span")
            .textContent = "Powered!";

        document.querySelectorAll(".track-card")
            .forEach(card => {

                card.style.boxShadow =
                    "0 0 30px rgba(180,80,255,.7)";

            });

    } else {

        button.querySelector("span")
            .textContent = "PowerUp";

        document.querySelectorAll(".track-card")
            .forEach(card => {

                card.style.boxShadow = "";

            });
    }
}


// =========================================
// RESET
// =========================================

function resetGame() {

    closePopup();

    document.body.classList.remove("powered");

    document.querySelectorAll(".track-card")
        .forEach(card => {

            card.style.boxShadow = "";

        });

    document.querySelector(".power-btn span")
        .textContent = "PowerUp";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// =========================================
// CLOSE POPUP WHEN CLICKING OUTSIDE
// =========================================

popup.addEventListener("click", function(event) {

    if (event.target === popup) {
        closePopup();
    }

});


// =========================================
// ESC KEY
// =========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closePopup();
    }

});
