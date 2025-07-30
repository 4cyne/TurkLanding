export const burgerMenu = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.getElementById('burger-button')
    const menuContainer = document.createElement('div')
    menuContainer.className = 'header__menu-container'

    // Элементы, которые нужно переместить в меню
    const elementsToMove = [
      document.querySelector('.header__row_list'),
      document.querySelector('.header__row_button'),
      document.querySelector('.header__row_wrapper'),
      document.querySelector('.header__row_icons'),
    ]

    // Добавляем элементы в контейнер меню в нужном порядке
    elementsToMove.forEach((el) => {
      if (el) menuContainer.appendChild(el.cloneNode(true))
    })

    // Добавляем контейнер меню в body
    document.body.appendChild(menuContainer)

    burgerButton.addEventListener('click', function () {
      this.classList.toggle('active')
      menuContainer.classList.toggle('active')

      // Блокируем прокрутку страницы при открытом меню
      document.body.style.overflow = menuContainer.classList.contains('active')
        ? 'hidden'
        : ''
    })
  })
}
