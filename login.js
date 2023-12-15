
function auth(){
    var login = String(document.getElementById('logintxt').value)
    var pass =  String(document.getElementById('passtxt').value)
    if(login == 'guiberchol123@outlook.com' && pass == '10121330'){
        window.alert('Sucessfully Login')
            window.location.replace("https://guitador123.github.io/paperluxeapp/modelo")
    } else{
        window.alert('Wrong Login')
    }
}