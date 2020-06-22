const fs = require('fs')
var password = document.getElementById("mdp").value;
var mail = document.getElementById("email").value;
var username = document.getElementById("username").value;
var site = document.getElementById('site').value;

let JSONdata = fs.readFileSync("data.json")
let data = JSON.parse(JSONdata)
let userData = data.userData

userData.push( {
    "Site" : site, 
    "Email" : mail, 
    "Username" : username, 
    "Password" : password,
})
function callback(err) {
    console.log('Mise à jour effectuée')
 }
let dataFormat = JSON.stringify(data, null, 3)
fs.writeFileSync("data.json", dataFormat, callback)

