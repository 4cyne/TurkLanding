export const burgerMenu = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.getElementById('burger-button')
    const menuContainer = document.createElement('div')
    menuContainer.className = 'header__menu-container'
    menuContainer.style.display = 'none'

    const elementsToMove = [
      document.querySelector('.header__row_list'),
      document.querySelector('.header__row_button'),
      document.querySelector('.header__row_wrapper'),
      document.querySelector('.header__row_icons'),
    ]

    elementsToMove.forEach((el) => {
      if (el) {
        const clone = el.cloneNode(true)
        menuContainer.appendChild(clone)

        if (el.id === 'open-modal') {
          clone.addEventListener('click', () => {
            document.querySelector('.overlay').classList.add('active')
          })
        }
      }
    })

    document.body.appendChild(menuContainer)

    burgerButton.addEventListener('click', function () {
      this.classList.toggle('active')
      menuContainer.classList.toggle('active')

      if (menuContainer.classList.contains('active')) {
        menuContainer.style.display = ''
      } else {
        menuContainer.style.display = 'none'
      }

      document.body.style.overflow = menuContainer.classList.contains('active')
        ? 'hidden'
        : ''
    })
  })
}
