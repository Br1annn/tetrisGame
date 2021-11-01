document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let sqaures = Array.from(document.querySelectorAll('.grid div'))
    const scoreDisplay = document.querySelector('#score')
    const startBtn = document.querySelector('#start-button')
    const width = 10
    let nextRandom = 0
    let timerId
    let score = 0
    const colors = [
        'orange',
        'red',
        'purple',
        'green',
        'blue'
    ]

    //Shape values

    const lTetris = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2+2]
    ]

    const zTetris = [
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1],
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1]
    ]

    const tTetris = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
    ]

    const oTetris = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ]

    const iTetris = [
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3] 
    ]

    const tetrisShapes = [lTetris, zTetris, tTetris, oTetris,iTetris]

    let currentPosition = 4
    let currentRotation = 0

    console.timeLog(tetrisShapes[0][0])

    //random tetris shape
    let random = Math.floor(Math.random()*tetrisShapes.length)
    let current = tetrisShapes[random][currentRotation]

    //draws shape
    function draw() {
        current.forEach(index => {
            sqaures[currentPosition+index].classList.add('tetromino')
            sqaures[currentPosition+index].style.backgroundColor = colors[random]
        })
    }

    //undraws shape
    function undraw() {
        current.forEach(index => {
            sqaures[currentPosition+index].classList.remove('tetromino')
            sqaures[currentPosition+index].style.backgroundColor = ''
        })
    }

    //key code functions
    function control(e){
        if(e.keyCode === 37){
            moveLeft()
        } else if(e.keyCode === 38) {
            rotate()
        } else if(e.keyCode === 39) {
            moveRight()
        } else if(e.keyCode === 40) {
            moveDown()
        }
    }

    document.addEventListener('keyup', control)

    //down function
    function moveDown(){
        undraw()
        currentPosition+=width
        draw()
        freeze()
    }

    //freeze function
    function freeze() {
        if (current.some(index=>sqaures[currentPosition+index+width].classList.contains('taken'))) {
            current.forEach(index => sqaures[currentPosition+index].classList.add('taken'))
            //new tetro
            random = nextRandom
            nextRandom = Math.floor(Math.random() * tetrisShapes.length)
            current = tetrisShapes[random][currentionRotation]
            currentPosition = 4
            draw()
            displayShape()
            addScore()
            gameOver()
        }
    }

    //left function + edge check
    function moveLeft(){
        undraw()
        const leftEdge = current.some(index => (currentPosition+index)%width===0)
        if(!leftEdge)currentPosition -=1
        if(current.some(index=>sqaures[currentPosition+index].classList.contains('taken'))){
            currentPosition +=1
        }
        draw()
    }

    //right function + edge check
    function moveRight(){
        undraw()
        const rightEdge = current.some(index => (currentPosition+index)%width===0)
        if(!rightEdge)currentPosition +=1
        if(current.some(index=>sqaures[currentPosition+index].classList.contains('taken'))){
            currentPosition -=1
        }
        draw()
    }

    //rotation of shapes near edge
    function rightCheck(){
        return current.some(index=>(currentPosition+index+1)%width===0)
    }
    function leftCheck(){
        return current.some(index=>currentPosition+index)%width===0
    }

    function checkRotatedPos(P){
        P = P || currentPosition
        if ((P+1)%width<4){
            if(rightCheck()){
                currentPosition+=1
                checkRotatedPos(P)
            }
        }
        else if(P%width>5){
            if(leftCheck()){
                currentPosition -=1
            checkRotatedPos(P)
            }
        }
    }
    
    //shape rotation
    function rotate(){
        undraw()
        currentRotation ++
        if(currentRotation === current.length) {
            currentRotation = 0
        }
        current = tetrisShapes[random][currentRotation]
        checkRotatedPos()
        draw()
    }

    //show next tetro
    const displaySquares = document.querySelectorAll('.mini-grid div')
    const displayWidth = 4
    const displayIndex = 0 

    //tetro no rotation
    const upNextTetrominoes = [
        [1, displayWidth+1, displayWidth*2+1, 2], //lTetromino
        [0, displayWidth, displayWidth+1, displayWidth*2+1], //zTetromino
        [1, displayWidth, displayWidth+1, displayWidth+2], //tTetromino
        [0, 1, displayWidth, displayWidth+1], //oTetromino
        [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1] //iTetromino
      ]

    //display tetro shape
    function displayShape(){
        displaySquares.forEach(square => {
            square.classList.remove('tetromino')
            square.style.backgroundColor = ''
        })
        upNextTetrominoes[nextRandom].forEach(index => {
            displaySquares[displayIndex+index].classList.add('tetromino')
            displaySquares[displayIndex+index].style.backgroundColor = color[nextRandom]
        })
    }

    //funtional button
    startBtn.addEventListener('click', ()=>{
        if(timerId){
            clearInterval(timerId)
            timerId = null
        } else{
            draw()
            timerId = setInterval(moveDown, 1000)
            nextRandom = Math.floor(Math.random()*tetrisShapes.length)
            displayShape
        }
    })

    //score
    function addScore(){
        for (let i=0; i <199; i+=width){
            const row = [i,i+1,i+2,i+3,i+4,i+5,i+6,i+7,i+8,i+9]

            if(row.every(index => sqaures[index].classList.contains('taken'))){
                score +=10
                scoreDisplay.innerHTML = score
                row.forEach(index => {
                sqaures[index].classList.remove('taken')
                sqaures[index].classList.remove('tetromino')
                sqaures[index].style.backgroundColor = ''
                })
                const sqauresRemoved = sqaures.splice(i,width)
                sqaures = sqauresRemoved.concat(sqaures)
                sqaures.forEach(call => grid.appendChild(cell))
            }
        }
    }
    
    //end game
    function gameOver() {
        if(current.some(index => sqaures[currentPosition+index].classList.contains('taken'))){
            scoreDisplay.innerHTML = 'end'
            clearInterval(timerId)
        }
    }
})