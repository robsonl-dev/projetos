var d = document.getElementById('dia')
data = new Date()
dia = data.getDay()
if(dia == 0){
    document.write('Domingo')
}else if(dia == 1){
    document.write('Segunda')
}else if(dia == 2){
    document.write('Terça')
}else if(dia == 3){
    document.write('Quarta')    
 }else if(dia == 4){
    document.write('Quinta')    
}else if(dia == 5){
    document.write('Sexta')    
 }else if(dia == 6){
    document.write('Sábado')
}else if(dia > 6){
    document.write('Dia inválido!')    
 }else if(dia < 0){
    document.write('Dia inválido!')    
 }