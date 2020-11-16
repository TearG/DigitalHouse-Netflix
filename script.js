/*     var email = document.getElementById('email')
    var divEmail = document.getElementById('jsEmail')
    var senha = document.getElementById('senha')
    var divSenha = document.getElementById('jsSenha')

        //Sistema para mostrar e ocultar senha
            document.getElementById('mostrarSenha').addEventListener('mouseover', function() {
                 document.getElementById('senha').type = 'text';
                 document.getElementById('mostrarSenha').innerHTML = '<img src="./images/olho-fechado.png" alt="Oculta senha">';
                }
                );
                
                document.getElementById('mostrarSenha').addEventListener('mouseout', function() {
                    document.getElementById('senha').type = 'password';
                    document.getElementById('mostrarSenha').innerHTML = '<img src="./images/olho-aberto.png" alt="Mostra senha">';
            }
            );

    function verificaEmail(){
        if(email.value == ''){
            document.getElementById("email").style.borderBottom = "2px solid orange";
            divEmail.innerHTML = 'Informe um email ou número de telefone válido.'
            var form = document.getElementById('form').style.height = '440px';
        }

    }
    function verificaSenha(){
        if (senha.value == '') {
            document.getElementById("senha").style.borderBottom = "2px solid orange";
            divSenha.innerHTML = 'A senha deve ter entre 4 e 60 caracteres.' 
            var form = document.getElementById('form').style.height = '440px';
        } 
        if(email.value == '' && senha.value == ''){
            var form = document.getElementById('form').style.height = '450px';
        }
    }

    function limpa(){
        var inputS = document.getElementById("senha").style.backgroundColor = "rgb(51,51,51)";
        var inputE = document.getElementById("email").style.backgroundColor = "rgb(51,51,51)";
        document.getElementById('mostrarSenha').innerText = '';
        if(email.value != ''){
        document.getElementById("email").style.border = "none";
        divEmail.innerHTML = '' 
        }
        if(senha.value != ''){
        document.getElementById("senha").style.border = "none";
        divSenha.innerHTML = '' 
        }
    }

    function stiloE(){
        var inputE = document.getElementById("email").style.backgroundColor = "rgb(65,65,65)";
    }
    function stiloS(){
        var inputS = document.getElementById("senha").style.backgroundColor = "rgb(65,65,65)";
        document.getElementById('mostrarSenha').innerHTML = '<img src="./images/olho-aberto.png" alt="Mostra senha">';
    } */