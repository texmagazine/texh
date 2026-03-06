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

];

// Index pour faire défiler les erreurs dans l'ordre
let errorIndex = 0;

function checkPassword() {
  const goodPassword = "sos";   // ton mot de passe
  const input = document.getElementById("password").value;

  const bubble = document.querySelector(".goat-speech");

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

  /* MOT DE PASSE CORRECT */
  if (input === goodPassword) {

    goatVideo.muted = false;   // 🔊 autorise le son
    goatVideo.volume = 1;      // 🔊 volume normal

    goatVideo.src = successVideo;
    goatVideo.play();

    bubble.textContent = successMessages[Math.floor(Math.random() * successMessages.length)];
    bubble.style.display = "block";

    goatVideo.onended = () => {
      window.location.href = "accueil.html";
    };

    return false;
  }

  /* MOT DE PASSE INCORRECT — vidéos + messages dans l'ordre */
  const msg = errorMessages[errorIndex % errorMessages.length];
  bubble.textContent = msg;
  bubble.style.display = "block";

  goatVideo.muted = false;
  goatVideo.volume = 1;

  const nextErrorVideo = errorVideos[errorIndex % errorVideos.length];
  goatVideo.src = nextErrorVideo;
  goatVideo.play();

  errorIndex++; // passe à la vidéo suivante

  return false;
}

