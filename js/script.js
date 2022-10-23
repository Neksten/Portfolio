// Burger
const menuBody = document.querySelector('.menu__body');
const iconMenu = document.querySelector('.icon-menu');

iconMenu.addEventListener('click', () => {
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
})

// scroll header
document.addEventListener('DOMContentLoaded', () => { 
    // DOM готов к взаимодейтсвию
    const onScrollHeader = () => { // объявляем основную функцию onScrollHeader
        const header = document.querySelector('.header') // находим header и записываем в константу
        let prevScroll = window.pageYOffset // узнаем на сколько была прокручена страница ранее
        let currentScroll // на сколько прокручена страница сейчас (пока нет значения)
        window.addEventListener('scroll', () => { // при прокрутке страницы
            currentScroll = window.pageYOffset // узнаем на сколько прокрутили страницу
            const headerHidden = () => header.classList.contains('header_hidden') // узнаем скрыт header или нет
            if (currentScroll > prevScroll && !headerHidden()) { // если прокручиваем страницу вниз и header не скрыт
                header.classList.add('header_hidden') // то скрываем header
 	        }
            if (currentScroll < prevScroll && headerHidden()) { // если прокручиваем страницу вверх и header скрыт
                header.classList.remove('header_hidden') // то отображаем header
            }
            prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент
        })
    }   
    onScrollHeader() // вызываем основную функцию onScrollHeader
});

// link scroll
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const blockID = anchor.getAttribute("href")
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}