function createTimesTable() {
    const numb = Number(document.querySelector('input#num').value)
    const selTT = document.querySelector('select#selTimesTable')
    selTT.setAttribute('style', 'block')
    if (numb === NaN) {
        alert('Por favor digite um numero!')
    } else {
        selTT.innerHTML = null
        for(let x = 1; x <= 10; x++) {
            let option = document.createElement('option')
            option.text = `${numb} x ${x} = ${numb*x}`
            option.value = `tab${x}`
            selTT.appendChild(option)
        }
    }
}