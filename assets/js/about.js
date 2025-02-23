document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".accordion-button").forEach(button => {
        button.addEventListener("click", function () {
            const item = this.parentElement;
            const content = item.querySelector(".accordion-content");
            const span = this.querySelector("span");

            // Close all other accordions
            document.querySelectorAll(".accordion-item").forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                    const otherContent = otherItem.querySelector(".accordion-content");
                    otherContent.style.maxHeight = "0";
                    otherContent.style.opacity = "0";
                    otherItem.querySelector(".accordion-button span").textContent = "+";
                }
            });

            // Toggle current accordion
            if (item.classList.contains("active")) {
                item.classList.remove("active");
                content.style.maxHeight = "0";
                content.style.opacity = "0";
                span.textContent = "+";
            } else {
                item.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px"; // Expand smoothly
                content.style.opacity = "1";
                span.textContent = "-";
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".event-card");
    cards.forEach(card => {
        card.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease";
        });
        card.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });
});
