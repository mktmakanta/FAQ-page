const openNow = document.querySelectorAll('.open');
const span = document.querySelector('span');
  openNow.forEach( (opens) => {
    opens.addEventListener('click', () => {
      opens.classList.toggle('now');
      span.style.transform = rotate("180'deg")

    });
  });