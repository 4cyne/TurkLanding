import { marginTopBody } from './scss/header/margin_top_body.js'
import { burgerMenu } from './scss/header/burger_menu.js'

marginTopBody()
burgerMenu()

const modal = document.querySelector('.overlay')
const openModalBtn = document.querySelector('#open-modal')
const closeModalBtn = document.querySelector('#modal-close')
modal.classList.add('noActive')

openModalBtn.addEventListener('click', () => {
  modal.classList.remove('noActive')
  modal.classList.add('active')
})

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('active')
  modal.classList.add('noActive')
})

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('active')
    modal.classList.add('noActive')
  }
})
