// dobbiamo intervenire via JS per recuperare
// i dati inseriti nel form. A partire da essi
// ad ogni invio creeremo una card nella sezione
// sottostante con i dati inseriti

// devo INTERVENIRE nell'evento di SUBMIT del form
// recupero un riferimento e invoco preventDefault()
const myForm = document.getElementById('new-contact-form')

myForm.addEventListener('submit', (e) => {
  // intervengo sul comportamento di default
  e.preventDefault()
  // ora faccio quello che voglio!

  //   mi recupero i riferimenti ai 3 input:
  const firstnameInput = document.getElementById('firstname')
  const lastnameInput = document.getElementById('lastname')
  const phoneInput = document.getElementById('phone')

  const contact = {
    firstname: firstnameInput.value,
    lastname: lastnameInput.value,
    phone: phoneInput.value,
  }

  console.log('INFO RACCOLTE', contact)

  // bene! ora utilizziamo questa info per creare
  // una "card" nel nostro documento!

  //   1) creo un div vuoto
  const card = document.createElement('div')
  //   2) lo "abbellisco" con una classe CSS
  card.classList.add('contact-card')
  //   3) ora RIEMPIO il mio div con i dati di
  //   contact
  card.innerHTML = `
    <p>${contact.firstname} ${contact.lastname}</p>
    <p>${contact.phone}</p>
    <button onclick="deleteCard(event)">ELIMINA</button>
  `

  //   la card ora è completa:
  {
    /* <div class="contact-card">
     <p>Pupo Pupo</p>
     <p>123123123</p>
    </div> */
  }

  // 4) infine APPENDO la mia card al contenitore nell'HTML
  const container = document.getElementById('saved-contacts')
  container.appendChild(card)

  // reset form
  myForm.reset()
})

const deleteCard = function (e) {
  console.log('HAI CLICCATO QUESTO TASTO ELIMINA', e.target)
  // e.target.remove()
  // e è l'evento che si è scatenato al click
  // e.target è l'elemento che ha dato origine all'evento -> IL BUTTON
  console.log(e.target.parentElement) // <-- QUESTA È LA CARD!!
  // se volete indagate su un metodo che si chiama "closest()"
  e.target.parentElement.remove() // elimina la card!
}
