const canvas = document.querySelector('#canvas');

const width = window.innerWidth * devicePixelRatio
const height = window.innerHeight * devicePixelRatio

canvas.width = width
canvas.height = height

const context = canvas.getContext('2d')
const fontSize = 20 * devicePixelRatio
const columnCount = Math.floor(width / fontSize)

const nextChar = new Array(columnCount).fill(0)

function draw() {
  context.fillStyle = 'rgba(240, 240, 240, 0.1)'
  context.fillRect(0, 0, width, height)
  for (let i = 0; i < columnCount; i++) {
    context.fillStyle = getRandomColor()
    const char = getRandomChar()
    context.font = `${fontSize}px "JetBrains Mono"`

    const x = i * fontSize
    const s = nextChar[i]
    const y = (s + 1) * fontSize
    context.fillText(char, x, y)

    if (y > height && Math.random() > 0.99) {
      nextChar[i] = 0
    }else {
      nextChar[i]++
    }
  }
}

function getRandomColor() {
  const colorList = [
    '#ff8c94',
    '#ffaaa6',
    '#ffd3b5',
    '#fecea8',
    '#dcedc2',
    '#fdffab'
  ]
  const number = Math.floor(Math.random() * colorList.length)
  return colorList[number]
}

function getRandomChar() {
  const s = "console.log(getRandomChar)"
  const number = Math.floor(Math.random() * s.length);
  return s[number];
}


draw()
setInterval(draw, 30)
