function maxDate() {
    const time = new Date()
    const year = time.getFullYear()
    const yearinput = document.querySelector(`input#txtyear`)
    yearinput.max = year
    yearinput.min = 1850
}

function verify() {
    const time = new Date()
    const year = time.getFullYear() 
    const formYear = document.querySelector(`input#txtyear`).value
    const formSex = document.getElementsByName('gender')
    const output = document.querySelector('div#output')
    const img = document.createElement('img')
    let gender
    let ageGroup
    let calcAge
    let etc
    if ((Number.parseInt(formYear) > year) || (Number.parseInt(formYear) < 1850) || (formYear === '')) {
        alert('[Erro] Numero invalido, corrija-o antes de continuar')
        calcAge = null
    } else {
        const age = year - Number.parseInt(formYear) 
        if (formSex[0].checked) {
            gender = 'male'
            gender_ptBR = 'homem' 
            etc = ''
        } else {
            gender = 'female'
            gender_ptBR = 'mulher' 
            etc = 'a'
        }

        if (age <= 9) {
            ageGroup = 'baby'
        } else if (age <= 17) {
            ageGroup = 'teenager'
        } else if (age <= 50) {
            ageGroup = 'adult'
        } else {
            ageGroup = 'elderly'
        }

        calcAge = (`<p>Detectado um${etc} ${gender_ptBR} de ${age} anos de idade</p>`)
        
        img.setAttribute('src', `./images/${ageGroup}-${gender}.png`)
        img.setAttribute('alt', `${ageGroup} ${gender}`)
    }
    
    if (calcAge) {
        output.innerHTML = calcAge
        output.appendChild(img)
    }

}
