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


function hideMenus(event) {
  var contactMenu = document.getElementById('menu-contact-me');
  var aboutMenu = document.getElementById('menu-about-me');

  if (!contactMenu.contains(event.target) && !event.target.matches('#contact-btn')) {
    contactMenu.classList.remove('menu-open');
  }

  if (!aboutMenu.contains(event.target) && !event.target.matches('#about-btn')) {
    aboutMenu.classList.remove('menu-open');
  }
}

document.addEventListener('click', hideMenus);

    const videoSource = document.getElementById('videoSource');
    const originalSrc = videoSource.src;
    const newSrc = 'Showreel_2024.mp4';  


    function checkScreenWidth() {
        if (window.innerWidth > 768) {
            videoSource.src = newSrc;
        } else {
            videoSource.src = originalSrc;
        }
        videoSource.parentElement.load();
    }


    window.addEventListener('load', checkScreenWidth);

    window.addEventListener('resize', checkScreenWidth);

  