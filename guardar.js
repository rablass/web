document.getElementById('formulario').addEventListener('submit', function(e) {
    
    e.preventDefault();

    let formulario = new FormData(document.getElementById('formulario'));

    fetch('registrar.php', {
        method: 'POST',
        body: formulario
    })
    .then(res => res.json())
    .then(data => {
        if(data == 'true') {
            document.getElementById('nom').value = '';
            document.getElementById('apel').value = '';
            document.getElementById('email').value = '';
            document.getElementById('cel').value = '';
            document.getElementById('dir').value = '';
            document.getElementById('ciudad').value = '';
            document.getElementById('mensaje').value = '';
            alert('El usuario se insertó correctamente.');
        } else {
            console.log(data);
        }
    });

});