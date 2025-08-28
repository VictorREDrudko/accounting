import styles from "./Banner.module.scss";
import rectangle from "../../assets/Rectangle.jpg";
import { MainTitle } from "../main-title/MainTitle";

export const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <img className={styles.image} src={rectangle} alt="#" />
        <MainTitle
          title={"Небезразличный бухгалтерский аутсорсинг"}
          className={styles.title}
        />
      </div>
      <div className={styles.pagination}>
        <div className={`${styles.dots} ${styles.active}`}></div>
        <div className={styles.dots}></div>
        <div className={styles.dots}></div>
      </div>
    </section>
  );
};
