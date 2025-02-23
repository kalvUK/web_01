
        function toggleAccordion(header) {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.icon');

            if (content.style.display === 'block') {
                content.style.display = 'none';
                icon.textContent = '+';
            } else {
                content.style.display = 'block';
                icon.textContent = '−';
            }
        }

        function unfoldAll() {
            document.querySelectorAll('.accordion-content').forEach(content => {
                content.style.display = 'block';
            });
            document.querySelectorAll('.accordion-header .icon').forEach(icon => {
                icon.textContent = '−';
            });
        }

        function collapseAll() {
            document.querySelectorAll('.accordion-content').forEach(content => {
                content.style.display = 'none';
            });
            document.querySelectorAll('.accordion-header .icon').forEach(icon => {
                icon.textContent = '+';
            });
        }
    