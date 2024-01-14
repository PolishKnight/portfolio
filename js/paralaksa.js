document.addEventListener('DOMContentLoaded', function() {
    const parallaxContainer = document.querySelector('.parallax-container');
  
    function handleParallax() {
      const scrollTop = window.scrollY;
      const parallaxOffset = scrollTop * -1.5;
      parallaxContainer.style.transform = `translateY(${parallaxOffset}px)`;
    }
  
    window.addEventListener('scroll', handleParallax);
  });
  