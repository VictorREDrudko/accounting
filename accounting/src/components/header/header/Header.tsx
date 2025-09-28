import { useState } from 'react';

import logo from '../../../assets/Logo-02.svg';
import mark from '../../../assets/Mask.png';
import styles from './Header.module.scss';


const navigation: string[] = [
  'Услуги',
  'О нас',
  'Отзывы',
  'Блог',
  'SMAR Global',
  'Контакты',
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const mappedNav = navigation.map((el, index) => {
    return index > 1 ? (
      <div key={index}>
        <a>{el}</a>
      </div>
    ) : (
      <div key={index} className={styles.containerItemMenu}>
        <a>{el}</a>
        <img src={mark} alt="mark" className={styles.mark} />
      </div>
    );
  });

  const mobileMenuItems = navigation.map((el, index) => (
    <div key={index} className={styles.mobileMenuItem}>
      <a className={styles.mobileMenuLink}>{el}</a>
      {index <= 1 && <img src={mark} alt="mark" className={styles.mobileMenuMark} />}
    </div>
  ));

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt={'logo'} />
      <nav className={styles.nav}>
        <div className={styles.containerLang}>
          <a>{'EN'}</a>
          <img src={mark} alt="mark" className={styles.mark} />
        </div>
        <div className={styles.menu}>{mappedNav}</div>
        <div
          className={`${styles.burger} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
        >
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </div>
      </nav>
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        {mobileMenuItems}
      </div>
    </header>
  );
};
