let show = true

const homeNav = document.querySelector('.home-nav')
const menuHamburger = document.querySelector('.menu-hamburg')

menuHamburger.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial"
    homeNav.classList.toggle("on", show)

    show = !show
})
