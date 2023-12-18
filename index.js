const usuarios = [
    {
        login: 'eder',
        pass: 'eder'
    },
    {
        login: 'guilherme',
        pass: 'guilherme'
    },
    {
        login: 'admin',
        pass: 'admin'
    }
]

let botao = document.getElementById('btnLogar')

botao.addEventListener('click', function logar(){

    let validaLogin = false
    let pegaUsuario = document.getElementById('usuario').value
    let pegaSenha = document.getElementById('senha').value

    for(let i in usuarios){

        if(pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass){
            validaLogin = true
            break
        }
    }

    if (validaLogin == true){
        location.href = 'modelo.html'
    } else {
        window.alert('Usuario ou senha incorreta!')
    }

})