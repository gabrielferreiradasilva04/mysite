import './Welcome.css'
import LogoImg from './img/BeautyCosméticos.png'
function Welcome() {
    return (
        <body>
            <div className="welcome">
                <img src={LogoImg}></img>
                <p>"O real cuidado começa por você"</p>
            </div>
        </body>
    );

}

export default Welcome;