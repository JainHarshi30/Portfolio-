const starsContainer = document.querySelector('.stars');
const numStars = 200;

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = `${Math.random() * 2 + 1}px`;
    star.style.height = `${Math.random() * 2 + 1}px`;
    starsContainer.appendChild(star);
}

const toggleBtn = document.querySelector('.toggle-button');
const navbar = document.querySelector('.navbar-right');

toggleBtn.onclick = () => {
    navbar.classList.toggle('active');
    
};

const themeSwitch = document.querySelector('#theme-switch');
const rootElement = document.documentElement;

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        // Switch to light mode
        rootElement.style.setProperty('--primary-bg', 'var(--primary-bg-light)');
        rootElement.style.setProperty('--accent-color', 'var(--accent-color-light)');
        rootElement.style.setProperty('--text-color', 'var(--text-color-light)');
        rootElement.style.setProperty('--text-secondary', 'var(--text-secondary-light)');
        rootElement.style.setProperty('--gradient-1', 'var(--gradient-1-light)');
        rootElement.style.setProperty('--gradient-2', 'var(--gradient-2-light)');
    } else {
        // Switch back to dark mode
        rootElement.style.setProperty('--primary-bg', 'var(--primary-bg-dark)');
        rootElement.style.setProperty('--accent-color', 'var(--accent-color-dark)');
        rootElement.style.setProperty('--text-color', 'var(--text-color-dark)');
        rootElement.style.setProperty('--text-secondary', 'var(--text-secondary-dark)');
        rootElement.style.setProperty('--gradient-1', 'var(--gradient-1-dark)');
        rootElement.style.setProperty('--gradient-2', 'var(--gradient-2-dark)');
    }
});