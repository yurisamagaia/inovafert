import React from 'react';
import './Footer.css';
import logoFooter from '../../assets/LogoFooter.png';
import Button from '../../components/Button/Button';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';


const Footer: React.FC = () => {

  const ContactStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 230,
    gap: 5
  };

  const InstagramStyle = {
    ...ContactStyle,
    background: 'linear-gradient(45deg, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #FCAF45)'
  };

  const openLink = (url: string) => window.open(url, '_blank');

  return (
    <>
      <div className="footer">
        <div className="footer-menu">
          <div className='footer-logo'>
            <img src={logoFooter} alt="Logo" width={200} />
            <div>
              <h2>InovaFert</h2>
              <div className='footer-about'>
                Empresa especializada em capacitar equipes para a realização de exames de 
                investigação de fertilidade masculina.
                <div style={{marginTop: 10}}><b>Diferencial</b></div>
                Entregar um serviço com o mesmo padrão de qualidade das melhores clínicas de reprodução humana.
              </div>
            </div>
          </div>
          <div>
            <h2>Contato</h2>
            <div>
              <Button onPress={() => openLink('https://wa.me/47996941347')} style={ContactStyle}>
                <FaWhatsapp fontSize={'20'} /> Crislaine
              </Button>
            </div>
            <div style={{marginTop: 15}}>
              <Button onPress={() => openLink('https://wa.me/48996171771')} style={ContactStyle}>
                <FaWhatsapp fontSize={'20'} /> Letícia
              </Button>
            </div>
            <div style={{marginTop: 15}}>
              <Button onPress={() => openLink('https://www.instagram.com/inovafertconsultoria/')} style={InstagramStyle}>
                <FaInstagram fontSize={'20'} /> InovaFert
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='reserved'>© 2024 InovaFert consultoria e treinamento</div>
    </>
  );
};

export default Footer;