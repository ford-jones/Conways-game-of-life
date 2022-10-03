/*---------------------- RULES ------------------------*/
// Any live cell with fewer than two live neighbours dies (referred to as underpopulation or exposure).
// Any live cell with more than three live neighbours dies (referred to as overpopulation or overcrowding).
// Any live cell with two or three live neighbours lives, unchanged, to the next generation.
// Any dead cell with exactly three live neighbours will come to life.

export default function gameTrigger() {
  const cells = document.getElementsByTagName('td')
  let cellArr = [...cells]

  //  Give each "innactive" cell a boolean value of false
  let allCells = cellArr.map((innactiveCell) => {
    return {
      cell: innactiveCell,
      status: false,
    }
  })

  document.addEventListener('click', onClick)

  //  Changes the color of a table cell to red on click
  function onClick(e) {
    console.log('innactive cells: ', allCells)
    for (let i = 0; i < allCells.length; i++) {
      let selectedCell = allCells[i].cell
      if (e.target === selectedCell) {
        console.log('selected cell: ', selectedCell, allCells[i].status, i)
        selectedCell.style.backgroundColor = 'red'
        allCells[i].status = true
      } else {
        console.error()
      }

      setTimeout(() => {
        for (let z = 0; z < allCells.length; z++) {
          if (allCells[z].status === true) {
            allCells[z - 2].cell.style.backgroundColor = 'red'
            allCells[z - 2].status = true
          } else {
            console.error()
          }
        }
      }, 5000)
    }
  }
}

gameTrigger()
