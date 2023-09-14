import './Location.css'
function Location() {
    return (
        <body>
            <div className="title-container">
                <p id='localizacao'>Localização</p>
            </div>
            <div className='main-container'>
                <div className="location-container">
                    <iframe className="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.431090163071!2d-49.4129967!3d-25.557320799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dd0318810f9655%3A0xa187cf47f525b453!2sR.%20Nilo%20Cardoso%20Bacelar%20-%20Capela%20Velha%2C%20Arauc%C3%A1ria%20-%20PR%2C%2083705-576!5e0!3m2!1spt-BR!2sbr!4v1694627328707!5m2!1spt-BR!2sbr"></iframe>
                </div>
                <div className='description-container'>
                    <p>
                        Bem-vindo à localização perfeita para a sua jornada de beleza. Nossa loja de cosméticos é um verdadeiro refúgio de glamour, estrategicamente situado para oferecer aos nossos clientes uma experiência de compras excepcional.
                    </p>
                    <p>
                        Encontramos nosso lar em um bairro vibrante e de fácil acesso, onde a harmonia entre a tranquilidade residencial e o dinamismo comercial se fundem. Nossos clientes podem nos encontrar em um dos destinos mais cobiçados da cidade, tornando a visita à nossa loja uma parte essencial de sua rotina diária.
                    </p>
                    <p>
                        Nossa localização é uma vitrine para a sofisticação. Estamos situados em uma rua movimentada, com um fluxo constante de pedestres e veículos. Nossas vitrines impecavelmente decoradas exibem as últimas tendências em cosméticos, atraindo olhares curiosos e despertando o desejo de explorar o mundo da beleza que oferecemos dentro das nossas portas.
                    </p>
                </div>
            </div>

        </body>


    );
}
export default Location