
import {getInputDirection} from './input.js'

export const  SNAKE_SPEED=5;
const snakeBody = [{ x: 10, y: 11 }]
let newSegments = 0

export function update(){
    addsegment();
    const inputDirection = getInputDirection();
    //actulley this func update the snake position and we think snake is moving
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        //the last positon add to array
        snakeBody[i + 1] = { ...snakeBody[i] }
      }
         snakeBody[0].x += inputDirection.x 
         snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
      const snakeElement = document.createElement('div')
      snakeElement.style.gridRowStart = segment.y
      snakeElement.style.gridColumnStart = segment.x
      snakeElement.classList.add('snake')
      gameBoard.appendChild(snakeElement)
    })
  }
//thatis fun add a food to snake  i mean add amount(newfood) to snake 
//this for eat food
  export function expandSnake(amount){
    newSegments += amount
  }
//check the snake position when the position(foodpos) equal to segment run the equalpositions
//eat food
  export function onsnake(position ,{ ignoreHead = false } = {}){
    return snakeBody.some((segment ,index)=>{
        if(ignoreHead && index===0) return false
        return  equalPositions(segment, position)

    })
  }
  export function getSnakeHead(){
        return    snakeBody[0]
  }
  //if head of snack impact to itself
  export function snakeIntersection() {
    return onsnake(snakeBody[0], { ignoreHead: true })
  }
//eating food
function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
  }
//add food to snake
  function addsegment(){
    for(let i=0 ; i< newSegments; i++){
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }
        newSegments=0;
  }