import './FormAgend.css';

function _cpf(cpf) {
    var Soma = 0
    var Resto
    var i = 0
    var strCPF = String(cpf).replace(/[^\d]/g, '')
    if (strCPF.length !== 11)
        return false

    if ([
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
    ].indexOf(strCPF) !== -1)
        return false

    for (i = 1; i <= 9; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);

    Resto = (Soma * 10) % 11

    if ((Resto == 10) || (Resto == 11))
        Resto = 0

    if (Resto != parseInt(strCPF.substring(9, 10)))
        return false

    Soma = 0

    for (i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i)

    Resto = (Soma * 10) % 11

    if ((Resto == 10) || (Resto == 11))
        Resto = 0

    if (Resto != parseInt(strCPF.substring(10, 11)))
        return false

    return true
}
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function validateAndSendAgend(event) {
    event.preventDefault();
    const inputCpf = document.querySelector("#cpf");
    const valueCpf = inputCpf.value
    const inputName = document.querySelector("#name");
    const valueName = inputName.value
    const inputEmail = document.querySelector("#email");
    const valueEmail = inputEmail.value
    const inputPhone = document.querySelector("#phone");
    const valuePhone = inputPhone.value
    const inputDate = document.querySelector("#date");
    const valueDate = inputDate.value


    if (_cpf(valueCpf) == true && validateEmail(valueEmail) == true && valueName != "" && valueEmail != "" && valuePhone != "" && valueDate != "") {
        alert("Agendamento Realizado!")
    } else if (_cpf(valueCpf) == false) {
        alert("CPF Inválido")
    } else if (validateEmail(valueEmail) == false) {
        alert("E-mail inválido")
        
    }
    else {
        alert("Preencha todos os campos")
    }



}
function FormAgend() {

    return (
        <body>
            <div className='title-container'>
                <h1 id='agendamento'>Torne-se um Revendedor, Agende sua Visita conosco!</h1>
            </div>
            <div className='form-container'>
                <form className="form-agend">
                    <input id='name' type="text" placeholder="Nome Completo"></input>
                    <input id='email' type="email" placeholder="E-mail" required></input>
                    <input id="cpf" type="text" placeholder="CPF"></input>
                    <input id='phone' type="text" placeholder="Telefone" ></input>
                    <input id='date' type="date" placeholder="data" ></input>
                    <div className='button-container'>
                        <button onClick={validateAndSendAgend}>Enviar</button>
                    </div>

                </form>
            </div>
        </body>
    );
}
export default FormAgend