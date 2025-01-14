//#1 make fuctions actullay get current time
//#2 any game has update func for update avery ms inthis game update position of snake
//#3 draw func is any things about longer or shorter snake and
//#4 make input.js for moving snake with arrow key 
//# make function for eat food actully when position of food and the head of snake get equal snake eat food 
//#5 add the food to snake body
//#6set the random position for food
//#7 check death function or game over 


//import js
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'
let lastRenderTime =0;
 let gameOver=false
 const gameBoard=document.getElementById('game-board')


function main(currentTime){
    if(gameOver){
        if (confirm('You lost. Press ok to restart.')) {
            //refresh the page to current page
            window.location = '/'
          }
        return 
    }
    
    // به مرورگر می‌گوید که می‌خواهید یک انیمیشن را اجرا کنید و از مرورگر درخواست 
    // که یک تابع مشخص را برای به‌روزرسانی یک انیمیشن قبل از رنگ‌آمیزی بعدی فراخوانی کند.
    window.requestAnimationFrame(main)
    const secondsSinceLastRender  =(currentTime - lastRenderTime) / 1000
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return
    lastRenderTime=currentTime;
  

    update();
    draw();
}
window.requestAnimationFrame(main);
//!functions
//any things about update snake and food
function update(){
    updateSnake()
    updateFood()
    checkDeath()
}

//any things about drawing food and snake
function draw(){
    //remove the ex grid so moving the snake
    gameBoard.innerHTML='';
    drawSnake(gameBoard);
    drawFood(gameBoard)
}

//if head of snake go out of the grid and impact to itself you dead
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
  }