
GetMenuMobile = () => {
    const menuHamburguer = document.querySelector(".menuHamburguer")
    const CloseMenuHamburguer = document.querySelector(".navBarMobile")

    menuHamburguer.classList.toggle("Hidden")
    CloseMenuHamburguer.classList.toggle("Hidden")
}

ArrowUpDown = () => {
    const ArrowUp = document.querySelector(".arrowUp")
    const ArrowDown = document.querySelector(".arrowDown")

    ArrowUp.classList.toggle("Hidden")
    ArrowDown.classList.toggle("Hidden")
}

GetLinksFeature = () => {
    const itensFeature = document.querySelector(".hidenItensFeatures")

    itensFeature.classList.toggle("Hidden")
    ArrowUpDown()
}

GetLinksCompany = () => {
    const itensCompany = document.querySelector(".hidenItensCompany")

    itensCompany.classList.toggle("Hidden")
    ArrowUpDown()
}
