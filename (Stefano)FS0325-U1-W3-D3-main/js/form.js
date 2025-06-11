// il modo corretto di gestire un form è raccogliere i dati dell'utente quando
// il form sta venendo "INVIATO" (ovvero quando si scatena nel form un evento
// di "submit")

// quindi come prima cosa recuperiamo un RIFERIMENTO al form, e operiamo sul
// suo EVENTO di SUBMIT

// 1) recupero in qualche modo (a b c d e) un riferimento al form
const myForm = document.getElementById('main-form')
// 2) ora intervengo nell'evento di SUBMIT del form, per interagire quando l'utente
// preme il bottone di invio, oppure preme "enter" sulla tastiera
myForm.addEventListener('submit', (e) => {
  // al momento, il console dura una frazione di secondo e la pagina si aggiorna da sola
  // questo è dovuto dal fatto che, dall'alba di internet, i form in HTML hanno
  // un "comportamento predefinito"
  // FERMIAMO QUESTO COMPORTAMENTO DI DEFAULT
  e.preventDefault() // "STOPPATI"
  console.log('IL FORM È STATO INVIATO!')

  // cosa facciamo adesso?
  // prima di tutto collezioniamo i valori inseriti nei campi input!

  // prima recupero il RIFERIMENTO al singolo input
  const firstnameInput = document.getElementById('firstname')
  const lastnameInput = document.getElementById('lastname')
  const ageInput = document.getElementById('age')
  const emailInput = document.getElementById('email')
  const genderInput = document.getElementById('gender')
  const bioInput = document.getElementById('bio')

  // da ogni input, leggiamo il valore inserito dall'utente
  // per farlo, andiamo ad esplorare una loro proprietà che si chiama VALUE
  const firstname = firstnameInput.value // 'Stefano'
  const lastname = lastnameInput.value // 'Stefano'
  const age = ageInput.value // 'Stefano'
  const email = emailInput.value // 'Stefano'
  const gender = genderInput.value // 'Stefano'
  const bio = bioInput.value // 'Stefano'

  console.log('ECCO I DATI RACCOLTI', {
    nome: firstname,
    cognome: lastname,
    età: age,
    email: email,
    sesso: gender,
    biografia: bio,
  })

  // dati raccolti!
  // ora svuotiamo il form
  // modo lungo:
  // firstnameInput.value = ''
  // lastnameInput.value = ''
  // ...
  // modo furby:
  myForm.reset()
})
