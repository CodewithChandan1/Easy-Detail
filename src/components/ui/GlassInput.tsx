import React from 'react';

interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const GlassInput: React.FC<GlassInputProps> = ({ 
  label,
  className = '',
  ...props 
}) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-white/80">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-2 rounded-lg backdrop-blur-md bg-white/5 border border-white/20 
          focus:outline-none focus:ring-2 focus:ring-white/30 placeholder-white/50 ${className}`}
        {...props}
      />
    </div>
  );
};