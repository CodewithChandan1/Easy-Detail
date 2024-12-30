import React from 'react';

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const GlassButton: React.FC<GlassButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  ...props 
}) => {
  const baseStyles = 'px-4 py-2 rounded-lg backdrop-blur-md transition-all duration-300 hover:shadow-lg';
  const variants = {
    primary: 'bg-white/20 hover:bg-white/30 border border-white/30',
    secondary: 'bg-white/10 hover:bg-white/20 border border-white/20'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};