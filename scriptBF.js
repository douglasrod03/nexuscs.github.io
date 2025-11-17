// Define a data final da contagem regressiva
// Termina em 17/11/2025 às 21:00
const dataFinal = new Date("2025-11-17T21:00:00").getTime()

// Função para atualizar o contador
function atualizarContador() {
  const agora = new Date().getTime()
  const diferenca = dataFinal - agora

  // Calcula dias, horas, minutos e segundos
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))
  const horas = Math.floor(
    (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60))
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000)

  // Atualiza os elementos HTML
  document.getElementById("days").textContent = dias.toString().padStart(2, "0")
  document.getElementById("hours").textContent = horas
    .toString()
    .padStart(2, "0")
  document.getElementById("minutes").textContent = minutos
    .toString()
    .padStart(2, "0")
  document.getElementById("seconds").textContent = segundos
    .toString()
    .padStart(2, "0")

  // Se a contagem terminou
  if (diferenca < 0) {
    clearInterval(intervalo)
    document.getElementById("days").textContent = "00"
    document.getElementById("hours").textContent = "00"
    document.getElementById("minutes").textContent = "00"
    document.getElementById("seconds").textContent = "00"

    // Opcional: alterar o texto quando terminar
    document.querySelector(".countdown-text").textContent = "CHEGOU A HORA!"
  }
}

// Atualiza o contador a cada segundo
const intervalo = setInterval(atualizarContador, 1000)

// Chama imediatamente para não ter delay inicial
atualizarContador()
