document.querySelectorAll('.direction__tabs-button').forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;


    document.querySelectorAll('.direction__tabs-button').forEach(btn => btn.classList.remove('direction__tabs-button--active'));


    button.classList.add('direction__tabs-button--active');


    document.querySelectorAll('.direction__tabs-panel').forEach(panel => panel.classList.remove('direction__tabs-panel--active'));


    document.querySelector(`.direction__tabs-panel[data-tab-content="${tab}"]`).classList.add('direction__tabs-panel--active');
  });
});



