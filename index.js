/* VIDÉOS */
const goatVideo = document.querySelector(".goat-video");

const startVideo = "chevre/start.mp4";
const successVideo = "chevre/success.mp4";

const errorVideos = [
  "chevre/error01.mp4",
  "chevre/error02.mp4",
  "chevre/error03.mp4",
  "chevre/error04.mp4",
  "chevre/error05.mp4",
  "chevre/error06.mp4"
];

let errorIndex = 0;

function checkPassword() {
  const goodPassword = "anniversaire";
  const input = document.getElementById("password").value;

  const bubble = document.querySelector(".goat-speech");
  const bubbleInner = document.querySelector(".bubble-inner");

  const successMessages = [
    "Mot de passe correct !",
    "Bravo !",
    "C’est le bon mot de passe !",
    "Bien joué !",
    "Mot de passe correct !",
    "Accès autorisé !"
  ];

  const errorMessages = [
    "Mauvais mot de passe !",
    "Beeh, ce n'est pas le bon mot de passe",
    "Non, ce n’est pas ça.",
    "Mauvais mot de passe !",
    "Non, ce n’est pas ça.",
    "Essaie encore !"
  ];

  /* RESET ANIMATIONS */
  bubble.classList.remove("show", "deflate-asym");
  bubbleInner.classList.remove("shake");

  /* MOT DE PASSE CORRECT */
  if (input === goodPassword) {

    goatVideo.src = successVideo;
    goatVideo.onloadeddata = () => goatVideo.play();

    bubbleInner.textContent = successMessages[Math.floor(Math.random() * successMessages.length)];

    requestAnimationFrame(() => {
      bubble.classList.add("show", "deflate-asym");
    });

    goatVideo.onended = () => {
      window.location.href = "accueil.html";
    };

    return false;
  }

/* MOT DE PASSE INCORRECT */
const msg = errorMessages[errorIndex % errorMessages.length];
bubbleInner.textContent = msg;

const nextErrorVideo = errorVideos[errorIndex % errorVideos.length];
goatVideo.src = nextErrorVideo;
goatVideo.onloadeddata = () => goatVideo.play();

/* 🔊 GESTION DES SONS */
const goatLoop = document.getElementById("goat-loop");
const errorSound = document.getElementById("error-sound");

// On coupe le bêlement pendant l’erreur
goatLoop.pause();

// On joue le son d’erreur
errorSound.currentTime = 0;
errorSound.play();

// Quand le son d’erreur est terminé → la chèvre reprend son bêlement
errorSound.onended = () => {
  goatLoop.currentTime = 0;
  goatLoop.play();
};

requestAnimationFrame(() => {
  bubble.classList.add("show", "deflate-asym");
  bubbleInner.classList.add("shake");
});

errorIndex++;



  return false;
}

