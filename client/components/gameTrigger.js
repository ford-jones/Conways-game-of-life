/*---------------------- RULES ------------------------*/
// Any live cell with fewer than two live neighbours dies (referred to as underpopulation or exposure).
// Any live cell with more than three live neighbours dies (referred to as overpopulation or overcrowding).
// Any live cell with two or three live neighbours lives, unchanged, to the next generation.
// Any dead cell with exactly three live neighbours will come to life.

export default function gameTrigger() {
  const cells = document.getElementsByTagName('td')
  let cellArr = [...cells]
  // let cellStatus = false
  document.addEventListener('click', onClick)

  //  Changes the color of a table cell to red on click
  function onClick(e) {
    for (let i = 0; i < cellArr.length; i++) {
      let cell = cellArr[i]
      if (e.target === cell) {
        console.log('selected cell: ', cell)
        console.log('index of selected cell: ', i)
        cell.style.backgroundColor = 'red'
      } else {
        console.error()
      }
    }

    //  Get the clicked cells into an array
    let clickedCells = cellArr.filter((clicked) => {
      return clicked.style.backgroundColor === 'red'
    })
    // console.log('clicked cells: ', clickedCells)

    // Give each "active" cell a boolean value of true
    let liveCells = clickedCells.map((activeCell) => {
      return {
        cell: activeCell,
        status: true,
      }
    })
    console.log('activated cells: ', liveCells)

    //  Give each "innactive" cell a boolean value of false
    let deadCells = cellArr.map((innactiveCell) => {
      return {
        cell: innactiveCell,
        status: false,
      }
    })
    console.log('innactive cells: ', deadCells)

    // check each cell for a boolean value
    for (let z = 0; z < liveCells.length; z++) {
      let checkCell = liveCells[z]
      if (checkCell.status === true) {
        console.log('if true: ', checkCell, z)
      } else if (checkCell.status === false) {
        console.log('if false: ', !checkCell)
      } else {
        console.error()
      }
    }
  }
}

gameTrigger()
