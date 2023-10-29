function mostrarValor() {
    let b = "18.000$"
    let p = "35.000$"
    var opcion = document.getElementById("opcion").value;
    if (opcion === "Basico") {
        document.getElementById("valor").value = b;
    } else if (opcion === "Premium") {
        document.getElementById("valor").value = p;
    } else {
        document.getElementById("valor").value = "";
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById("formbuy").addEventListener("submit", function(event) {
    // Evita el envío del formulario por defecto
    event.preventDefault();
  
    // Obtén los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
  
    // Realiza la validación
    if (nombre === "" || correo === "" || !isValidEmail(correo)) {
      alert("Por favor, complete todos los campos correctamente.");
    } else {
      // Envía el formulario si es válido
      this.submit();
    }
  });
  
  function isValidEmail(email) {
    // Implementa una validación personalizada para direcciones de correo electrónico
    // Puedes utilizar expresiones regulares u otras técnicas
    // Aquí hay un ejemplo simple de validación de correo electrónico
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= windowHeight &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.addEventListener("scroll", function() {
    var elementos = document.querySelectorAll(".servicios");
    elementos.forEach(function(elemento) {
      if (isElementInViewport(elemento)) {
        elemento.classList.add("sanimate");
      } else {
        elemento.classList.remove("sanimate");
      }
    });
  });