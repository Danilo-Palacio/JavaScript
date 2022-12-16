
function gerarTabuada(){

    var numero = document.querySelector('#numero')
    var multiplicacao = 0
    var result = document.querySelector('#seltab')
    if(numero.value.length == 0){

        alert('Porfavor Digite um numero')
        
    }else {

        var n = Number(numero.value)
        result.innerHTML = '' //Para limpar a tabuada, antes de colocar outra tabuada

        while (multiplicacao <=10){ 

            let item = window.document.createElement('option')
            item.text = `${n} X ${multiplicacao} = ${n*multiplicacao}`

            result.appendChild(item)
            
            multiplicacao++;
            }
        }
}

