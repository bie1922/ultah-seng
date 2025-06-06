const text = `Selamat ulang tahun, cintaku! 🎉

Di hari spesial ini, aku ingin kamu tahu betapa bersyukurnya aku karena Tuhan menghadirkan kamu dalam hidupku.

Terima kasih sudah menjadi cahaya di hari-hariku, menjadi alasan senyumku, dan pelengkap bahagiaku.

Semoga semua harapanmu tercapai, semua doamu dijawab, dan semua langkahmu selalu dalam keberkahan.

Hari ini, kamu bukan hanya bertambah usia... tapi juga bertambah luar biasa. 💖

Aku akan selalu ada, menemani setiap detik perjalananmu. Aku cinta kamu, lebih dari yang bisa diungkapkan dengan kata.
Happy birthday, my love. 🌹✨`;

let musicPlaying = false;

function typeWriter() {
  const msgEl = document.getElementById("message");
  msgEl.innerHTML = "";
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      msgEl.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, 50);
}

function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (!musicPlaying) {
    music.play();
    musicPlaying = true;
  } else {
    music.pause();
    musicPlaying = false;
  }
}

function fullscreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  }
}

function flipCard(card) {
  card.classList.toggle("flipped");
}

window.onload = () => {
  typeWriter();
  particlesJS("particles-js", {
    particles: {
      number: { value: 30 },
      shape: {
        type: "image",
        image: {
          src: "https://i.imgur.com/MYzUJz3.png",
          width: 20,
          height: 20,
        },
      },
      size: { value: 20 },
      opacity: { value: 0.7 },
      move: { speed: 1 },
    },
  });
};
