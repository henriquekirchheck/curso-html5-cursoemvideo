const numbers = []

function resetNumbers() {
    const output = document.querySelector('div#output')
    const numberList = document.querySelector('select#number-list')
    numbers.splice(0,numbers.length)
    numberList.innerHTML = ''
    output.innerHTML = ''
    document.querySelector('input#number').value = ''
    document.querySelector('input#number').focus()
}

function addNumber() {
    const output = document.querySelector('div#output')
    const number = Number.parseInt(document.querySelector('input#number').value)
    const numberList = document.querySelector('select#number-list')
    if ((number < 1) || (number > 100) || (document.querySelector('input#number').value === '') || (numbers.indexOf(number) !== -1)) {
        window.alert('Numero invalido ou já presente na lista')
    } else {
        let option = document.createElement('option')
        numbers.push(number)
        option.text = number
        numberList.appendChild(option)
        output.innerHTML = ''
    }
    document.querySelector('input#number').value = ''
    document.querySelector('input#number').focus()
}

function calculateNumbers() {
    const output = document.querySelector('div#output')
    let result
    let numbersAdd = 0
    if (numbers.length === 0) {
        window.alert('Coloque algum numero na lista')
    } else {
        numbers.sort()
        for (let x in numbers) {
            numbersAdd += numbers[x]
        }
        result = `
        <p>Ao todo, temos ${numbers.length} numeros cadastrados.</p>
        <p>O maior valor informado foi ${numbers[numbers.length - 1]}</p>
        <p>O menor valor informado foi ${numbers[0]}</p>
        <p>Somando todos os valores, temos ${numbersAdd}.</p>
        <p>A média dos valores digitados é ${numbersAdd / numbers.length}</p>
        `
        output.innerHTML = result
    }
}