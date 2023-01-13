let num = document.querySelector('#txtnum')
let sel = document.querySelector('#select')
let res = document.querySelector('#resultado')
var adicionado = [];



function adicionar(){

    if (num.value.length == 0 || num.value > 100){
        alert('Colocar o numero de 1 a 100')
    }else{
        adicionado.push(Number(num.value))

        var option = document.createElement('option')
        option.text=`Valor ${num.value} adicionado.  `
        sel.appendChild(option)
        res.innerHTML = ' '
    }
    num.value = ' '
    num.focus()
    

}


function finalizar(){

    if(adicionado.length==0){
        alert('Adicione valores antes de finalizar!')
    }else{

        let total = adicionado.length
        let maior = adicionado[0]
        let menor = adicionado[0]
        let soma = 0;


        for ( let pos in adicionado){
            soma+= adicionado[pos]

            if(adicionado[pos] > maior)
            maior = adicionado[pos]

            if ( adicionado[pos] < menor)
            menor = adicionado[pos]
        }

       
        res.innerHTML += `Ao todo temos ${total} números cadastrados <br>

        O maior valor informado foi ${maior}. <br>
        O menor valor informado foi ${menor}.<br>

        Somando todos os valores, temos ${soma}. <br>
        A média dos valores digitados é ${soma/ adicionado.length}. <br>
        `


    }
}

