const openNow = document.querySelectorAll('.open');

  openNow.forEach( (opens) => {
    opens.addEventListener('click', () => {
      opens.classList.toggle('now');
    });
  });