const pessoa = {
    nome:'José', 
    sexo:'M', 
    peso:85.4, 
    engordar(p=0) {
        console.log('Engordou')
        this.peso += p
    },
    emagrecer(p=0) {
        console.log('Emagreceu')
        this.peso -= p
    }
}

pessoa.engordar(3)
pessoa.emagrecer(2)
console.log(`${pessoa.nome} pesa ${pessoa.peso}KG`)