// margin-top по высоте header
export const marginTopBody = () => {
  return document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header')
    document.body.style.marginTop = `${header.offsetHeight}px`
  })
}
