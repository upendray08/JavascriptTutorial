const red = document.querySelector('.red')
const black = document.querySelector('.black')
const blue = document.querySelector('.blue')
const yellow = document.querySelector('.yellow')

const getrgb = (selected) => {
  return window.getComputedStyle(selected).backgroundColor
}

// const magicColor = (element, color) => {
//   return (element.style.backgroundColor = color)
// }
var color = getrgb(yellow)
blue.addEventListener('mouseenter', () => {
  black.style.backgroundColor = color
})
