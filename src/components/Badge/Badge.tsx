interface Badge {
  children: React.ReactNode;
  variant: 'genre' | 'rate' | 'secondary' | 'author';
}

const Badge = ({ children, variant }: Badge) => {
  const variants = {
    genre: 'rounded-2xl border border-indigo-200 bg-indigo-100 text-indigo-700 uppercase',
    rate: 'rounded-2xl border border-yellow-200 bg-yellow-100 text-yellow-800 uppercase',
    secondary: 'rounded-2xl border border-gray-200 bg-gray-100 text-gray-800 uppercase',
    author: 'rounded-2xl border border-gray-200 bg-transparent text-black shadow-sm',
  };
  const defaultStyle =
    'flex text-center flex-wrap content-center justify-center p-1 px-4 text-sm font-semibold gap-2';
  const badgeStyle = variants[variant] + ' ' + defaultStyle;
  return (
    <div className={badgeStyle}>
      {children}
    </div>
  );
};

export default Badge;
