
// Hustle OS Dashboard JS
// AUTH GUARD
const user = JSON.parse(localStorage.getItem("hustleUser"));
if (!user) {
  window.location.href = "../auth/login.html";
}

// STATS DATA
const data = {
  activeJobs: 4,
  completedJobs: 12,
  spent: 3200,
  workers: 6
};

function animate(id, value) {
  let count = 0;
  const el = document.getElementById(id);
  const interval = setInterval(() => {
    count++;
    el.textContent = count;
    if (count >= value) clearInterval(interval);
  }, 20);
}

animate("activeJobs", data.activeJobs);
animate("completedJobs", data.completedJobs);
animate("workers", data.workers);
document.getElementById("spent").textContent = data.spent;

// CHART
new Chart(document.getElementById("jobsChart"), {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Jobs",
        data: [3, 5, 2, 6, 4],
        backgroundColor: "#f3853c",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
  },
});
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");

menuBtn.onclick = () => {
  sidebar.classList.toggle("show");
};




// LOGOUT
document.getElementById("logout").onclick = () => {
  localStorage.removeItem("hustleUser");
  window.location.href = "../auth/login.html";
};

// // Logout
// const logoutBtn = document.querySelector(".ri-logout-box-line")?.parentElement;

// if (logoutBtn) {
//   logoutBtn.addEventListener("click", () => {
//     if (confirm("Are you sure you want to logout?")) {
//       // ✅ CLEAR USER SESSION
//       localStorage.removeItem("hustleUser");

//       // ✅ REDIRECT TO LOGIN
//       window.location.href = "../auth/login.html";
//     }
//   });
// }

// const jobs = [
//   {
//     id: "job_001",
//     title: "Electrical Wiring Fix",
//     client: "Ama",
//     worker: "Kwame",
//     status: "active",
//     location: "Accra",
//     price: 250,
//     createdAt: "2025-01-12",
//   },
//   {
//     id: "job_002",
//     title: "Pipe Repair",
//     client: "Yaw",
//     worker: null,
//     status: "pending",
//     location: "Legon",
//     price: 180,
//     createdAt: "2025-01-15",
//   },
// ];
