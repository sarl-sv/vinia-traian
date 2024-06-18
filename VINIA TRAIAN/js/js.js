
document.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.fade');
  
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var position = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
  
      if (position < windowHeight) {
        element.classList.add('show');
      }
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    const icon = document.querySelector('.burger');
    if (icon) {
        const menu1 = document.querySelector('.menu1');
        icon.addEventListener("click", function(e) {
            icon.classList.toggle('active');
            menu1.classList.toggle('active');
        });

        const menuLinks = document.querySelectorAll('.menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function(e) {
 
                icon.classList.remove('active');
                menu1.classList.remove('active');
            });
        });
    }
});

