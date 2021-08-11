function counting() {
    const output = document.querySelector('div#output')
    const start = Number.parseInt(document.querySelector('input#start').value)
    const end = Number.parseInt(document.querySelector('input#end').value)
    let step = Number.parseInt(document.querySelector('input#step').value)
    let result = ''

    console.log(start, end, step)

    if((start != NaN) && (end != NaN) && (step != NaN)) {
        if (step <= 0) {
            alert('O passo será considerado como 1, pois o que você colocou é invalido')
            step = 1  
        } 
        for (let x = start;x <= end; x += step) {
            result += `${x} ➔ `
        }
        result += '✔'
    } else {
        alert('Valores Invalidos')
    }

    output.innerHTML = result
}