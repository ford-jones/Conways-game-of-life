
export default function gameTrigger() {
  document.addEventListener('click', onClick)
  
  //start game
  function onClick(e) {
  console.log('hit!')    
  let cells = document.getElementsByTagName('td')

  // console.log('from document (unlooped): ', cells)
  
    for(let i = 0; i < cells.length; i++) {
      let cell = cells[i]
      if(e.target === cell) {
        console.log(cell)
        console.log(i)
        cell.style.backgroundColor = 'red'
      } else {
        console.error();
      }
    }
}

}
gameTrigger()