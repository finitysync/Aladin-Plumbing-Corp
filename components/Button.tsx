import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-aladdin-gold hover:bg-amber-700 text-white focus:ring-amber-500",
    secondary: "bg-aladdin-blue hover:bg-slate-800 text-white focus:ring-slate-500",
    outline: "border-2 border-aladdin-blue text-aladdin-blue hover:bg-slate-50 focus:ring-slate-500",
    white: "bg-white text-aladdin-blue hover:bg-gray-100 focus:ring-white",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3.5 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};