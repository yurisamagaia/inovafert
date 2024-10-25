import React from 'react';
import logo from '../../assets/Abraco.png';
import Crislaine from '../../assets/Crislaine.png';
import Leticia from '../../assets/Leticia.png';
import './About.css';
import Title from '../../components/Title/Title';
import { Element } from 'react-scroll';

const About: React.FC = () => {
  return (
    <Element className="about" name="about">
      <Title>A InovaFert</Title>
      <div className='about-container'>
        <div className='about-container-text'>
          A <b>InovaFert</b>, fundada por Crislaine Portes e Letícia Wietcovsky, é especializada em capacitar equipes 
          para a realização de exames de investigação de fertilidade masculina, mantendo o padrão de qualidade 
          das melhores clínicas de reprodução humana.
          <br/>
          <br/>
          Com um foco claro na excelência e inovação, a <b>InovaFert </b> 
          oferece soluções educacionais e técnicas que garantem precisão nos diagnósticos, fortalecendo a 
          expertise das equipes e contribuindo para resultados mais assertivos no campo da fertilidade masculina.
        </div>
        <img src={logo} alt="Logo" className="about-logo" />
      </div>
      <h2 className='meet-us'>Nos conheça melhor</h2>
      <div className="about-us-item" style={{ marginBottom: 50, textAlign: 'justify' }}>
        Formadas em Ciências Biológicas pela UNIVALI, Crislaine Portes e Letícia Wietcovsky começaram suas trajetórias na reprodução assistida ainda na graduação, atuando como estagiárias voluntárias e monitoras no Laboratório de Biotecnologia da Reprodução. Durante esse período, não apenas aperfeiçoaram técnicas avançadas de reprodução assistida, como análise e preparo seminal, mas também auxiliaram na formação de alunos dos cursos de biomedicina, biologia e medicina, além de contribuírem em cursos especializados oferecidos pelo laboratório.
      </div>
      <div className="about-us">
        <div className="about-us-item" style={{paddingBottom: 80}}>
          <div style={{textAlign: 'justify'}}>
            "Com mais de 5 anos de experiencia, atualmente sou andrologista sênior. Atuei como responsável de laboratório (banco de sêmen) e
            possuo pós-graduação concluída em 2021 pelo Instituto Sapientiae em Reprodução Humana Assistida."
          </div>
          <b>Crislaine</b>
          <img src={Crislaine} alt='Crislaine' className='profile-logo' />
        </div>
        <div className="about-us-item" style={{paddingBottom: 80}}>
          <div style={{textAlign: 'justify'}}>
            "Sou embriologista sênior. Atuei como chefe de laboratório, em clínica de reprodução humana assistida,
            e possuo um artigo apresentado em congresso e premiado em 2018 intitulado de
            <i> Ovarian tissue vitrification and heterotopic autologous transplantation in prepubertal Wistar rats (DOI: 10.5935/1518-0557.20180019).</i>"
            {/* Atualmente estou cursando pós-graduação em Reprodução Humana Assistida pelo Instituto Sapientiae. */}
          </div>
          <b>Letícia</b>
          <img src={Leticia} alt='Leticia' className='profile-logo' />
        </div>
      </div>
    </Element>
  );
};

export default About;