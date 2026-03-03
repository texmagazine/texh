/* VIDÉOS */
const goatVideo = document.querySelector(".goat-video");

const startVideo = "chevre/start.mp4";
const successVideo = "chevre/success5.mp4";

const errorVideos = [
  "chevre/error1.mp4",
  "chevre/error2.mp4",
  "chevre/error3.mp4",
  "chevre/error4.mp4",
  "chevre/error5.mp4"
];

function checkPassword() {
  const goodPassword = "sos";   // ton mot de passe
  const input = document.getElementById("password").value;

  const bubble = document.querySelector(".goat-speech");

  const successMessages = [
    "Mot de passe correct !",
    "Bravo !",
    "C’est le bon mot de passe !",
    "Bien joué !",
    "Accès autorisé !"
  ];

  const errorMessages = [
    "Mauvais mot de passe !",
    "Beeh, ce n'est pas le bon mot de passe",
    "Non, ce n’est pas ça.",
    "Mauvais mot de passe !",
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


/* MOT DE PASSE INCORRECT */
bubble.textContent = errorMessages[Math.floor(Math.random() * errorMessages.length)];
bubble.style.display = "block";

goatVideo.muted = false;   // 🔊 active le son
goatVideo.volume = 1;      // 🔊 volume normal

const randomErrorVideo = errorVideos[Math.floor(Math.random() * errorVideos.length)];
goatVideo.src = randomErrorVideo;
goatVideo.play();




  return false;
}
