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

  //  Trigger the game mechanics
  //  Change cell status to true and color to red on click
  function onClick(e) {
    console.log('all cells: ', allCells)
    for (let i = 0; i < allCells.length; i++) {
      let tableCell = allCells[i].cell
      let cellStatus = allCells[i].status

      if (e.target === tableCell) {
        cellStatus = true
      }
      if (cellStatus === true) {
        tableCell.style.backgroundColor = 'red'

        let neighbourNorthWest = allCells[i - 6]
        let neighbourNorth = allCells[i - 5]
        let neighbourNorthEast = allCells[i - 4]
        let neighbourEast = allCells[i + 1]
        let neighbourSouthEast = allCells[i + 6]
        let neighbourSouth = allCells[i + 5]
        let neighbourSouthWest = allCells[i + 4]
        let neighbourWest = allCells[i - 1]

        let neighbours = [
          neighbourNorthWest,
          neighbourNorth,
          neighbourNorthEast,
          neighbourEast,
          neighbourSouthEast,
          neighbourSouth,
          neighbourSouthWest,
          neighbourWest,
        ]

        // 1. Any live cell with fewer than two live neighbours dies (referred to as underpopulation or exposure).
        setTimeout(() => {
          for (let x = 0; x < neighbours.length; x++) {
            let neighbour = neighbours[x]
            console.log('neighbour: ', neighbour, x)
            if (neighbour.status === false) {
              tableCell.style.backgroundColor = 'white'
              cellStatus = false
            } else {
              console.error()
            }
          }
        }, 2000)
      } else {
        console.error()
      }
    }
  }
}

gameTrigger()
