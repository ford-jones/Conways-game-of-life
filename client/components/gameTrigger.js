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
        // console.log('selected cell: ', cell)
        console.log('index of selected cell: ', i)
        cell.style.backgroundColor = 'red'
      } else {
        console.error()
      }
    }

    //  Get the clicked cells into an array
    let clickedCells = cellArr.filter((x) => {
      return x.style.backgroundColor === 'red'
    })
    console.log('clicked cells: ', clickedCells)

    // Give each "active" cell a boolean value of true
    let activeCells = clickedCells.map((activeCell) => {
      return {
        activeCell,
        status: true,
      }
    })
    console.log('activated cells: ', activeCells)
  }
}

gameTrigger()
