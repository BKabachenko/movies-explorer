
interface DetailLineProps {
  title: string;
  children: string;
}

const DetailLine = ({title, children} :DetailLineProps) => {
  return (
    <div className='mb-2 flex flex-col gap-1 border-b border-b-gray-300 py-3'>
      <p className='text-gray-500'>{title}</p>
      {children}
    </div>
  );
};

export default DetailLine;
