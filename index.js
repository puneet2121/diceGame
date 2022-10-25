let randomNumber1 = Math.ceil(Math.random() * 6)
let randomNumber2 = Math.ceil(Math.random() * 6)
console.log(randomNumber1)
console.log(randomNumber2)
if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = 'Player 2 won';
} else if (randomNumber2 > randomNumber1) {
  document.querySelector('h1').innerHTML = 'Player 1 won';
} else {
  document.querySelector('h1').innerText = 'Draw'
}
document.getElementsByTagName('img')[1].setAttribute('src',`./images/dice${randomNumber1}.png`)
document.getElementsByTagName('img')[0].setAttribute('src',`./images/dice${randomNumber2}.png`)