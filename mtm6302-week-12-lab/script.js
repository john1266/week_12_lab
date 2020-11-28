const $HamburgerButton = document.getElementById('Hamburger-button')
const $nav = document.getElementById('nav')

let menuToggle = false

$HamburgerButton.addEventListener('click', function (){


    if (menuToggle === false){
        $nav.style.display = 'block'
        menuToggle = true
} else if (menuToggle === true){
    $nav.style.display = 'none'
    menuToggle = false
}

}
)

window.addEventListener('resize', function(){


    if (window.innerWidth >= 768){
        $nav.style.display = 'none'
        menuToggle = false

    }

})