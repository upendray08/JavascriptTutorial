const counter = document.getElementById('counter')
const follower = document.querySelector('#follow')

let count = Number(counter.innerHTML)
// let follow = follower.innerHTML;
setInterval(() => {
  if (count < 15000) {
    count++
    counter.innerHTML = count
  }
}, 1000)

setInterval(() => {
  follower.innerHTML = `my youtube followers are ${count}`
}, 5000)
