let info = document.getElementById("code")
        info.addEventListener("click", password)
        function password(){
            var characters = `!#$%&()*+0123456789:<>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_abcdefghijklmnopqrstuvwxyz{}`;
            const passLen = 20;
            var password = "";
            var mail = document.getElementById("email").value;
            var username = document.getElementById("username").value;
            var site = document.getElementById('site').value;
            for (var i=0; i<passLen; i++) {
                var number = Math.floor(Math.random() * characters.length)
                password += characters.substring(number, number+1)
            }
            document.getElementById("mdp").value = password
            document.getElementById("result").value = `Site : ${site}, email : ${mail}, username : ${username}, password : ${password}`
let toCopy = document.getElementById("selecCopy")
    toCopy.addEventListener("click", copy)
        function copy(){
            let copy = document.getElementById("result")
            copy.select();
            copy.setSelectionRange(0, 99999);
            document.execCommand("copy");

        }}
