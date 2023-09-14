import './AboutUs.css'
import Creator from './img/foto-criadora'
function AboutUs() {
    return (
        <body>
            <div className="title-about">
                <h1 id='sobre-nos'>Sobre nós</h1>
            </div>
            <div className="about-us">
                <img id='creator-picture' src={Creator}></img>
                <div className='container-text'>
                    <p>
                        Bem-vindo à Beauty Cosméticos!
                        Na Beauty Cosméticos, nossa paixão é realçar a beleza natural de cada pessoa, empoderando-os a expressar sua autenticidade e confiança por meio dos nossos produtos de beleza excepcionais. Desde o nosso início, temos buscado incansavelmente a excelência na indústria de cosméticos, e nossa jornada é um testemunho do nosso compromisso inabalável com a inovação, qualidade e sustentabilidade.
                    </p>
                    <p>
                        Fundada em 2000, a Beauty Cosméticos nasceu da visão de Thamylli Cristine, que acreditava que a beleza deveria ser uma celebração da individualidade. Começamos modestamente, com um sonho e uma missão clara: criar produtos de alta qualidade que inspirassem e capacitasse as pessoas a se sentirem confiantes em sua própria pele.
                    </p>
                    <p>
                        Ao longo dos anos, nossa empresa cresceu e evoluiu, adaptando-se às tendências e às necessidades em constante mudança dos nossos clientes. Hoje, somos uma marca de renome global, amada por milhões de pessoas em todo o mundo. Nossos produtos estão presentes em lojas de beleza, spas e online, sempre com o compromisso de oferecer o melhor em cuidados com a pele, maquiagem e fragrâncias.
                    </p>
                    <p>
                        Na Beauty Cosméticos, acreditamos que a verdadeira beleza é uma manifestação da autenticidade e da confiança interior. Nossos produtos são criados com ingredientes da mais alta qualidade, formulados com a expertise de nossos cientistas e desenvolvedores apaixonados, que estão comprometidos em trazer à tona o melhor de cada indivíduo.
                    </p>
                </div>

            </div>
        </body>




    );

}

export default AboutUs;