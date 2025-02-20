
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const content = item.querySelector('.accordion-content');
        const span = button.querySelector('span');
        
        document.querySelectorAll('.accordion-item').forEach(otherItem => {
            if (otherItem !== item) {
                 otherItem.classList.remove('active');
                otherItem.querySelector('.accordion-content').style.display = 'none';
                otherItem.querySelector('.accordion-content').style.opacity = '0';
                otherItem.querySelector('.accordion-content').style.transform = 'translateY(-10px)';
                otherItem.querySelector('.accordion-button span').textContent = '+';
            }
        });
        
        if (content.style.display === 'block') {
            content.style.display = 'none';
            content.style.opacity = '0';
            content.style.transform = 'translateY(-10px)';
            span.textContent = '+';
            item.classList.remove('active');
        } else {
            content.style.display = 'block';
            setTimeout(() => {
                content.style.opacity = '1';
                content.style.transform = 'translateY(0)';
            }, 10);
            span.textContent = '-';
            item.classList.add('active');
        }
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
