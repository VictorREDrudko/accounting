import styles from "./Adout.module.scss";
import slogan from "../../assets/slogan.svg";
import { Text } from "../text/Text";

export const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <img src={slogan} alt="slogan" className={styles.slogan} />
      </div>
      <div className={styles.container}>
        <Text
          text={
            "SMAR — международная аутсорсинговая компания, которая специализируется на стратегическом аутсорсинге бизнес процессов."
          }
        ></Text>
        <Text
          text={
            "Мы помогаем клиентам концентрироваться на их собственном бизнесе и реализовывать даже самые амбициозные проекты."
          }
        ></Text>
      </div>
    </section>
  );
};
