const keys = document.querySelectorAll('.key');
const status = document.querySelector('.status');

function playSound(key) {
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    const keyItem = document.querySelector(`li[data-key="${key}"]`);

    if (!audio || !keyItem) return;

    audio.currentTime = 0;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(() => {});
    }

    keyItem.classList.add('playing');
    status.textContent = `Playing: ${keyItem.querySelector('.sound').textContent}`;
}

function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

keys.forEach((keyItem) => {
    keyItem.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', function(event) {
    playSound(event.key.toLowerCase());
});

document.querySelector('.keys').addEventListener('click', function(event) {
    const keyItem = event.target.closest('li[data-key]');
    if (!keyItem) return;
    playSound(keyItem.dataset.key);
});

