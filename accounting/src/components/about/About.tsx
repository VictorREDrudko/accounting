import styles from "./Adout.module.scss";
import slogan from "../../assets/slogan.svg";

export const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <img src={slogan} alt="slogan" className={styles.slogan} />
      </div>
      <div className={styles.container}>
        <p className={styles.text}>
          SMAR — международная аутсорсинговая компания, которая специализируется
          на стратегическом аутсорсинге бизнес процессов.
        </p>
        <p className={styles.text}>
          Мы помогаем клиентам концентрироваться на их собственном бизнесе и
          реализовывать даже самые амбициозные проекты.
        </p>
      </div>
    </section>
  );
};
