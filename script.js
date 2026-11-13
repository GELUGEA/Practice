// Replace these placeholders with your real contact/profile details before publishing.
const PROFILE = {
  email: "YOUR_EMAIL@example.com",
  github: "https://github.com/YOUR_GITHUB_USERNAME",
  linkedin: "https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/"
};
document.getElementById("email").href = `mailto:${PROFILE.email}`;
document.getElementById("github").href = PROFILE.github;
document.getElementById("linkedin").href = PROFILE.linkedin;
document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
menu.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));
