import styles from "./MainTitle.module.scss";

type Props = {
  title: string;
  className?: string;
};

export const MainTitle = ({ title, className = "" }: Props) => {
  const combineClassName = `${styles.title} ${className}`;
  return <h1 className={combineClassName}>{title}</h1>;
};
