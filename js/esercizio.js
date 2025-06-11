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
  itemBox.classList.add(`task-box`)
  // riempio la mia <ul> con i dati di providedText
  itemBox.innerHTML = `
  <li>${providedText.itemText}</li>
  <button onclick="deleteBox(event)">Delete</button>
`
  // prendo ed APPENDO la mia <ul> aal'interno del contenitore <div> `saved-list`, che mi ritornerà gli elementi aggiunti tutti in fila
  const newText = document.getElementById(`saved-list`)
  newText.appendChild(itemBox)
  // reset x svuotare i campi
  myListForm.reset()
})

const deleteBox = (e) => {
  console.log(`giusto`, e.target)
  e.target.parentElement.remove()
}
