function gerar(){
    let numero = document.querySelector('#num')
    let n = Number(numero.value)
  
    let result = document.querySelector('#seltab')

    if (numero.value.length == 0){
        alert('Falta o numero sua anta')
    }else {    
        
        result.innerHTML = ' '
        for( var m = 0; m <= 10 ; m++){
      
            var createSeltab = window.document.createElement('option')
            createSeltab.text= `${n} X ${m} = ${n*m}`
            
            result.appendChild(createSeltab)
        }
        
    }
}