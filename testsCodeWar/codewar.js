



function greet (name, owner) {
    let outro = name
    let saudacao = ''
    if (name === outro){
      saudacao = 'Hello boss'
      
      console.log(saudacao)
  }else{
      saudacao = 'Hello guest'
      console.log(saudacao)
    }
    return saudacao
  }