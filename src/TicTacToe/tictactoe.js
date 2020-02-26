// player clicks square
// change 'x' to 'o'
var previousPlay
function addGamePiece (selectedElement) {
  console.log ('selectedElement', selectedElement)
  console.log ('selectedElement.innerText', selectedElement.innerText)
  //creating element
  var xo =document.createElement('h1')
  if (previousPlay === 'X') {
    xo.innerText = '0'
  } else {
    xo.innerText = 'X'
  }
  // add text to element
  xo.innerText = 'X'
  selectedElement.appendChild(xo)
}