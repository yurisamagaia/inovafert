import React from 'react';
import './Services.css';
import Title from '../../components/Title/Title';
import logoSeparator from '../../assets/LogoSeparator.png';
import Button from '../../components/Button/Button';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Services: React.FC = () => {
  return (
    <div id="services">
      <div className="services" >
        <Title>Nossos treinamentos</Title>
        <div className="services-content">
          <div className="services-item">
            <div>
              <div className='item-title'>Básico</div>
              <div className='item-subtitle'>Exames incluídos:</div>
              <div className='item'><FaCheck /> Espermograma simples</div>
              <div className='item'><FaCheck /> Morfologia de Kruger</div>
              <div className='item'><FaCheck /> Espermograma para pacientes vasectomizados</div>
            </div>
            <Link to="contact" smooth={true} style={{marginTop: 'auto'}}>
              <Button onPress={() => null}>Solicitar orçamento</Button>
            </Link>
          </div>
          <div className="services-item">
            <div>
              <div className='item-title'>Completo</div>
              <div className='item-subtitle'>Exames incluídos:</div>
              <div className='item'><FaCheck /> Espermograma simples</div>
              <div className='item'><FaCheck /> Morfologia de Kruger</div>
              <div className='item'><FaCheck /> Espermograma para pacientes vasectomizados</div>
              <div className='item'><FaCheck color='#52b788' /> Teste de capacitação espermática</div>
              <div className='item'><FaCheck color='#52b788' /> Teste de fragmentação de DNA espermático</div>
            </div>
            <Link to="contact" smooth={true} style={{marginTop: 'auto'}}>
              <Button onPress={() => null}>Solicitar orçamento</Button>
            </Link>
          </div>
        </div>
        <div className='advise'>*Todos são ministrados/supervisionados por Crislaine e/ou Letícia dentro do seu laboratório, com a sua equipe.</div>
      </div>
      <div className="separator">
        <div style={{fontSize: 22}}> Mais do que oferecer um treinamento</div>
        <h1>Queremos ser parceiros do seu laboratório!</h1>
        <img src={logoSeparator} alt="Logo" className="logo-separator" />
      </div>
    </div>
  );
};

export default Services;