function calcular (){
    let num1 = document.querySelector('input#ip1')
    let num2 = document.querySelector('input#ip2')
    let num3 = document.querySelector('input#ip3')
    let res = document.querySelector('div.resultado')

    if(num1.value.length == 0 || num2.value.length == 0 || num3.value.length == 0){
        window.alert('Preencha todos os campos com números validos!')
    }else{
        res.innerHTML = 'Contando: '
        let n1 = Number(num1.value)
        let n2 = Number(num2.value)
        let n3 = Number(num3.value)
        if(n3 <= 0){
            window.alert('Valor de PASSO inválido, sistema atribuiu valor 1')
            n3 =1
        }
        if(n1 < n2){
        // Contagem crescente
           for(let cont = n1; cont <= n2; cont += n3){
            res.innerHTML += ` ${cont}`
           }
        }else{
            // Contagem decrescente
            for(let cont =n1; cont >= n2; cont -= n3){
            res.innerHTML += ` ${cont}`
            }
        }     
    }
           
}
