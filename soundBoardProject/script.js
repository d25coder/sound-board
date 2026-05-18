function playSound(key) {

const audio = document.querySelector(`audio[data-key="${key}"]`);
const keyItem = document.querySelector(`li[data-key="{key}"]`);

if (!audio) return;

audio.currentTime = 0;
audio.play();

keyItem.classList.add('playing');
setTimeout(function() {
    keyItem.classList.remove('playing');
}, 100);

}

window.addEventListener('keydown', function(event) {
    plsySound(event.key.toLowerCase());
});

document.querySelector('.keys').addEventListener('click',function(event) {
    const keyItem = event.target.closest('li[data-key]');
    if (!keyItem) return;
    playSound(keyItem.dataset.key);
});

