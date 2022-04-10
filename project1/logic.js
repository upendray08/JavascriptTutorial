const courses = [
  { name: 'react-js', price: 9.2 },
  { name: 'angular-js', price: 3.2 },
  { name: 'c++', price: 5.3 },
]
var generateList= () => {
  const ul = document.querySelector('.unorder-list')
  //   console.log(ul)
  ul.innerHTML = ''
  courses.forEach((course) => {
    const li = document.createElement('li')
    li.classList.add('course-list')
    const name = document.createTextNode(course.name)
    li.appendChild(name)
    // console.log(li);
    const span = document.createElement('span')
    span.classList.add('price-list')
    const value = document.createTextNode('$' + course.price)
    span.appendChild(value)
    // console.log(span);
    li.appendChild(span)
    console.log(li)
    ul.appendChild(li)
  })
  // console.log(ul);
}
window.addEventListener('load', generateList())
const btn = document.querySelector('.btn')
const btn1 = document.querySelector('.btn1')
btn.addEventListener('click', () => {
  courses.sort((a, b) => {
    return b.price - a.price
  })
  generateList()
})
btn1.addEventListener('click', () => {
  courses.sort((a, b) => {
    return a.price - b.price
  })
  generateList()
})
