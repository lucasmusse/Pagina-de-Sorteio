let pessoas = []
        let lista = document.getElementById('txtlista')
        let pessoatxt = document.getElementById('txtp')

        let pos = pessoas.indexOf(pessoatxt.value)

        function cadastrar() {

            if (pessoatxt.value === ''){

                alert('Digite um nome para cadastrar!!')

            }else{

            pessoas.push(pessoatxt.value)

            let item = document.createElement('option')
            item.text = pessoatxt.value
            lista.appendChild(item)

            console.log(pessoas)

            pessoatxt.value = ''
            pessoatxt.focus()
            }

        }

        function sortear() {

            if (pessoas.length === 0) {

                alert('Cadastre algum participante para ser sorteado!')

            } else {

                let np = pessoas.length

                let ns = Math.floor(Math.random() * np)

                document.getElementById('d').innerHTML = pessoas[ns]

            }

        }

        function limpar() {
            lista.innerHTML = ''
            document.getElementById('d').innerHTML = ''
            pessoas.length = 0

        }


        function sortnomes(){

            document.getElementById('snome').style.display ='none'
        
        }