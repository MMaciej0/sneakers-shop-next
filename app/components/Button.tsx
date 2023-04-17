'use client';

import { IconType } from 'react-icons/lib';

interface ButtonProps {
  onClick: () => void;
  label: string;
  outline?: boolean;
  disabled?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  outline,
  disabled,
  icon: Icon,
}) => {
  return (
    <button
      className={`relative w-full py-4 text-md tracking-wide font-semibold rounded-md disabled:opacity-70 disabled:cursor-not-allowed ${
        outline
          ? 'bg-primaryBg border-[2px] border-highlight'
          : 'bg-highlight/50'
      } hover:bg-highlight/80 transition`}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon size={22} className="absolute left-8 top-4" />}
      {label}
    </button>
  );
};

export default Button;
