import './Button.css';

type ButtonProps = {
  title?: string;
  icon?: JSX.Element;
  onClick: () => void;
  isIconOnly?: boolean;
};

const Button = ({ title, icon, onClick, isIconOnly = false }: ButtonProps) => {
  return (
    <button
      className={`custom-button ${isIconOnly ? 'icon-button' : ''}`}
      onClick={onClick}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {!isIconOnly && title && <span className="button-title">{title}</span>}
    </button>
  );
};

export default Button;
