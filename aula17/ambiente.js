let num = [5,2,6,7,9,1]
num.sort()

/*
for ( var pos = 0 ; pos < num.length ; pos++){
    console.log (`a posição ${pos} tem o valor de ${num[pos]}`)

}
*/

for (let pos in num){
    console.log (`a posição ${pos} tem o valor de ${num[pos]}`)
}