import styles from './SecondTitle.module.scss';

type Props = {
  title: string;
  className?: string;
};

export const SecondTitle = ({ title, className = '' }: Props) => {
  const combineClassName = `${styles.title} ${className}`;
  return <h2 className={combineClassName}>{title}</h2>;
};
