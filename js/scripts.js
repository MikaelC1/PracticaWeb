jQuery(document).ready(function($){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:3
        },
        1000:{
          items:5
        }
      }
    })
  })

  // Inicia FireBase //

  // Configuracion de FireBase
  var config = {
    authDomain: "geek-park-appweb-default-rtdb.firebaseio.com",
    databaseURL:"https://geek-park-appweb-default-rtdb.firebaseio.com",
    storageBucket:"geek-park-appweb-default-rtdb.appspot.com"
  };

  // Initialize FireBase
  firebase.initializeApp(config)

  //Funcion para el Boton Submit (Lo que va a hacer al oprimir el boton)
  $('#formContacto').submit(function(e){
  e.preventDefault()

  // Se genera una ID
  var mensajeId = Math.floor((Math.random() * 123456789) + 20)
  var nombre = $('#nombre').val()
  var email = $('#email').val()
  var telefono = $('#telefono').val()
  var mensaje = $('#mensaje').val()


   // Funcion para agregar los datos a firebase
    firebase.database().ref('mensajes/' + mensajeId).set({
    nombre: nombre,
    email: email,
    telefono: telefono,
    mensaje: mensaje,
    id: mensajeId
  }, (error) => {
    if (error) {
      // The write failed...
      alert('Error al enviar mensaje, intente de nuevo')
      
      
    } else {
      $('#formContacto')[0].reset()
      alert('El mensaje de envío de manera correcta')
      
    }
  });

  })

