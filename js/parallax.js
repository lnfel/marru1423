// https://codepen.io/arnau-cm/pen/zYGYxGY?editors=0110
// https://camillemormal.com/
// https://codepen.io/Hyperplexed/full/MWXBRBp
const parallax = document.querySelector('#parallax')
console.log(parallax)

window.onmousedown = event => {
    parallax.dataset.mouseDownAt = event.clientX

    console.log('Mouse at: ', parallax.dataset.mouseDownAt)
}

window.onmousemove = event => {
    if (parallax.dataset.mouseDownAt === "0") return

    const mouseDelta = parseFloat(parallax.dataset.mouseDownAt) - event.clientX
    const maxDelta = window.innerWidth / 2
    // const maxDelta = parallax.clientWidth / 2
    const percentage = (mouseDelta / maxDelta) * -100
    const nextPercentage = Math.min(Math.max(parseFloat(parallax.dataset.prevPercentage) + percentage, -100), 0)

    parallax.dataset.percentage = nextPercentage

    // parallax.style.transform = `translate(${nextPercentage}%, -50% )`
    parallax.animate({
        transformOrigin: 'center',
        left: `${Math.abs(nextPercentage)}%`,
        transform: `translate(${nextPercentage}%, -50% )`
    }, { duration: 1200, fill: "forwards" })

    for(const image of parallax.getElementsByClassName('parallax-img')) {
        // image.style.objectPosition = `${nextPercentage + 100}% 50%`
        image.animate({
            objectPosition: `${nextPercentage + 100}% center`
        }, { duration: 1200, fill: "forwards" })
    }

    // console.log('Mouse delta: ', mouseDelta)
    // console.log('Max delta: ', maxDelta)
    // console.log('Percentage: ', percentage)
    console.log('Next percentage:', nextPercentage)
}

window.onmouseup = () => {
    parallax.dataset.mouseDownAt = "0"
    parallax.dataset.prevPercentage = parallax.dataset.percentage
}