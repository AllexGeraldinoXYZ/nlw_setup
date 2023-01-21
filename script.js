const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date()
    .toLocaleDateString("pt-br")
    .slice(
      0,
      -5
    ) /*new Date().toLocaleDataString('pt-br') registra o dia atual no padrão pt-br
    slice() função que corta conteudos da string*/
  const dayExists = nlwSetup.dayExists(today)
  if (dayExists) {
    alert("Dia já incluso ❌")
    return
  }
  nlwSetup.addDay(today)
  alert("Adcionado com sucesso ✅")
}

function save() {
  localStorage.setItem(
    /*Local storage armazena os dados no storage local do navegador */
    "NLWSetup@habits",
    JSON.stringify(nlwSetup.data)
  ) /*<--- JSON.stringfy(), transforma objetos em Strings*/
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
/*JSON.parse() transforma string em objetos*/
nlwSetup.setData(data)
nlwSetup.load()
