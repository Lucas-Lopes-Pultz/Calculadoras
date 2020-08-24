let deno = document.getElementById('deno')
let nume = document.getElementById('nume')
let res = document.getElementById('res')  
let erro = ''

const toggleButton = document.getElementsByClassName('toggle-button')[0]
        const navbarLinks = document.getElementsByClassName('navbar-links')[0]

        toggleButton.addEventListener('click', () => {
            navbarLinks.classList.toggle('active')
        })

function isWrite(n,d){
    if(n.length == 0 || d.length == 0){
            erro = 'Digite os valores'
            return false
    }else if(d == 0){
        erro = 'O denominador não pode ser 0'
        return false
    }else{
        return true
        
    }
}

function converter(){
    res.removeAttribute('class','alert alert-danger')
    if(isWrite(nume.value, deno.value)){
        res.innerHTML = `${nume.value / deno.value}`
    }else{
        res.setAttribute('class','alert alert-danger')
        res.innerHTML = erro
    }
}