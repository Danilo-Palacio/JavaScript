/*
Sistema de gastos familiares
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:


receitas[]
despesas[]
agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a familia está com saldo positivo ou negativo, seguido do valor do saldo
*/
let family = {
    recipes : [200,300,195,65.90,37.49,1000],
    expenses : [180,115,10,300,650,250],
}

function sum(array) {
    let total = 0;

    for (let i of array){
        total += i
    }
    return total
}

function calculareBalance(){
    const calculateRecipe = sum(family.recipes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateRecipe - calculateExpenses
    const itsOk = total >= 0

    let balanceText = "negativo"

    if (itsOk) {
        balanceText ="positivo"
    }
    console.log(`Seu saldo é ${balanceText} : R$${total.toFixed(2)} `)
}
calculareBalance()