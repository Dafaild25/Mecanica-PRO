const atrapar = document.getElementById('Formulario-entrada');
atrapar.addEventListener('submit', e => {
    e.preventDefault();

    const cedula = atrapar['form-cedula'].value;
    console.log(cedula)
})