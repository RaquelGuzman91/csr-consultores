 // Configuración base para todos los círculos
  function createCircle(id, percent) {
    var circle = new ProgressBar.Circle(id, {
      color: '#2A547E',
      trailColor: '#ddd',
      strokeWidth: 3,
      trailWidth: 3,
      easing: 'easeInOut',
      duration: 2000,
      text: { autoStyleContainer: true },
      step: function(state, circle) {
        let value = Math.round(circle.value() * 100);
        circle.setText(value + '%');
      }
    });

    // Animar al hacer scroll
    const target = document.querySelector(id);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          circle.animate(percent / 100); // convertir a decimal
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(target);
  }

  // Crear varios círculos con diferentes porcentajes
  createCircle('#circle1', 95);
  createCircle('#circle2', 70);





