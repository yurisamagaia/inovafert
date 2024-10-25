import React, { ReactNode } from 'react';
import './Title.css';

type TitleProps = {
  children: ReactNode;
}

const Title: React.FC<TitleProps> = ({children}) => <h1 className='title'>{children}</h1>;

export default Title;