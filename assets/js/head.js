function toggleDropdown(id) {
    let dropdown = document.getElementById(id);

    // Close all dropdowns before opening the clicked one
    document.querySelectorAll(".dropdown").forEach(d => {
        if (d.id !== id) {
            d.style.display = "none";
        }
    });

    // Toggle visibility
    dropdown.style.display = (dropdown.style.display === "flex") ? "none" : "flex";
}

// Close dropdown when clicking outside
document.addEventListener("click", function(event) {
    let isClickInside = event.target.closest(".menu-item");
    if (!isClickInside) {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.style.display = "none";
        });
    }
});