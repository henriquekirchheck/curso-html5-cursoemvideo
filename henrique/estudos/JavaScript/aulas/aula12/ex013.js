const date = new Date()
const weekDay = date.getDay()
// weekDay = 8

/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sabado
*/

switch(weekDay) {
    case 0: {
        console.log('Domingo')
        break
    }
    case 1: {
        console.log('Segunda')
        break
    }
    case 2: {
        console.log('Terça')
        break
    }
    case 3: {
        console.log('Quarta')
        break
    }
    case 4: {
        console.log('Quinta')
        break
    }
    case 5: {
        console.log('Sexta')
        break
    }
    case 6: {
        console.log('Sabado')
        break
    }
    default: {
        throw Error('Dia invalido')
    }
}