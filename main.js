/**
 * Toggle navigation menu
 */
const menu = document.querySelector('button')

menu.addEventListener('click', () => {
    const navbarMenu = document.querySelector('.navbar-menu')

    if (navbarMenu.style.display === 'flex') {
        navbarMenu.style.display = 'none'
    } else {
        navbarMenu.style.display = 'flex'
    }
})