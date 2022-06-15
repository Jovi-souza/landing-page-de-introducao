
GetMenuMobile = () => {
    const menuHamburguer = document.querySelector(".menuHamburguer")
    const CloseMenuHamburguer = document.querySelector(".navBarMobile")

    menuHamburguer.classList.toggle("Hidden")
    CloseMenuHamburguer.classList.toggle("Hidden")
}

ArrowUp = () => {
    const ArrowUp = document.querySelector(".arrowUp")
    const ArrowDown = document.querySelector(".arrowDown")

    ArrowUp.classList.toggle("Hidden")
    ArrowDown.classList.toggle("Hidden")
}

GetLinksFeature = () => {
    const itensFeature = document.querySelector(".hidenItensFeatures")

    itensFeature.classList.toggle("Hidden")
    ArrowUp()
}

GetLinksCompany = () => {
    const itensCompany = document.querySelector(".hidenItensCompany")

    itensCompany.classList.toggle("Hidden")
    ArrowDown()[1]
}
