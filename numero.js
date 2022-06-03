var np = document.getElementById('txtnp')



function sortear() {

    if (np.value === '' || np.value == 0) {

        alert('Digite um número maior que 0 para realizar o sorteio !!')
        np.focus()

    } else {

        var ns = Math.round(Math.random() * txtnp.value)
        document.getElementById('d').innerHTML = ns

    }


}

function limpar() {

    document.getElementById('d').innerHTML = ''

    np.focus()

}