import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  variant: 'addToFavorite' | 'removeFromFavorite' | 'backBtn';
}

const defaultStyles =
  'flex cursor-pointer flex-row items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium font-semibold transition-all duration-200';

const variantStyles = {
  addToFavorite: '',
  removeFromFavorite: '',
  backBtn:
    'border border-gray-200 bg-white p-2 text-gray-500 shadow-sm hover:bg-indigo-50 hover:text-indigo-600 active:bg-indigo-200 active:text-indigo-600',
};

const Button = ({ variant, children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`${defaultStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
