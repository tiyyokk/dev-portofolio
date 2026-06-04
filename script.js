let tombol = document.getElementById("tombol");
let pesan = document.getElementById("pesan");
let tombol2 = document.getElementById("tombol2");
let pesan2 = document.getElementById("pesan2");
let tombolwarna = document.getElementById("tombolwarna");
let tombolreset = document.getElementById("tombolreset");

tombol.addEventListener("click", function () {
  pesan.textContent = "Halo Satrio, kamu berhasil!";
});

tombol2.addEventListener("click", function () {
  pesan2.textContent = "Selamat datang di portofolio saya!";
});

tombolwarna.addEventListener("click", function () {
  document.body.style.backgroundColor = "steelblue";
});

tombolreset.addEventListener("click", function () {
  document.body.style.backgroundColor = "";
});