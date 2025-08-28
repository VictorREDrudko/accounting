import styles from "./Header.module.scss";
import logo from "../../../assets/Logo-02.svg";

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
  const mappedNav = navigation.map((el) => {
    return <a>{el}</a>;
  });
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt={"logo"}></img>
      <nav className={styles.nav}>{mappedNav}</nav>
    </header>
  );
};
