document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("theme-toggle");
  const html = document.documentElement;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    html.classList.add("dark");
    toggleBtn.textContent = "☀️";
  } else {
    html.classList.remove("dark");
    toggleBtn.textContent = "🌙";
  }

  toggleBtn.addEventListener("click", function () {
    const isDark = html.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
  });
});
