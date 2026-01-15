interface Badge {
  icon?: string;
  children: string;
  variant: 'genre' | 'rate' | 'secondary' | 'author';
}

const Badge = ({ icon, children, variant = 'rate' }: Badge) => {
  const variants = {
    genre: 'rounded-2xl border border-indigo-200 bg-indigo-100  text-indigo-700 uppercase',
    rate: 'rounded-2xl border border-yellow-200 bg-yellow-100  text-yellow-800 uppercase',
    secondary: '',
    author: '',
  };
  const defaultStyle = 'flex w-min content-start justify-center p-1 px-4 text-sm font-semibold';
  const badgeStyle = variants[variant] + defaultStyle;

  return <div className={badgeStyle}>{children}</div>;
};

export default Badge;
