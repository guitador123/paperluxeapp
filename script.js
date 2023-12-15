var medidas = []
var typeBox = 0
var previaFoto = document.getElementById('img')

function selectOnda(){
    var select = document.getElementById('tipoOnda')
    var ondaValue = select.options[select.selectedIndex]
    var onda = Number(ondaValue.value)
    return onda
}

function maletaSelected(){
    typeBox = 1
    previaFoto.src = 'maleta.png'
    botaoMaleta = document.getElementById('maleta')
    botaoMaleta.style.backgroundColor = '#83f28f'
    botaoMaleta.style.color = 'black'
    botaoSedex = document.getElementById('sedex')
    botaoSedex.style.backgroundColor = '#716868'
    botaoSedex.style.color = 'white'
    return typeBox
}

function sedexSelected(){
    typeBox = 2
    botaoSedex = document.getElementById('sedex')
    botaoSedex.style.backgroundColor = '#83f28f'
    botaoSedex.style.color = 'black'
    botaoMaleta = document.getElementById('maleta')
    botaoMaleta.style.backgroundColor = '#716868'
    botaoMaleta.style.color = 'white'
    return typeBox
} 

 function enviar(){
    let compint = Number(document.getElementById('txtcomp').value)
    let largint = Number(document.getElementById('txtlarg').value)
    let altint = Number(document.getElementById('txtalt').value)
    let gram = Number(document.getElementById('txtgram').value)
    var ondaVar = selectOnda()
    var res = document.getElementById('res')

    if( typeBox == 0 || ondaVar == 0 || compint <= 0 || largint <= 0 || altint <= 0 || gram <= 0 ){
        window.alert('[ERRO]Alguma opção não foi declarada corretamente!')
    } else if ( typeBox == 1){
        medidas = maleta(compint, largint, altint, gram, ondaVar)
        vincoN = (medidas[0] - altint) / 2
        vincoS = vincoN.toFixed(2)
        res.innerHTML = `Largura da chapa: ${medidas[0]}.<br>
        Comprimento da chapa: ${medidas[1]}.<br>
        Peso: ${medidas[2]}g.<br>
        Vinco a Vinco: ${vincoS} x ${altint} x ${vincoS}.
        `
    } else if ( typeBox == 2 ){
        medidas = sedex(compint, largint, altint, gram, ondaVar)
        res.innerHTML = `Largura da chapa: ${medidas[0]}.<br>
        Comprimento da chapa: ${medidas[1]}.<br>
        Peso: ${medidas[2]}.
        `
    }


}

// ondaaux = 1 (B); 2 (C); 3 (E); 4 (BC)

 function maleta(compi, largi, alti, grami, ondaaux){
    if(ondaaux == 1){
        compExt = (compi * 2) + (largi * 2) + 50
        largExt = largi + alti + 10
        pesoCaixaN = (compExt * largExt) * (grami / 1000) / 1000
        pesoCaixaS = pesoCaixaN.toFixed(2)
        return [largExt, compExt, pesoCaixaS]
    } else if(ondaaux == 2){
        compExt = (compi * 2) + (largi * 2) + 54
        largExt = largi + alti + 14
        pesoCaixaN = (compExt * largExt) * (grami / 1000) / 1000
        pesoCaixaS = pesoCaixaN.toFixed(2)
        return [largExt, compExt, pesoCaixaS]
    } else if(ondaaux == 3){
        compExt = (compi * 2) + (largi * 2) + 62
        largExt = largi + alti + 16
        pesoCaixaN = (compExt * largExt) * (grami / 1000) / 1000
        pesoCaixaS = pesoCaixaN.toFixed(2)
        return [largExt, compExt, pesoCaixaS]
    } else if(ondaaux == 4){
        compExt = (compi * 2) + (largi * 2) + 71
        largExt = largi + alti + 24
        pesoCaixaN = (compExt * largExt) * (grami / 1000) / 1000
        pesoCaixaS = pesoCaixaN.toFixed(2)
        return [largExt, compExt, pesoCaixaS]
    }
    
}

 function sedex(compi, largi, alti, grami, ondaaux){
    if(ondaaux == 1){
        compExt = (3 * alti) + (largi * 2) + 40
        largExt = (4 * alti) + compi + 50
        pesoCaixaN = (compExt * largExt) * (grami / 1000) / 1000
        pesoCaixaS = pesoCaixaN.toFixed(2)
        return [largExt, compExt, pesoCaixaS]
    } else if(ondaaux == 2){
        compExt = (3 * alti) + (largi * 2) + 44
        largExt = (4 * alti) + compi + 54
        pesoCaixaN = (compExt * largExt) * (grami / 1000) / 1000
        pesoCaixaS = pesoCaixaN.toFixed(2)
        return [largExt, compExt, pesoCaixaS]
    } else if(ondaaux == 3){
        compExt = (3 * alti) + (largi * 2) + 52
        largExt = (4 * alti) + compi + 56
        pesoCaixaN = (compExt * largExt) * (grami / 1000) / 1000
        pesoCaixaS = pesoCaixaN.toFixed(2)
        return [largExt, compExt, pesoCaixaS]
    } else if(ondaaux == 4){
        compExt = (3 * alti) + (largi * 2) + 61
        largExt = (4 * alti) + compi + 64
        pesoCaixaN = (compExt * largExt) * (grami / 1000) / 1000
        pesoCaixaS = pesoCaixaN.toFixed(2)
        return [largExt, compExt, pesoCaixaS]
    }

 }