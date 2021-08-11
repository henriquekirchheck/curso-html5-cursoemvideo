function start() {
    const morning = ['./images/morning/morning1round.png', './images/morning/morning2round.png']
    const afternoon = ['./images/afternoon/afternoon1round.png', './images/afternoon/afternoon2round.png']
    const night = ['./images/night/night1round.png', './images/night/night2round.png']
    const ranImg = Math.round(Math.random())
    let src
    let alt
    let background
    const time = new Date()
    let hour = time.getHours()
    // hour = 18

    const divMsg = window.document.querySelector('div#msg')
    // const divImg = window.document.querySelector('div#img')
    const image = window.document.querySelector('img#img')

    divMsg.innerHTML = `Agora são ${hour} horas!`

    if (hour >= 6 && hour < 12) {
        src = morning[ranImg]
        alt = 'Dia de Manha'
        background = '#ffddc7'
    } else if (hour >= 12 && hour < 18) {
        src = afternoon[ranImg]
        alt = 'Dia de Tarde'
        background = '#e8914b'
    } else {
        src = night[ranImg]
        alt = 'Dia de Noite'
        background = '#3565af'
    }

    image.src = src
    image.alt = alt
    window.document.body.style.backgroundColor = background
}