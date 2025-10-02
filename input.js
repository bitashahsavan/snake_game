let inputDirection ={x:0 , y:0}
let lastInputDirection ={x:0 , y:0}
//وقتی ماردرحال حرکت است نمیتئاندتوی خودش برگردد درواقع مارازسمت سرخودش حرکت میکند 
//برای حال این مشکل ایف را اضافه میکنیم

//move the snake with arrowkey on keyboard
window.addEventListener('keydown' ,e=>{
    switch (e.key) {
        case 'ArrowUp':
            if(lastInputDirection.y !==0)break
            inputDirection={x:0 , y:-1}
            break
        case 'ArrowDown':
            if(lastInputDirection.y !==0)break

            inputDirection={x:0 , y:1}
            break
        case 'ArrowLeft':
            if(lastInputDirection.x !==0)break
            inputDirection={x:-1 , y:0}
            break
        case 'ArrowRight':
            if(lastInputDirection.x !==0)break
            inputDirection={x:1 , y:0}
            break
      
    }
})

 export function getInputDirection(){
    lastInputDirection=inputDirection
    return inputDirection
}