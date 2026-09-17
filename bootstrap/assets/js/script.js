document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {
        body.setAttribute("data-bs-theme", "dark");
        updateButton("dark");
    } else {
        body.setAttribute("data-bs-theme", "light");
        updateButton("light");
    }

    themeToggle.addEventListener("click", () => {
        const currentTheme = body.getAttribute("data-bs-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";

        body.setAttribute("data-bs-theme", newTheme);
        localStorage.setItem("portfolio-theme", newTheme);
        updateButton(newTheme);
    });

    function updateButton(theme) {
        themeToggle.textContent = theme === "dark"
            ? "☀️ Tema claro"
            : "🌙 Tema escuro";
    }
});
