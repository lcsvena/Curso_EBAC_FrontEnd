const form = document.getElementById('form-validation');
let campoA = document.getElementById('campo-a');
let campoB = document.getElementById('campo-b');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const returnmessage = document.getElementById("return-message")
    const valid = 'Formulário válido! B é maior que A.'
    const invalid = 'Formulário inválido! B deve ser maior que A.'

    if(campoB.value > campoA.value)
    {
        returnmessage.innerHTML = valid;
        returnmessage.style.display = "block";
    }
    else
    {
        returnmessage.innerHTML = invalid;
        returnmessage.style.display = "block";
    }
})

