
function openTab(event, sectionId) {
                    // Hide all sections
                    let tabContents = document.getElementsByClassName("tabcontent");
                    for (let i = 0; i < tabContents.length; i++) {
                        tabContents[i].style.display = "none";
                    }
        
                    // Show the selected section
                    let activeSection = document.getElementById(sectionId);
                    activeSection.style.display = "block";
                    activeSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
        
                    // Remove "active" class from all buttons
                    let tabButtons = document.getElementsByClassName("tablinks");
                    for (let i = 0; i < tabButtons.length; i++) {
                        tabButtons[i].classList.remove("active");
                    }
        
                    // Add "active" class to the clicked button
                    event.currentTarget.classList.add("active");
                }
                function changeImage() {
                    let img = document.getElementById("dynamicImage");
                    if (img.src.includes("image1.png")) {
                        img.src = "image2.png"; // Change to the new image
                    } else {
                        img.src = "image1.png"; // Revert back to the original
                    }
                }
                 
