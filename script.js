
window.addEventListener("load", () => {
  const today = new Date().toISOString().split("T")[0];
  const dateField = document.getElementById("departure");
  if (dateField) {
    dateField.value = today;
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("✅ Your flight has been booked! (Not really, but looks cool 😎)");
    });
  }
});
window.onscroll = function () {
  const topBtn = document.getElementById("topBtn");
  if (topBtn) {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const msg = document.getElementById("formMessage");
  msg.textContent = "✅ Your flight has been booked! ";
});
const returnField = document.getElementById("return");
if (returnField && dateField) {
  const departureDate = new Date(today);
  departureDate.setDate(departureDate.getDate() + 3);
  returnField.value = departureDate.toISOString().split("T")[0];
}

