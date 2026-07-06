let barra = document.getElementById('barra')
let valatual = document.getElementById('valoratual')
let res = document.getElementById('resultado')
barra.addEventListener('input', atualizar)

function atualizar() {
    let valor = Number(barra.value)
    let minutos = valor * 10 * 20
    let horas = Math.round(minutos / 60)
    valatual.innerHTML = `${valor} sessões por dia`
    res.innerHTML = `${horas}h economizadas por mês ⏱`
}