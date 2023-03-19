const input = document.getElementById('ghost-input');
const bubble = document.getElementById('ghost-bubble');

const mouth = document.querySelector('.ghost__mouth');

input.onkeydown = e => {
  if (e.keyCode == 13) {
    bubble.innerText = e.target.value;
    e.target.value = '';

    // mouth chatter
    let i = 0;
    if (mouthChatter) clearInterval(mouthChatter);

    const mouthChatter = setInterval(() => {
      mouth.classList.toggle('ghost__mouth--open');
      if (i === 6) clearInterval(mouthChatter);
      i++;
    }, 300);
  }
};