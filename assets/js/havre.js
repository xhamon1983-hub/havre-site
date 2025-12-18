// assets/js/havre.js

document.addEventListener('DOMContentLoaded', () => {
  // -----------------------------
  // 1. Onglets parent (mockups)
  // -----------------------------
  const tabButtons = document.querySelectorAll('.tab-btn');
  const screens = document.querySelectorAll('.screen');

  if (tabButtons.length && screens.length) {
    tabButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');

        // toggle bouton actif
        tabButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        // afficher / cacher les écrans
        screens.forEach((screen) => {
          if (screen.id === targetId) {
            screen.style.display = 'block';
          } else {
            screen.style.display = 'none';
          }
        });
      });
    });
  }

  // -----------------------------------------
  // 2. Jauge verticale (test-jauge / enfant)
  // -----------------------------------------
  const moodBar = document.getElementById('moodBar');
  const moodHandle = document.getElementById('moodHandle');
  const moodValue = document.getElementById('moodValue');
  const moodWord = document.getElementById('mood-word');
  const pillText = document.getElementById('pill-text');

  let level = 0.65; // 0 = calme / 1 = trop plein

  function updateHandleFromLevel() {
    if (!moodBar || !moodHandle) return;

    const barHeight = 200; // même que .mood-bar
    const padding = 10;
    const y = (1 - level) * barHeight + padding; // 1 = haut, 0 = bas
    moodHandle.style.top = `${y}px`;

    const percent = Math.round(level * 100);

    if (moodHandle) moodHandle.textContent = `${percent}%`;
    if (moodValue) moodValue.textContent = `Ressenti actuel : ${percent}%`;

    if (!moodWord || !pillText) return;

    if (percent < 25) {
      moodWord.textContent = 'plutôt calme';
      pillText.textContent = 'Plutôt calme pour l’instant';
    } else if (percent < 50) {
      moodWord.textContent = 'un peu tendu';
      pillText.textContent = 'Un peu de tension';
    } else if (percent < 75) {
      moodWord.textContent = 'stressé';
      pillText.textContent = 'Beaucoup de choses en tête';
    } else {
      moodWord.textContent = 'en mode cocotte-minute';
      pillText.textContent = 'Besoin de souffler';
    }
  }

  if (moodBar) {
    updateHandleFromLevel();

    moodBar.addEventListener('click', (e) => {
      const rect = moodBar.getBoundingClientRect();
      const clickY = e.clientY - rect.top;
      const ratio = 1 - clickY / rect.height;
      level = Math.max(0, Math.min(1, ratio));
      updateHandleFromLevel();
    });
  }

  // ---------------------------------
  // 3. Missions cliquables (test)
  // ---------------------------------
  const missionItems = document.querySelectorAll('.mission-item');
  if (missionItems.length) {
    missionItems.forEach((item) => {
      item.addEventListener('click', () => {
        item.classList.toggle('done');
      });
    });
  }
});