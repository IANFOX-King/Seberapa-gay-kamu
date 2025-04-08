function cekGay() {
  const name = document.getElementById("nameInput").value.trim();
  const hasil = document.getElementById("hasil");
  const gambar = document.getElementById("gambar");

  if (name === "") {
    hasil.innerText = "Masukkan nama dulu dong~";
    gambar.style.display = "none";
    return;
  }

  const persen = Math.floor(Math.random() * 101); // 0 - 100
  let komentar = "";

  if (persen < 20) {
    komentar = "Cowok banget! 😎";
  } else if (persen < 50) {
    komentar = "Masih normal kok~";
  } else if (persen < 80) {
    komentar = "Hmmm... mencurigakan!";
  } else {
    komentar = "Waduh, pelangi detected~!";
  }

  hasil.innerText = `${name}, kamu ${persen}% gay! ${komentar}`;
  gambar.src = "https://media.tenor.com/o3z0euFLoVkAAAAC/chuunibyou-anime.gif";
  gambar.style.display = "block";
}
