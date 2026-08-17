document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".navbar")?.classList.remove("menu-open");
  });
});
