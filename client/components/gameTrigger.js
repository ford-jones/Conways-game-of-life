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

      let selectedCells = allCells.filter((x) => {
        return x.status === true
      })

      // eslint-disable-next-line no-inner-declarations
      function startGame() {
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

          setInterval(() => {
            let trueNeighbours = neighbours.filter((n) => n.status === true)
            if (trueNeighbours.length >= 2) {
              console.log('Has two or more active neighbours: ', y)
            }
            if (trueNeighbours.length < 2) {
              y.status = false
              console.log('Has less than two active neighbours: ', y)
            }
            if (y.status === false) {
              y.cell.style.backgroundColor = 'white'
            }
          }, 3000)
        })
      }
      const startButton = document.getElementById('startButton')
      startButton.addEventListener('click', startGame)
    }
  }
}
// }

gameTrigger()
