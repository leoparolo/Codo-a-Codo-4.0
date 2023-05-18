// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


const $formLogin = document.querySelector('#formLogin')

$formLogin.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    swal('En desarrollo', 'Proximamente...', 'info')
    event.preventDefault()

}