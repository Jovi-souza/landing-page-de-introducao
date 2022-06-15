
GetMenuMobile = () => {
    const menuHamburguer = document.querySelector(".menuHamburguer")
    const CloseMenuHamburguer = document.querySelector(".navBarMobile")

    menuHamburguer.classList.toggle("Hidden")

    CloseMenuHamburguer.classList.toggle("Hidden")
}

ArrowFeatures = () => {
    const ArrowUp = document.querySelector(".arrowUpFeatures")
    const ArrowDown = document.querySelector(".arrowDownFeatures")

    ArrowUp.classList.toggle("Hidden")
    ArrowDown.classList.toggle("Hidden")
}

ArrowCompany = () => {
    const ArrowUp = document.querySelector(".arrowUpCompany")
    const ArrowDown = document.querySelector(".arrowDownCompany")

    ArrowUp.classList.toggle("Hidden")
    ArrowDown.classList.toggle("Hidden")
}


GetLinksFeature = () => {
    const itensFeature = document.querySelector(".hidenItensFeatures")

    itensFeature.classList.toggle("Hidden")
    ArrowFeatures()
}

GetLinksCompany = () => {
    const itensCompany = document.querySelector(".hidenItensCompany")

    itensCompany.classList.toggle("Hidden")
    ArrowCompany()
}
