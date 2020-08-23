
const a = document.getElementById('vlra')
const b = document.getElementById('vlrb')
const c = document.getElementById('vlrc')
const res = document.getElementById('res')
const btn = document.getElementsByName('btn-neg')


const calcEq2g = {
    delta(a, b = 0, c = 0) { return Math.pow(b, 2) - 4 * Number(a) * Number(c) },

    x1(a, b = 0, delta = 0) { return ((Number(b) * -1) + Math.pow(delta, 0.5)) / (2 * Number(a)) },

    x2(a, b = 0, delta = 0) { return ((Number(b) * -1) - Math.pow(delta, 0.5)) / (2 * Number(a)) },
    
    xv(a, b = 0) { return Number(-b) / (2 * a) },

    yv(a, delta = 0) { return Number(-delta) / (4 * a) }
}

const delta = calcEq2g.delta
const x1 = calcEq2g.x1
const x2 = calcEq2g.x2
const xv = calcEq2g.xv
const yv = calcEq2g.yv

function btnNegAct(){
    alert('Clique no botão (-) para deixar o número digitado negativo.')

    btn[0].removeAttribute('hidden','')
    btn[1].removeAttribute('hidden','')
    btn[2].removeAttribute('hidden','')
}

function transNegative(n){
    if(n == 0){
        if(a.value > 0){
            a.value =`${a.value*(-1)}`
        }  
    }else if(n==1){
        if(b.value > 0){
            b.value =`${b.value*(-1)}`
        }
    }else{
        if(c.value > 0){
            c.value =`${c.value*(-1)}`
        }    
    }
}

function isWrite(a) {
    if (a.length == 0 || Number(a) == 0) {
        return false
    } else {
        return true
    }
}

function deltaNeg(delta) {
    if (delta < 0) {
        return false
    } else {
        return true
    }
}

function calcularRaizes() {
    document.getElementsByTagName('body')[0].style.marginTop = '50px'
    res.removeAttribute('class','alert alert-danger')
    a.style.backgroundColor = ''

    if (isWrite(a.value)) {
        if (deltaNeg(delta(a.value, b.value, c.value))) {
            res.innerHTML = `O valor de delta é ${delta(a.value, b.value, c.value)}<br><br>`
            res.innerHTML += `O valor de x<sub>1</sub> = ${x1(a.value, b.value, delta(a.value, b.value, c.value))}<br><br>`
            res.innerHTML += `O valor de x<sub>2</sub> = ${x2(a.value, b.value, delta(a.value, b.value, c.value))}`
        } else {
            res.innerHTML = `O valor de delta é ${delta(a.value, b.value, c.value)} então...<br><br>`
            res.innerHTML += `O valor de x<sub>1</sub> não pertence aos reais<br><br>`
            res.innerHTML += `O valor de x<sub>2</sub> não pertence aos reais`
        }

    } else {
        res.setAttribute('class','alert alert-danger')
        res.innerHTML = 'É necessário informar o valor de A.'
    }
}

function calcularXY() {
    document.getElementsByTagName('body')[0].style.marginTop = '50px'
    res.removeAttribute('class','alert alert-danger')
    a.style.backgroundColor = ''

    if (isWrite(a.value)) {
        if(deltaNeg(delta(a.value, b.value, c.value))){
            res.innerHTML = `O valor de Xv = ${xv(a.value, b.value)}<br><br>`
            res.innerHTML += `O valor de Yv = ${yv(a.value, delta(a.value, b.value, c.value))}`
        }else{
            res.innerHTML = `O valor de Xv = ${xv(a.value, b.value)}<br><br>`
            res.innerHTML += `O valor de delta não pertence aos reais, por isso não é possível obter o valor de Yv.`
        }
    } else {
        res.setAttribute('class','alert alert-danger')
        res.innerHTML = 'É necessário informar o valor de A.'
    }
}