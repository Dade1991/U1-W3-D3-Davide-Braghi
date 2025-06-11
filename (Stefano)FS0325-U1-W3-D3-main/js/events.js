// queste sono funzioni collegate agli event listeners settati nel foglio HTML
// quando avete a disposizione l'elemento già nell'HTML, questo è il modo più facile!
// ricordatevi in HTML di invocare la vostra funzione con l'argomento "event" (deve
// chiamarsi "event", perchè è il nome di una risorsa riconosciuta in HTML)
// una volta che definite però la funzione collegata in JS, descrivete un parametro
// per poter ricevere quell'oggetto ma chiaramente potete chiamarlo come volete!

const buttonClick = function (e) {
  console.log('HAI CLICCATO IL BOTTONE!', e)
}

const buttonHover = function (e) {
  console.log('SEI PASSATO SOPRA AL BOTTONE', e)
}

const inputTyping = function (e) {
  console.log('HAI SCRITTO UNA LETTERA', e)
}

// ...ma fin'adesso abbiamo collegato degli event listeners solo in HTML! questo
// funziona quando l'elemento a cui associate la "trappola" è presente nel documento
// fin dal principio...

// creiamo ora un bottone interamente in JS e aggiungiamolo alla pagina
const createButtonInJS = function () {
  // creiamo un bottone neutro senza niente
  const newButton = document.createElement('button') // <button></button>
  newButton.innerText = 'CREATO IN JS' // <button>CREATO IN JS</button>
  // è arrivato ora il momento di assegnargli un event listener, per
  // poter ascoltare magari un evento di "click"
  newButton.addEventListener('click', (e) => {
    console.log('hai cliccato un bottone generato da JS!', e)
  })
  // il bottone è finito! ...ma non è ancora inserito fisicamente da nessuna parte
  // nella pagina :(
  // troviamogli un genitore:
  const contenitore = document.getElementById('btn-container')
  // inseriamolo come ultimo figlio di questo contenitore
  contenitore.appendChild(newButton)
}

createButtonInJS()

// creiamo dinamicamente un orso, gli diamo tutti gli attributi necessari
// width; height; alt; anche degli event listeners
// e infine lo appendiamo nella pagina

const createBear = function () {
  const img = document.createElement('img') // <img />
  // src
  img.setAttribute('src', 'https://placebear.com/300/300') // <img src="..." />
  // alt
  img.setAttribute('alt', 'Immagine di orso preso dal web')

  // inseriamo un event listener in grado di ascoltare il puntatore del mouse sopra l'img
  img.addEventListener('mouseenter', (e) => {
    // vorrei ingrandire un pochino l'orso
    img.style.transform = 'scale(1.1)'
  })

  img.addEventListener('mouseleave', (e) => {
    // vorrei rimpicciolire un pochino l'orso
    img.style.transform = 'scale(1.0)'
  })

  img.addEventListener('click', buttonClick) // questo è un RIFERIMENTO ad una
  // funzione già esistente! -non ci vanno le tonde-

  // inseriamo l'orso alla fine del main
  document.getElementsByTagName('main')[0].appendChild(img)
}

createBear()
