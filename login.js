
function auth(){
    var login = String(document.getElementById('logintxt').value)
    var pass =  String(document.getElementById('passtxt').value)
    if(login == 'guiberchol123@outlook.com' && pass == '10121330'){
        window.alert('Sucessfully Login')
        setTimeout(function(){
            window.location.replace("https://guitador123.github.io/paperluxeapp/modelo")
        }, 2000)
    } else{
        window.alert('Wrong Login')
    }
}