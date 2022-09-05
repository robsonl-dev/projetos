function chamarhora(){    
    var d = window.document.getElementById('dia')
    var img = window.document.getElementById('imagem')
    var h = document.getElementById('horas')
    var datad = new Date()
    var datah = new Date()
    var hora = datah.getHours()
    var minuto = datah.getMinutes()
    var segundos = datah.getSeconds()
    if(hora >= 6 && hora < 12){
        h.innerHTML = `${hora}:${minuto}:${segundos}`
        img.src = 'manha.jpg'
        document.body.style.background = '#8ed2d5'
    }else if(hora >=12 && hora < 18){
        h.innerHTML = `${hora}:${minuto}:${segundos}`
        img.src = 'tarde.jpg'
        document.body.style.background = '#fdcd2f'
    }else{
        h.innerHTML = `${hora}:${minuto}:${segundos}`
        img.src = 'noite.jpg'
        document.body.style.background = '#2a5867'
    }
}


