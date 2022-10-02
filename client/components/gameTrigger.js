
export default function gameTrigger() {

  const cells = document.getElementsByTagName('td')
  let activeCells = []
  let status = false

  //start game
  document.addEventListener('click', onClick)

  function onClick(e) {
    console.log('active cells: ', activeCells)
    console.log('hit!')    
  
    for(let i = 0; i < cells.length; i++) {
      let cell = cells[i]
      if(e.target === cell) {
        console.log(cell)
        console.log(i) 
        cell.style.backgroundColor = 'red'
      }
      if(cell.style.backgroundColor === 'red') {
        let activatedCells = [...activeCells, cell]
      } else {
        console.error();
      }
    }
  }

  // function checkStatus() {
  //   for(let i = 0; i < cells.length; i++) {
  //     let cell = cells[i]
  //     console.log('activated cells: ', [...activeCells, cell])
  //   }
  // }
  // checkStatus()

  // Discover the active cells and assign them to a variable so they can be accessed
  // let cellTest = document.getElementById('tableCell')
  // let cellStatus = cellTest.map((cell) => {
  //   console.log(cell)
  //   return cell.style.backgroundColor = 'red'
  // })

}


gameTrigger()