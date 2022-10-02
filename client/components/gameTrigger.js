
export default function gameTrigger() {
let cells = document.getElementsByTagName('td')
console.log('from document (unlooped): ', cells)

  for(let i = 0; i < cells.length; i++) {
    let cell = cells[i]
    console.log('looped: ', cell)
    console.log('index: ', i)
  }

}
gameTrigger()