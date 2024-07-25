/*
  document.getElementById('contact-btn').addEventListener('click', function() {
    var menu = document.getElementById('menu-contact-me');
    if (menu.style.right === '-45vw') {
      menu.style.right = '0';
    } else {
      menu.style.right = '-45vw';
    }
  });

  document.getElementById('close-btn').addEventListener('click', function() {
    var menu = document.getElementById('menu-contact-me');
    menu.style.right = '-40vw';
  });

  */



  document.getElementById('contact-btn').addEventListener('click', function() {
    var menu = document.getElementById('menu-contact-me');
    menu.classList.toggle('menu-open');
  });
  
  document.getElementById('close-btn').addEventListener('click', function() {
    var menu = document.getElementById('menu-contact-me');
    menu.classList.remove('menu-open');
  });


  document.getElementById('about-btn').addEventListener('click', function() {
    var menu = document.getElementById('menu-about-me');
    menu.classList.toggle('menu-open');
  });
  
  document.getElementById('close-btn2').addEventListener('click', function() {
    var menu = document.getElementById('menu-about-me');
    menu.classList.remove('menu-open');
  });

// Function to hide menus if clicked outside
function hideMenus(event) {
  var contactMenu = document.getElementById('menu-contact-me');
  var aboutMenu = document.getElementById('menu-about-me');

  // Check if the click is outside of the contact menu
  if (!contactMenu.contains(event.target) && !event.target.matches('#contact-btn')) {
    contactMenu.classList.remove('menu-open');
  }

  // Check if the click is outside of the about menu
  if (!aboutMenu.contains(event.target) && !event.target.matches('#about-btn')) {
    aboutMenu.classList.remove('menu-open');
  }
}

// Add event listener to the document
document.addEventListener('click', hideMenus);
//
    // Pobierz elementy video i source
    const videoSource = document.getElementById('videoSource');
    const originalSrc = videoSource.src;
    const newSrc = 'Showreel_2024.mp4';  // Zmień na nowy URL video

    // Funkcja do sprawdzania szerokości ekranu
    function checkScreenWidth() {
        if (window.innerWidth > 768) {
            videoSource.src = newSrc;
        } else {
            videoSource.src = originalSrc;
        }
        // Trzeba załadować na nowo video
        videoSource.parentElement.load();
    }

    // Sprawdź szerokość ekranu przy załadowaniu strony
    window.addEventListener('load', checkScreenWidth);

    // Sprawdź szerokość ekranu przy zmianie rozmiaru okna
    window.addEventListener('resize', checkScreenWidth);

  