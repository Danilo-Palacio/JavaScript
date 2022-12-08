var idade = 12
var agora = new Date()
var hora = agora.


console.log(`Você tem ${idade} anos.`)

if(idade<16){
                console.log('Não vota')
    }else if (idade < 18 || idade> 65){
        console.log('Voto opcional')
    }else {
        console.log('Voto obrigatório')
    }