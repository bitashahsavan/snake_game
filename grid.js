 let GRID_SIZE = 21


export function randomGridPosition(){
    return {
        //set a random number between 0 to 21
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    
      }
    
}
export function outsideGrid(position) {
    return (
        //if position of headsnake go out the grid less than 1 or more than 21
      position.x < 1 || position.x > GRID_SIZE ||
      position.y < 1 || position.y > GRID_SIZE
    )
  }