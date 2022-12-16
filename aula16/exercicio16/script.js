/*
Maneira de só ir 


function contar(){
    var inicio = document.querySelector("#inicio")
    var fim = document.querySelector('#fim')
    var passo = document.querySelector('#passo')

    var res = window.document.querySelector('#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){

        res.innerText = `impossivel contar (Falta o número do inicio)`
              
    }else{ 
        res.innerHTML = 'Contando...'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1f603}<br>`
        }
 }
} 

*/
function contar(){
    var inicio = document.querySelector("#inicio")
    var fim = document.querySelector('#fim')
    var passo = document.querySelector('#passo')

    var res = window.document.querySelector('#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //Alerta de erro
        alert(`impossivel contar (Falta o número de inicio ou fim)`)
              
    } else { 
        //Está tudo certo, então vai iniciar a primeira funcão
        res.innerHTML = 'Contando...<br>'

        let i = Number(inicio.value) //Criou as variaveis com a conversao pra numero
        let f = Number(fim.value) //Criou as variaveis com a conversao pra numero
        let p = Number(passo.value) //Criou as variaveis com a conversao pra numero
        
        //Correção para evitar loop infinito
        if(p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p=1
        }

        if ( i < f ){
            // Contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f603} <br>`
            }
        } else {
            //Contagem regressiva
            for(let c = i; c>= f; c-=p){
                res.innerHTML += `${c} \u{1f449} <br> `
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}