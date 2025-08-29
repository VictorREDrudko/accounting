import styles from "./Adout.module.scss";
import slogan from "../../assets/slogan.svg";
import { Text } from "../text/Text";

const description = {
  text1:
    "SMAR — международная аутсорсинговая компания, которая специализируется на стратегическом аутсорсинге бизнес процессов",
  text2:
    "Мы помогаем клиентам концентрироваться на их собственном бизнесе и реализовывать даже самые амбициозные проекты.",
};

export const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <img src={slogan} alt="slogan" className={styles.slogan} />
      </div>
      <div className={styles.container}>
        <Text text={description.text1} className={styles.text}></Text>
        <Text text={description.text2} className={styles.text}></Text>
      </div>
    </section>
  );
};
