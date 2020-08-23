const ang = document.getElementById('ang')
const hip = document.getElementById('hip')
const ca1 = document.getElementById('ca1')
const ca2 = document.getElementById('ca2')
const res = document.getElementById('res')
let erro = ''



function ladosIsWrite(h=0,c1=0,c2=0,ang=0){
    if(h <= 0 && c1 <= 0 && c2 <= 0){
        return false
    }else if(ang <= 0){
        return false
    }else{
        return true
    }
}

function angIsWrite(ang=0){
    if(ang <= 0 || ang >= 90){
        return false
    }else{
        return true
    }
}

function desca12(h=0){
    if(h != 0){
        document.getElementById('ca1').setAttribute('disabled','')
        document.getElementById('ca2').setAttribute('disabled','')
    }else{
        document.getElementById('ca1').removeAttribute('disabled','')
        document.getElementById('ca2').removeAttribute('disabled','')
    }
}

function deshca2(c1=0){
    if(c1 != 0){
        document.getElementById('ca2').setAttribute('disabled','')
        document.getElementById('hip').setAttribute('disabled','')
    }else{
        document.getElementById('ca2').removeAttribute('disabled','')
        document.getElementById('hip').removeAttribute('disabled','')
    }
}

function deshca1(c2=0){
    if(c2 != 0){
        document.getElementById('hip').setAttribute('disabled','')
        document.getElementById('ca1').setAttribute('disabled','')
    }else{
        document.getElementById('hip').removeAttribute('disabled','')
        document.getElementById('ca1').removeAttribute('disabled','')
    }
}

function calcular(){
    res.removeAttribute('class','alert alert-danger')
        if(ladosIsWrite(hip.value, ca1.value, ca2.value, ang.value)){
            if(angIsWrite(ang.value)){

                const sen = Math.sin(ang.value * Math.PI/180)
                const cos = Math.cos(ang.value * Math.PI/180)
                const tg = Math.tan(ang.value * Math.PI/180)
                
                if(hip.value.length != 0){
                    res.innerHTML = `Hipotenusa = ${hip.value}<br> Cateto oposto ≅ ${Math.round(hip.value*sen)}
                    <br> Cateto adjacente ≅ ${Math.round(hip.value*cos)}
                    `
                }else if(ca1.value.length != 0){
                    res.innerHTML = `Hipotenusa ≅ ${Math.round(ca1.value/sen)}<br> Cateto oposto = ${ca1.value}
                    <br> Cateto adjacente ≅ ${Math.round(ca1.value/tg)}`
                }else{
                    res.innerHTML = `Hipotenusa ≅ ${Math.round(ca2.value/cos)}<br> Cateto oposto ≅ 
                    ${Math.round(ca2.value*tg)}<br> Cateto adjacente = ${ca2.value}`
                }
            }else{
                res.setAttribute('class','alert alert-danger')
                erro = 'É aceito apenas ângulos abaixo de 90'
                res.innerHTML = erro
            }

        }else{
            res.setAttribute('class','alert alert-danger')
            erro = 'Confira se os dados estão corretos e tente novamente.'
            res.innerHTML = erro
        }
   
}