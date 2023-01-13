function contarJa(){
    let inicio = document.querySelector('#ini')
    let fim = document.querySelector('#fim')
    let passo = document.querySelector('#pass')

    let result = document.querySelector('#res')

    if (inicio.value.length == 0 || fim.value.length == 0) {
         alert(`ERRO [falta caracteres]`)
    }else{
                let i = Number(inicio.value)
                let f = Number(fim.value)
                let p = Number(passo.value)
            if( i > f ){
                for( var c = i; c>=f ; c-=p){

                    result.innerHTML += `contei ${c} <br>`
                }

            }else{

                
        
                for (let c = i; c <= f; c += p){
                   
                    result.innerHTML += ` contei ${c} <br>`

                }           
            }
    }
}
    