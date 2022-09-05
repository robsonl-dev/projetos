function relogio(){
    var local = document.querySelector('div#hrs')
    var hr = new Date()
    var mn = new Date()
    var sg = new Date()
    hr = hr.getHours()
    mn = mn.getMinutes()
    sg = sg.getSeconds()
    local.innerHTML = `HORAS: <strong>${hr}: ${mn}: ${sg}</strong>`    
}
setInterval(relogio, 1000);
