interface SkeletonProps {
  className: string;
}

const Skeleton = ({ className }: SkeletonProps) => {
  const styles = 'bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg' + ' ' + className;
  return (
      <div className={styles}></div>
  );
};

export default Skeleton;
