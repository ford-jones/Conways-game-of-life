
export default function gameTrigger() {

  const cells = document.getElementsByTagName('td')
  let cellArr = []
  let cellStatus = false
  document.addEventListener('click', onClick)

  //  Changes the color of a table cell to red on click
  function onClick(e) {
    console.log('cell array: ', cellArr)
    
    for(let i = 0; i < cells.length; i++) {
      let cell = cells[i]
      if(e.target === cell) {
        console.log('selected cell: ', cell)
        console.log(i) 
        cell.style.backgroundColor = 'red'

      } else {
        console.error();
      }
    }

    //  Loop through the table and find the cells that are red, put them into a new array
    function checkStatus() {
      let getCells = document.getElementsByTagName('td')
      for(let j = 0; j < getCells.length; j++) {
        let activeCell = getCells[j]
        if(activeCell.style.backgroundColor === 'red') {
          let activeCells = {...cellArr, activeCell}
          console.log('activeCells hit!: ', activeCells, j, typeof activeCells);
          cellStatus = true
        } else {
          console.error()
        }
      }
    }
    checkStatus()
  }

}


gameTrigger()