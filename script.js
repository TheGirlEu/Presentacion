document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
  document.querySelector(".nav-links").classList.toggle("nav-links-responsive")
}
)

function showAlert(){
    alert('¡Hola, esta es una alerta desde JavaScript!');
}

function fun() {
    var userInput = prompt("Escribe acá tu prompt");
    if (userInput !== null) {
        alert("Has escrito: " + userInput);
    }
}

const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
}

let boton = document.getElementById("miBoton");

boton.addEventListener("click", function(){
    alert("¡Haz hecho click!");
});

