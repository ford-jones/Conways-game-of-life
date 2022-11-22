/*---------------------- RULES ------------------------*/
// Any live cell with fewer than two live neighbours dies (referred to as underpopulation or exposure).
// Any live cell with more than three live neighbours dies (referred to as overpopulation or overcrowding).
// Any live cell with two or three live neighbours lives, unchanged, to the next generation.
// Any dead cell with exactly three live neighbours will come to life.
function gameInit() {
  const table = document.createElement('table')
  table.id = 'table'
  const tableBody = document.createElement('tbody')

  for (let i = 0; i < 10; i++) {
    const tableRow = document.createElement('tr')

    for (let j = 0; j < 10; j++) {
      const tableCell = document.createElement('td')
      tableCell.id = 'tableCell'

      const cellText = document.createTextNode('')
      tableCell.appendChild(cellText)
      tableRow.appendChild(tableCell)
    }

    tableBody.appendChild(tableRow)
  }

  table.appendChild(tableBody)

  document.body.appendChild(table)

  const button = document.createElement('button')
  button.innerHTML = 'start'
  button.id = 'startButton'

  document.body.appendChild(button)
}

gameInit()

export default function gameTrigger() {
  const cells = document.getElementsByTagName('td')
  let cellArr = [...cells]

  let allCells = cellArr.map((foundCell, i) => {
    return {
      cell: foundCell,
      status: false,
      id: i,
    }
  })

  document.addEventListener('click', onClick)

  function onClick(e) {
    for (let i = 0; i < allCells.length; i++) {
      let checkForInt = allCells[i].id / 10

      if (
        (allCells[i].id >= 0 && allCells[i].id <= 9) ||
        Number.isInteger(checkForInt) ||
        allCells[i].id === 19 ||
        allCells[i].id === 29 ||
        allCells[i].id === 39 ||
        allCells[i].id === 49 ||
        allCells[i].id === 59 ||
        allCells[i].id === 69 ||
        allCells[i].id === 79 ||
        allCells[i].id === 89 ||
        allCells[i].id === 99 ||
        (allCells[i].id >= 90 && allCells[i].id <= 99)
      ) {
        allCells[i].status = false
        allCells[i].cell.style.backgroundColor = 'black'
      }
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

      let liveCells = allCells.filter((x) => {
        return x.status === true
      })

      let deadCells = allCells.filter((z) => {
        return z.status === false
      })

      // eslint-disable-next-line no-inner-declarations
      function startGame() {
        setInterval(() => {
          liveCells.forEach((y) => {
            let findNW = y.id - 11
            let findN = y.id - 10
            let findNE = y.id - 9
            let findE = y.id + 1
            let findSE = y.id + 11
            let findS = y.id + 10
            let findSW = y.id + 9
            let findW = y.id - 1

            let NW = allCells.find((x) => {
              return x.id === findNW
            })
            let N = allCells.find((x) => {
              return x.id === findN
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

            let trueNeighbours = neighbours.filter((n) => {
              if (n === undefined) {
                n = { cell: null, status: false, id: null }
              }
              return n.status === true
            })
            if (trueNeighbours.length >= 2) {
              // console.log('living: ', y)
              y.status = true
            }
            if (
              trueNeighbours.length < 2 ||
              trueNeighbours.length > 3 ||
              trueNeighbours.length === 0
            ) {
              y.status = false
              // console.log('dead: ', y)
            }
            if (y.status === false) {
              y.cell.style.backgroundColor = 'white'
            }
          })

          deadCells.forEach((y) => {
            let findNW = y.id - 11
            let findN = y.id - 10
            let findNE = y.id - 9
            let findE = y.id + 1
            let findSE = y.id + 11
            let findS = y.id + 10
            let findSW = y.id + 9
            let findW = y.id - 1

            let NW = allCells.find((x) => {
              return x.id === findNW
            })
            let N = allCells.find((x) => {
              return x.id === findN
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

            let trueNeighbours = neighbours.filter((n) => {
              if (n === undefined) {
                n = { cell: null, status: false, id: null }
              }
              return n.status === true
            })
            if (trueNeighbours.length === 3) {
              y.status = true
              // console.log('living: ', y)
            }
          })
        }, 1000)
      }
      const startButton = document.getElementById('startButton')
      startButton.addEventListener('click', startGame)
    }
  }
}

gameTrigger()
