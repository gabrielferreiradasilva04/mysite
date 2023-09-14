import './Utilities.css'
import React, { useState, useEffect } from 'react';


function Utilities() {
    const [resultado, setResultado] = useState(" ");
    const [valorVenda, setValorVenda] = useState("")
    const [valorCompra, setValorCompra] = useState("")
    const [dataPesquisa, setdataPesquisa] = useState("")

    function amount(event) {
        event.preventDefault();
        var inputc = document.querySelector("#c");
        var valuec = inputc.value
        var inputtime = document.querySelector("#time");
        var valuetime = inputtime.value
        var inputfee = document.querySelector("#fee");
        var valuefee = inputfee.value

        valuec = parseFloat(valuec);
        valuetime = parseFloat(valuetime);
        valuefee = parseFloat(valuefee);
        valuefee = valuefee / 100;
        const total = valuec * (1 + valuefee) ** valuetime;
        if (!total > 0) {
            setResultado(0)
        } else {
            setResultado("R$"+total.toFixed(2))
        }

    }


    function RequestValue() {
        var data = new Date();
        var dia = String(data.getDate()).padStart(2, '0');
        var mes = String(data.getMonth() + 1).padStart(2, '0');
        var ano = data.getFullYear();
        var dataAtual = mes + '-' + dia + '-' + ano;
        console.log(dataAtual)
        var url = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='" + dataAtual + "'&$format=json";
        let request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function () {
            if (request.readyState == 4 && request.status == 200) {
                var resposta = JSON.parse(request.responseText);
                var valores = resposta.value[0];
                
                setValorCompra("$"+valores.cotacaoCompra);
                setValorVenda("$"+valores.cotacaoVenda);
                setdataPesquisa(valores.dataHoraCotacao);
            }
        };
        request.onerror = function () {
            console.log("Erro:" + request);
        };
        request.send();

    }

    return (
        <body>
            <div className='title-container'>
                <h1 id='main-title'>Ferramentas Uteis para você</h1>
            </div>
            <div className='title-container'>
                <h2 id='subtitle'>Consular o Valor do Dólar no dia de Hoje!</h2>
            </div>
            <div className='information-dolar'>
                <p id="buyValue">Valor de Compra: {valorCompra}</p>
                <p id="saleValue">Valor de Venda: {valorVenda}</p>
                <p>Data da Consulta: {dataPesquisa}</p>
                <button onClick={RequestValue}>Consutlar</button>
            </div>

            <div className='title-container'>
                <h2 id='subtitle'>Cálculo de Juros Compostos</h2>
            </div>
            <div className='form-container'>
                <form className='form-inputs'>
                    <input id='c' type="number" placeholder="Valor investido"></input>
                    <input id='time' type="number" placeholder="Tempo em meses"></input>
                    <input id='fee' type="number" placeholder="Taxa de juros mensal"></input>
                    <p id='result'>Valor Final: {resultado}</p>
                    <div className='button-container'>
                        <button onClick={amount}>Calcular</button>
                    </div>
                </form>


            </div>


        </body>
    );
}

export default Utilities