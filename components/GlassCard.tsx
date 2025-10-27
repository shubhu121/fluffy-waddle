import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function GlassCard({ children, className = '', onClick }: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        rounded-3xl p-6 md:p-8
        bg-white/10 dark:bg-white/5
        backdrop-blur-xl
        shadow-glass
        border border-white/20
        transition-all duration-300
        hover:shadow-glassHover
        ${className}
      `}
    >
      {children}
    </div>
  );
}
