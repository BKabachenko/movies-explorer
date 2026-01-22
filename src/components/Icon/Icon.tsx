import React from 'react';

interface IconProps {
  src: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Icon = ({ src: SvgIcon, size = 'sm', className }: IconProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-10 h-10',
  };

  return (
    <>
      <SvgIcon className={`${sizeClasses[size]} ${className} shrink-0 transition-colors`} />
    </>
  );
};

export default Icon;
