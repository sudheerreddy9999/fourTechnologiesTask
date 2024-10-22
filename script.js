document.getElementById('demo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});
    document.addEventListener('DOMContentLoaded', function () {
        const items = document.querySelectorAll('.item');

        items.forEach((item, index) => {
            // Add a slight delay for each item to create a staggered effect
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 200); // Delay increases for each item (200ms for each)
        });
    });

