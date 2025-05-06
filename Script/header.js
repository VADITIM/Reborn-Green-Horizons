let lastScrollPosition = 0;
let ticking = false;
let header = null;

function getScrollPosition() {
    return -document.body.getBoundingClientRect().top;
}

function updateHeader() {
    const currentScrollPosition = getScrollPosition();

    if (currentScrollPosition > lastScrollPosition + 5) {
        header.style.top = '-10%';
    } else if (currentScrollPosition < lastScrollPosition - 5) {
        header.style.top = '0';
    }

    if (currentScrollPosition < 10) {
        header.style.top = '0%';
    }

    lastScrollPosition = currentScrollPosition;
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
    }
}, { passive: true });

document.addEventListener('DOMContentLoaded', () => {
    header = document.querySelector('.header');
    updateHeader();
});
