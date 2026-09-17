document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const burger = document.querySelector(".navbar-burger");
    const menu = document.getElementById("menuPrincipal");

    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {
        document.documentElement.classList.add("theme-dark");
        updateButton("dark");
    } else {
        updateButton("light");
    }

    themeToggle.addEventListener("click", () => {
        const dark = document.documentElement.classList.toggle("theme-dark");
        const newTheme = dark ? "dark" : "light";

        localStorage.setItem("portfolio-theme", newTheme);
        updateButton(newTheme);
    });

    function updateButton(theme) {
        themeToggle.textContent = theme === "dark"
            ? "☀️ Tema claro"
            : "🌙 Tema escuro";
    }

    if (burger && menu) {
        burger.addEventListener("click", () => {
            const isActive = burger.classList.toggle("is-active");
            menu.classList.toggle("is-active");
            burger.setAttribute("aria-expanded", String(isActive));
        });
    }

    document.querySelectorAll(".navbar-menu a").forEach((link) => {
        link.addEventListener("click", () => {
            burger?.classList.remove("is-active");
            menu?.classList.remove("is-active");
            burger?.setAttribute("aria-expanded", "false");
        });
    });
});
