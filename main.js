const openNow = document.querySelectorAll('.open');
const spans = document.querySelector('.arrow');


  openNow.forEach( (opens) => {
    opens.addEventListener('click', () => {
      opens.classList.toggle('now');


    });
  });








