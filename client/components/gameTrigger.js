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
      } else {
        console.error()
      }

      let locateClicks = allCells.filter((x) => {
        return x.status === true
      })

      // let neighbourNorthWest = allCells[i - 6]
      // let neighbourNorth = allCells[i - 5]
      // let neighbourNorthEast = allCells[i - 4]
      // let neighbourEast = allCells[i + 1]
      // let neighbourSouthEast = allCells[i + 6]
      // let neighbourSouth = allCells[i + 5]
      // let neighbourSouthWest = allCells[i + 4]
      // let neighbourWest = allCells[i - 1]

      // let neighbours = [
      //   neighbourNorthWest,
      //   neighbourNorth,
      //   neighbourNorthEast,
      //   neighbourEast,
      //   neighbourSouthEast,
      //   neighbourSouth,
      //   neighbourSouthWest,
      //   neighbourWest,
      // ]

      // eslint-disable-next-line no-inner-declarations
      function startGame() {
        let selectedCells = locateClicks.map((x) => {
          x.status === true
          return x
        })

        selectedCells.forEach((y) => {
          let findNW = y.id - 6
          let findN = y.id - 5
          let findNE = y.id - 4
          let findE = y.id + 1
          let findSE = y.id + 6
          let findS = y.id + 5
          let findSW = y.id + 4
          let findW = y.id - 1

          let N = allCells.find((x) => {
            return x.id === findN
          })
          let NW = allCells.find((x) => {
            return x.id === findNW
          })
          let NE = allCells.find((x) => {
            return x.id === findNE
          })
          let E = allCells.find((x) => {
            return x.id === findE
          })
          let SE = allCells.find((x) => {
            return x.id === findSE
          })
          let S = allCells.find((x) => {
            return x.id === findS
          })
          let SW = allCells.find((x) => {
            return x.id === findSW
          })
          let W = allCells.find((x) => {
            return x.id === findW
          })

          let neighbours = [NW, N, NE, E, SE, S, SW, W]
          console.log('neighbours: ', neighbours)
          console.log('selected cells: ', selectedCells)

          setInterval(() => {
            for (let z = 0; z < neighbours.length; z++) {
              let neighbour = neighbours[z]
              if (neighbour == undefined) {
                neighbour = { cell: null, status: false, id: null }
              }
              // if (2 > neighbour.status == true) {
              //   console.log('less than two neighbours are active')
              //   y.status = false
              // }
              if (2 <= neighbour.status === true) {
                console.log('2 or more neighbours are active')
                y.status = true
              }
              //   if (y.status == false) {
              //     y.cell.style.backgroundColor = 'white'
              //   }
              else {
                console.log('less than two neighbours are active')
                y.status = false
                y.cell.style.backgroundColor = 'white'
              }
            }
          }, 5000)
        })
      }
      const startButton = document.getElementById('startButton')
      startButton.addEventListener('click', startGame)
    }
  }
}
// }

gameTrigger()
