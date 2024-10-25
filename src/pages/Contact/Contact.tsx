import React from 'react';
import './Contact.css';
import Title from '../../components/Title/Title';
import { Element } from 'react-scroll';
import Button from '../../components/Button/Button';
import { FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';


const Contact: React.FC = () => {

  const ButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 230,
    gap: 5
  }

  const InstagramStyle = {
    ...ButtonStyle,
    background: 'linear-gradient(45deg, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #FCAF45)'
  }

  const LinkedInStyle = {
    ...ButtonStyle,
    background: '#0A66C2'
  }

  const openLink = (url: string) => window.open(url, '_blank');

  return (
    <Element name="contact" className="contact">
      <Title>Contatos</Title>
      <div className='contact-container'>
        <div>
          <h2>InovaFert</h2>
          <div style={{marginTop: 15}}>
            <Button onPress={() => openLink('https://www.instagram.com/inovafertconsultoria/')} style={InstagramStyle}>
              <FaInstagram fontSize={'20'} /> Instagram
            </Button>
          </div>
        </div>
        <div>
          <h2>Crislaine</h2>
          <div>
            <Button onPress={() => openLink('https://wa.me/47996941347')} style={ButtonStyle}>
              <FaWhatsapp fontSize={'20'} /> WhatsApp
            </Button>
          </div>
          <div style={{marginTop: 15}}>
            <Button onPress={() => openLink('https://www.linkedin.com/in/crislaine-santos-portes-647a1121b/')} style={LinkedInStyle}>
              <FaLinkedin fontSize={'20'} /> LinkedIn
            </Button>
          </div>
        </div>
        <div>
          <h2>Letícia</h2>
          <div>
            <Button onPress={() => openLink('https://wa.me/48996171771')} style={ButtonStyle}>
              <FaWhatsapp fontSize={'20'} /> WhatsApp
            </Button>
          </div>
          <div style={{marginTop: 15}}>
            <Button onPress={() => openLink('https://www.linkedin.com/in/letícia-wietcovsky-4b6957184/')} style={LinkedInStyle}>
              <FaLinkedin fontSize={'20'} /> LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;