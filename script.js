document.addEventListener('DOMContentLoaded', () => {
    const catContainer = document.getElementById('cat-container');
    const catImages = ['pixel-cat1.png']; // Add paths to your cat images here

    function splurtCats() {
        for (let i = 0; i < 20; i++) {
            const cat = document.createElement('img');
            cat.src = catImages[Math.floor(Math.random() * catImages.length)];
            cat.className = 'cat';
            cat.style.setProperty('--x', `${Math.random() * 200 - 100}vw`);
            cat.style.setProperty('--y', `${Math.random() * 200 - 100}vh`);
            catContainer.appendChild(cat);

            cat.addEventListener('animationend', () => {
                cat.remove();
            });
        }
    }

    // Trigger the splurtCats function every .5 seconds
    setInterval(splurtCats, 500);
});