let h = document.getElementById('hipo')
let c1 = document.getElementById('cat1')
let c2 = document.getElementById('cat2')
let res = document.getElementById('res')
let erro = ''

const calcPitagoras = {
    cateto1: (c2, h) => {return Math.pow((Math.pow(c2,2) - Math.pow(h,2)),0.5)},
    cateto2:  (c1, h) => {return Math.pow((Math.pow(c1,2) - Math.pow(h,2)),0.5)},
    hipotenusa: (c1, c2) => {return Math.pow((Math.pow(c1,2) + Math.pow(c2,2)),0.5)}
} 

const vlrc1 = calcPitagoras.cateto1
const vlrc2 = calcPitagoras.cateto2
const vlrh = calcPitagoras.hipotenusa

function isWrite(h=0, c1=0, c2=0) {
    if(h >= 0 && c1 >= 0 && c2 >= 0){
        if(h == 0){

            if(c1 == 0 || c2 == 0){
                erro = 'Não é possível fazer o cálculo com mais de uma icógnita.'
                return false
            }else{
                return 1 //hipotenusa icógnita
            }
        }else if(c1 == 0){
            if(c2 >= h){
                erro = 'A medida dos catetos não podem ser maiores ou iguais o da hipotenusa.'
                return false
            }else{
                if(h == 0 || c2 == 0){
                    erro = 'Não é possível fazer o cálculo com mais de uma icógnita.'
                    return false
                }else{
                    return 2 //Cateto1 icógnita
                }
            }
        }else if(c2 == 0){
            if(c1 >= h){
                erro = 'A medida dos catetos não podem ser maiores ou iguais o da hipotenusa.'
                return false
            }else{
                if(c1 == 0 || h == 0){
                    erro = 'Não é possível fazer o cálculo com mais de uma icógnita.'
                    return false
                }else{
                    return 3 //Cateto2 icógnita
                }
            }    
        }else{
            erro = 1
            return false
        }    
    }else{
        erro = 'Números negativos são inválidos'
        return false
    }
}    

function calcular() {
    res.removeAttribute('class','alert alert-danger')
    if (isWrite(h.value, c1.value, c2.value) == 1) {
        res.innerHTML = `Valor da hipotenusa = ${vlrh(c1.value, c2.value)}<br><br>`
        res.innerHTML += `Valor do Cateto oposto = ${c1.value}<br><br>`
        res.innerHTML += `Valor do Cateto adjacente = ${c2.value}`
    }else if(isWrite(h.value, c1.value, c2.value) == 2){
        res.innerHTML = `Valor da hipotenusa = ${h.value}<br><br>`
        res.innerHTML += `Valor do Cateto oposto = ${vlrc1(h.value, c2.value)}<br><br>`
        res.innerHTML += `Valor do Cateto adjacente = ${c2.value}`
    }else if(isWrite(h.value, c1.value, c2.value) == 3){
        res.innerHTML = `Valor da hipotenusa = ${h.value}<br><br>`
        res.innerHTML += `Valor do Cateto oposto = ${c1.value}<br><br>`
        res.innerHTML += `Valor do Cateto adjacente = ${vlrc2(h.value, c1.value)}`
    }else{
        if(erro == 1){
            if(c1.value > h.value || c2.value > h.value){
                res.style.color = 'red'
                erro = 'A medida dos catetos não podem ser maiores que o da hipotenusa.'
                res.innerHTML = erro
            }else{
                res.innerHTML = `Valor da hipotenusa = ${h.value}<br><br>`
            res.innerHTML += `Valor do Cateto oposto = ${c1.value}<br><br>`
            res.innerHTML += `Valor do Cateto adjacente = ${c2.value}`
            }
        }else{
            res.setAttribute('class','alert alert-danger')
            res.innerHTML = erro
        }
    }
}
