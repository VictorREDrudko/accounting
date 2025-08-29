import styles from "./Header.module.scss";
import logo from "../../../assets/Logo-02.svg";
import mark from "../../../assets/Mask.png";

const navigation: string[] = [
  "EN",
  "Услуги",
  "О нас",
  "Отзывы",
  "Блог",
  "SMAR Global",
  "Контакты",
];

export const Header = () => {
  const mappedNav = navigation.map((el, index) => {
    return index > 2 ? (
      <div key={index}>
        <a>{el}</a>
      </div>
    ) : (
      <div key={index} className={styles['container-a']}>
        <a>{el}</a>
        <img src={mark} alt="mark" className={styles.mark}/>
      </div>
    );
  });
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt={"logo"}></img>
      <nav className={styles.nav}>{mappedNav}</nav>
    </header>
  );
};
