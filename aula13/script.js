
function carregar() {

    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("img")
    var back = window.document.getElementById("back")

    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()


    var plural = ''

        if ( hora && min > 1){
            plural += 's' 
        }


    msg.innerHTML = `Agora são ${hora} hora${plural} e ${min} minuto${plural}`

    if(hora >= 0 && hora< 12){
        //Bom dia! #8AA39F
        img.src = 'img/manha.jpg'
        back.style.backgroundColor = '#8AA39F'
    }else if (hora>= 12 && hora <18) {
        //Boa Tarde! #FBAA74
        img.src = 'img/tarde.jpg'
        back.style.backgroundColor= '#FBAA74'
    }else{
        //Boa Noite! #684C74
        img.src= 'img/noite.jpg'
        back.style.backgroundColor = '#684C74'
    }

}