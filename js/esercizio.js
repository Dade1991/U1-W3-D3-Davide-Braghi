const myListForm = document.getElementById(`new-list`)

myListForm.addEventListener(`submit`, (e) => {
  e.preventDefault()
  //recupero il mio riferimento
  const itemInput = document.getElementById(`itemText`)
  // estrapolo il testo dentro alla label inserito dall'utente
  const providedText = {
    itemText: itemInput.value,
  }
  // console.log(`ok`, itemInput.value)
  // creo una <ul> vuota
  const itemBox = document.createElement(`ul`)
  // creo un classe per la <ul>
  itemBox.classList.add(`taskBox`)
  // riempio la mia <ul> con i dati di providedText
  itemBox.innerHTML = `
  <li onclick="underlineBox(event)" id="underlineButton">${providedText.itemText}</li>
  <button onclick="deleteBox(event)" id="deleteButton">Delete</button>
`
  // console.log(itemBox)

  // prendo ed APPENDO la mia <ul> al'interno del contenitore <div> `saved-list`, che mi ritornerà gli elementi aggiunti tutti in fila
  const newText = document.getElementById(`saved-list`)
  newText.appendChild(itemBox)
  // reset x svuotare i campi

  myListForm.reset()
})

const underlineBox = (e) => {
  e.target.style.textDecoration = `line-through`
  console.log(e)
}

const deleteBox = (a) => {
  a.target.parentElement.remove()

  // console.log(`giusto`, e.target)
}

// const underlineItem = document.getElementsByClassName(`taskBox >`)
// const uText = {
//   TaskBox: style.textDecoration = `line-through`
// }
