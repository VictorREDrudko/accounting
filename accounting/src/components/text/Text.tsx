import styles from './Text.module.scss';

type Props = {
  text: string;
  className?: string;
};

export const Text = ({ text, className = '' }: Props) => {
  const combineClassName = `${styles.text} ${className}`;
  return <p className={combineClassName}>{text}</p>;
};
