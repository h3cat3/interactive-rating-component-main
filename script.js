const dialog = document.getElementById('thank-you');
const openButton = document.getElementById('open-modal');
const scores = document.querySelectorAll('.score');
const selectedScore = document.getElementById('selected');

let scoreValue = 0;

  scores.forEach(scores => {
    scores.addEventListener('click', (event) => {
      scoreValue = event.target.innerText;
      selectedScore.innerText = `You selected ${scoreValue} out of 5`; 
        scores.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    });
  });

openButton.addEventListener('click', () => {
    if (scoreValue !== 0) {
      dialog.showModal();
    } else {
      alert('Please select a score befor submitting.');
    }
});

window.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});

