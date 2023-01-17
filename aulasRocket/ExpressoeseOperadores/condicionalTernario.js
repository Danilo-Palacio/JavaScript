// Condição então valor 1 se não valor 2
// condition ? value1 : value2




// café top
let pao = true;
let queijo = true;

const cafeTop = pao && queijo ? 'Café Top' : 'Café Flop'
console.log(cafeTop)



console.log(" Vamos ver agora uma função utilizando o tenario para ver se este jovem pode dirigir")


let age = 17;

function podeDirigir() {
   return age >= 18 ? 'Pode Dirigir' : 'Não pode Dirigir'
}

console.log(podeDirigir(++age))


