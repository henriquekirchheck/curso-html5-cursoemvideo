function createTimesTable() {
    const numb = Number(document.querySelector('input#num').value)
    const selTT = document.querySelector('select#selTimesTable')
    let result
    selTT.setAttribute('style', 'block')
    selTT.innerHTML = ''
    if (numb === NaN) {
        alert('Por favor digite um numero!')
    } else {
        for(let x = 1; x <= 10; x++) {
            result = numb * x
            console.log(`${numb} x ${x} = ${result}`)
            selTT.innerHTML += `<option>${numb} x ${x} = ${result}</option>`
        }
    }
}