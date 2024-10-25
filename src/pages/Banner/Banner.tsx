import React from 'react';
import './Banner.css';
import { Element, Link } from 'react-scroll';
import Button from '../../components/Button/Button';

const Banner: React.FC = () => {

  const BannerStyle = {
    fontSize: 20, 
    paddingLeft: 50, 
    paddingRight: 50, 
    marginTop: 20
  }

  return (
    <Element name="banner" className="parallax-banner section">
      <div className="banner-content">
        <h1>Aprimore seus resultados, <br/> eleve sua precisão:</h1>
        <h2>Treinamento especializado <br/> em fertilidade masculina.</h2>
        <Link to="services" smooth={true}>
          <Button onPress={() => null} style={BannerStyle}>
            Solicitar treinamento
          </Button>
        </Link>
      </div>
    </Element>
  );
}

export default Banner;