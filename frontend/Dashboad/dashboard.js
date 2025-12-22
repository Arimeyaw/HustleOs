
// Hustle OS Dashboard JS

// Sidebar active state
const sidebarItems = document.querySelectorAll(".sidebar li");

sidebarItems.forEach((item) => {
  item.addEventListener("click", () => {
    sidebarItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// Fake data (later from backend)
let availableJobs = 12;
let activeJobs = 3;
let earnings = 2450;

// Animate numbers
function animateValue(el, start, end, duration) {
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    el.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
}

// Animate cards on load
window.addEventListener("load", () => {
  const cards = document.querySelectorAll(".card p");

  cards.forEach((card) => {
    const value = card.textContent.replace(/[^\d]/g, "");
    if (!value) return;

    card.textContent = "0";
    animateValue(card, 0, value, 800);
  });
});

// Table row click (job selection)
const tableRows = document.querySelectorAll("table tr");

tableRows.forEach((row, index) => {
  if (index === 0) return; // skip header

  row.addEventListener("click", () => {
    alert("Job selected. Feature coming soon 🚀");
  });
});

// Logout
const logoutBtn = document.querySelector(".ri-logout-box-line")?.parentElement;

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to logout?")) {
      // ✅ CLEAR USER SESSION
      localStorage.removeItem("hustleUser");

      // ✅ REDIRECT TO LOGIN
      window.location.href = "../auth/login.html";
    }
  });
}

