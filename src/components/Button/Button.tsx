import { CSSProperties, FC, ReactNode } from 'react';
import './Button.css';

type ButtonProps = {
  children: ReactNode;
  onPress: () => void;
  style?: CSSProperties;
}

const Button: FC<ButtonProps> = ({children, onPress, style}) => {
  if (!children) return null;
  return (
    <button 
      style={style} 
      onClick={onPress}
    >
      {children}
    </button>
  )
};

export default Button;