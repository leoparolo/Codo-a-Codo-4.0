var miCheckbox = document.getElementById('checkbox');

miCheckbox.addEventListener('click', function () {
    if (miCheckbox.checked) {
        console.log('El elemento está marcado');
        document.querySelector('#nombre').required = false;
        document.querySelector('#apellido').required = false;
        document.querySelector('#fecha').required = false;
        document.querySelector('#email').required = false;
        document.getElementById('nombre').style.display = 'none';
        document.getElementById('apellido').style.display = 'none';
        document.getElementById('fecha').style.display = 'none';
        document.getElementById('email').style.display = 'none';
    } else {
        console.log('Ahora está desmarcado');
        document.querySelector('#nombre').required = true;
        document.querySelector('#apellido').required = true;
        document.querySelector('#fecha').required = true;
        document.querySelector('#email').required = true;
        document.getElementById('nombre').style.display = 'block';
        document.getElementById('apellido').style.display = 'block';
        document.getElementById('fecha').style.display = 'block';
        document.getElementById('email').style.display = 'block';

    }
});


const $form = document.querySelector('#form')

$form.addEventListener('submit', validarDatos)

function validarDatos(event) {


    var option = document.getElementById('inlineFormCustomSelect').value
    console.log(option)

    if (option == 'Seleccione una opcion') {
        swal('Seleccione una opcion!', 'Asegurese de elegir una de las opciones para poder darle una mejor atención', 'error')
        event.preventDefault()
    }
    else {
        handleSubmit(event)
    }
}

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData($form)
    const response = await fetch($form.action, {
        method: $form.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }

    }
    )
    if (response.ok) {
        $form.reset()
        swal('¡Datos enviados correctamente!', 'Gracias por contactarte con Vaporcito!', 'success')
        window.scrollTo(0, 0)

    }
}