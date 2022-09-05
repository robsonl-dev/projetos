function calcular(){
    var val = document.getElementById('valnum')
    var resultado = document.getElementById('res')
    val = Number(val.value)
    if(val == 0){
        resultado.innerHTML = `0 é par, escolha um número mais difícil!`
        ducument.val.style.font = '20px'
    }else if(val % 2 == 0){
        resultado.innerHTML = `${val}, é par!`
    }
    else{
        resultado.innerHTML = `${val}, é impar!`

    }
}