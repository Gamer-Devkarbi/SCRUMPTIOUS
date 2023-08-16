document.addEventListener("DOMContentLoaded", function () {
    function animateStars() {
        const reviewItems = document.querySelectorAll(".review-item");

        reviewItems.forEach((item) => {
            const stars = item.querySelectorAll(".star");
            stars.forEach((star) => {
                star.classList.remove("filled");
            });

            const rating = parseFloat(item.dataset.rating);

            stars.forEach((star, index) => {
                setTimeout(() => {
                    if (index + 1 <= rating) {
                        star.classList.add("filled");
                    }
                }, index * 300); // Adjust the duration here (milliseconds)
            });
        });
    }

    // Call the animateStars function initially
    animateStars();

    // Call the animateStars function every n seconds (n000 milliseconds)
    setInterval(animateStars, 3000);
});
