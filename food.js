import { expandSnake, onsnake } from "./snake.js"
import { randomGridPosition } from "./grid.js";

 let food=getRandomFoodPosition();
 //تعداد اضافه شدن مربع ها به مار
 const EXPANSION_RATE = 5

export function update(){
    if(onsnake(food)){
        //یدونه یدونه به ماراضافه شود
        expandSnake(EXPANSION_RATE)
        food=getRandomFoodPosition();
    }
}
export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
  }
  //get random position of food
  function getRandomFoodPosition(){
    let newFoodPosition
    //درحالی که غذای جدید هرگزخالی نیست وهرگزروی مارقرارنمیگیرد پوزیشن جدید بگیرد
    while(newFoodPosition == null || onsnake(newFoodPosition)){
        newFoodPosition=randomGridPosition();
    }
    return newFoodPosition
  }