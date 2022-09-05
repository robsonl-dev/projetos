function cad(){
    var teste = new t
    var nome1 = document.querySelector('input#nome')
    var sobnome1 = document.querySelector('input#sobrenome')
    var email1 = document.querySelector('input#email')
    var telefone1 = document.querySelector('input#telefone')
    var telefone1 = Number(telefone1.value)
    var sexo1 = document.querySelector('input#sexo')
    var username = document.querySelector('input#nomeusuario')
    var password = document.querySelector('input#senha')

    if(telefone1.length > 11){
        alert('Número de telefone inválido!')
    }else{
        alert('tudo ok')
    }

    /*alert(`Nome: ${nome1}, Sobrenome: ${sobnome1}, Email: ${email1}`)*/
}
