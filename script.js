document.addEventListener("DOMContentLoaded", function () {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Remove 'active' de todas as abas e conteúdos
            tabLinks.forEach(link => link.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            // Ativa a aba clicada e o conteúdo correspondente
            const targetTab = this.getAttribute("data-tab");
            document.getElementById(targetTab).classList.add("active");
            this.classList.add("active");
        });
    });
});
