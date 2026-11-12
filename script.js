// Footerin vuosiluku
document.getElementById("year").textContent = new Date().getFullYear();

// Estetään haun lähettäminen toistaiseksi.
document.getElementById("search-form").addEventListener("submit", (event) => {
  event.preventDefault();
});
