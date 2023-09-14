import Client1 from './img/avon.png'
import Client2 from './img/divina.png'
import Client3 from './img/jequiti.png'
import './OurClients.css'

function OurClients() {
    return (
        <body>
            <div className="title-container">
                <p id='nossos-clientes'>Nossos Clientes</p>
            </div>
            <div className='client-container'>
                <img className='imgClient' src={Client1}></img>
                <img className='imgClient' src={Client2}></img>
                <img className='imgClient' src={Client3}></img>
            </div>
        </body>

    );
}
export default OurClients