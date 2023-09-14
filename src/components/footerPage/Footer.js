import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import './Footer.css'



function Footer() {
    return (
        <footer>
            <div className='title-container'>
                Contatos
            </div>
            <div className='information-container'>
                <ul>
                    <li><a href='https://www.facebook.com/profile.php?id=100060885417273' target='_blank'><FaFacebook /> Thamylli Murawski</a></li>
                    <li><a href='https://api.whatsapp.com/send?phone=41997318781&text=mensagem-inicial'><FaWhatsapp /> (41) 99624-1805</a></li>

                </ul>
            </div>
            <div className='title-container'>
                Horário de atendimento
            </div>
            <div className='information-container'>
                <ul>
                    <li>Endereço: Rua Nilo Cardoso Bacelar, 46 - Araucária </li>
                    <li>De Segunda a sexta das 08:00 às 18:00</li>
                    <li>Sábados e Feriados das 10:00 às 15:00</li>

                </ul>
            </div>
        </footer>

    );
}
export default Footer