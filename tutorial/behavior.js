document.addEventListener('DOMContentLoaded', (event) => {
  const dropdownBtn = document.querySelector('.dropdown-btn')
  const dropdown = document.querySelector('.dropdown')
  if (dropdown) {
    dropdownBtn.addEventListener('click', () => {
      if (dropdown.classList.contains("open")) {
        dropdown.classList.remove("open");
      } else {
        dropdown.classList.add("open");
      }
    })
  }
  
  $(function () {
    $('.pop-up').hide();
    $('.pop-up').fadeIn(1000);

    $('.close-button').click(function (e) {
      $('.pop-up').fadeOut(700);
      $('#overlay').removeClass('blur-in');
      $('#overlay').addClass('blur-out');
      e.stopPropagation();

    });
  })
});
