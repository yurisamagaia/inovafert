import React, { useState } from 'react';
import './Contact.css';
import Title from '../../components/Title/Title';
import { Element } from 'react-scroll';


const Contact: React.FC = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    telefone: '',
    topic: '', // Novo campo para o select
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    // Adicione a lógica de envio aqui
  };

  return (
    <Element name="contact" className="contact-section">
      <Title>Contato</Title>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="*Nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="*E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="telefone"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
          <select
            name="topic"
            value={formData.topic}
            onChange={handleChange}
          >
            <option value="">Tem interesse em um dos nossos treinamentos?</option>
            <option value="basico">Treinamento básico</option>
            <option value="completo">Treinamento completo</option>
          </select>
          <textarea
            name="message"
            placeholder="*Mensagem"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
          />
          <div style={{fontSize: 14, color: '#333', textAlign: 'right'}}><b>*</b> Campos obrigatórios</div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </Element>
  );
};

export default Contact;