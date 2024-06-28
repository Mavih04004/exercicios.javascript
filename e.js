// ex. 01
let nome = "João"
console.log(nome)

// ex.02
let a = 5
let b = 10
console.log(a+b)

// ex.03
let primeiroNome = "Josefa"
let  ultimoNome = "Silva"
console.log(primeiroNome, ultimoNome)

//ex.04
let pessoa = {
    nome: "Maria", 
    idade: "18",
    endereço: "Soroptmistas",
    telefone:"33225434"
}
    console.log(pessoa)

    // ex.04.2
    let fruta = ["banana","maça", "laranja"]
    fruta[3] = "uva"
    console.log (fruta)

    // ex.05
    let número = [1, 2, 3, 4, 5]
    console.log(número[0], número[4])

    // ex.06
    let cores = ["vermelho", "verde", "azul"]
    for (let i = 0; i < 3; i++){
        console.log(cores [i])
    }

    // ex.07
    let idade = "20"
    if(idade < 18){
        console.log("menor de idade")
    }else{
        console.log("maior de idade")
    }

    // ex.08
    let nota = "10"
    if (nota > 8){
        console.log("Aprovado")
    }else if (nota >= 5) {
        console.log("Recuperação")
    }else{ 
        console.log("Reprovado")

    }

    // ex.09
    let DiaDaSemana = "3"
    switch (DiaDaSemana){
        case '1':{
            console.log("Domingo")
            break
        }case '2':{
            console.log( "Segunda")
            break
        }case '3':{
            console.log("Terça")
            break
        }case '4':{
            console.log("Quarta")
            break
        }case '5':{
            console.log("Quinta")
            break
        }case '6':{
            console.log("Sexta")
            break
        }case '7':{
            console.log("Sabádo")
            break
        }
    }

    // ex.10
    for(i = 1; i <= 10; i++){
        console.log(i)
    }
    
    // ex.11

    let contador = 1
    while(contador <= 5){
        console.log(contador)
        contador++
    }

    // ex.12
    let pares = 0 
    while(pares <= 30){
        console.log(pares)
        pares = pares + 2
    }

    // ex. 13
    let valores = [10,20,30,40,50], soma = 0
    for(i = 0; i < 5; i++){
        soma = soma + valores[1]
        console.log(soma)
    }



  

    