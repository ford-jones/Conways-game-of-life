
export default function gameTrigger() {

  const cells = document.getElementsByTagName('td')
  let cellArr = [...cells]
  let cellStatus = false
  document.addEventListener('click', onClick)

  //  Changes the color of a table cell to red on click
  function onClick(e) {
    
    for(let i = 0; i < cellArr.length; i++) {
      let cell = cellArr[i]
      if(e.target === cell) {
        console.log('selected cell: ', cell)
        console.log(i) 
        cell.style.backgroundColor = 'red'

      } else {
        console.error();
      }
    }

    //  Get the clicked cells into an array
    let activeCells = cellArr.filter((x) => {
      return x.style.backgroundColor === 'red'
    })
    console.log('active cells: ', activeCells);
  }

}


gameTrigger()