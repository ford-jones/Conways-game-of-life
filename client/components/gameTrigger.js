/*---------------------- RULES ------------------------*/
// Any live cell with fewer than two live neighbours dies (referred to as underpopulation or exposure).
// Any live cell with more than three live neighbours dies (referred to as overpopulation or overcrowding).
// Any live cell with two or three live neighbours lives, unchanged, to the next generation.
// Any dead cell with exactly three live neighbours will come to life.

export default function gameTrigger() {
  const cells = document.getElementsByTagName('td')
  let cellArr = [...cells]

  let allCells = cellArr.map((innactiveCell, i) => {
    return {
      cell: innactiveCell,
      status: false,
      id: i,
    }
  })

  document.addEventListener('click', onClick)

  function onClick(e) {
    console.log('all cells: ', allCells)

    for (let i = 0; i < allCells.length; i++) {
      if (e.target === allCells[i].cell) {
        allCells[i].status = true

        /*------Random cells-----*/

        // for (let j = 0; j < 5; j++) {
        //   let rng = Math.floor(Math.random() * allCells.length)
        //   let randomCells = allCells.find((x, i) => i === rng)

        //   randomCells.cell.style.backgroundColor = 'red'
        //   randomCells.status = true
        // }
        /*-----------------------*/
      }

      if (allCells[i].status === true) {
        allCells[i].cell.style.backgroundColor = 'red'

        // 1. Any live cell with fewer than two live neighbours dies (referred to as underpopulation or exposure).
      } else {
        console.error()
      }

      let selectedCells = allCells.filter((x) => {
        return x.status === true
      })
      console.log('plural: ', selectedCells)

      selectedCells.forEach((cell) => {
        let findNorth = cell.id - 5
        let northNeighbour = allCells.find((x) => {
          return x.id === findNorth
        })
        console.log('north: ', northNeighbour)
        console.log('singular: ', cell)
      })

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

      // eslint-disable-next-line no-inner-declarations
      function startGame() {
        setInterval(() => {
          for (let z = 0; z < neighbours.length; z++) {
            let neighbour = neighbours[z]
            if (neighbour == undefined) {
              neighbour = { cell: null, status: false, id: null }
            }
            console.log('neighbours: ', neighbours)
            if (2 <= neighbour.status == true) {
              allCells[i].status = true
            }
            if (allCells[i].status == false) {
              allCells[i].cell.style.backgroundColor = 'white'
            } else if (2 > neighbour.status == true) {
              allCells[i].status = false
            } else {
              console.error()
            }
          }
        }, 3000)
      }
      const startButton = document.getElementById('startButton')
      startButton.addEventListener('click', startGame)
    }
  }
}
// }

gameTrigger()
