import styles from "./Link.module.scss";

type Props = {
  title: string;
  className?: string;
};

export const Link = ({ title, className = "" }: Props) => {
  const combineClassName = `${styles.container} ${className}`;
  return (
    <div className={combineClassName}>
      <a href="#" className={styles.link}>
        {title}
      </a>
    </div>
  );
};
