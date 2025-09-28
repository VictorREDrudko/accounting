import { MainButton } from '../main-button/Mainbutton';
import { SecondTitle } from '../second-title/SecondTitle';
import { Text } from '../text/Text';
import { ConstantText } from './Constants';
import styles from './SpecialOffer.module.scss';


export const SpecialOffer = () => {
  return (
    <section className={styles.services}>
      <SecondTitle title={'Спецпредложение'} />
      <div className={styles.content}>
        <div className={styles.containerWithImg} />
        <div className={styles.description}>
          <Text text={ConstantText.HEADER} className={styles.headerText} />
          <Text text={ConstantText.OFFER} className={styles.offerText} />
          <Text text={ConstantText.DESCRIPTION} className={styles.descriptionText} />
          <MainButton />
        </div>
      </div>
    </section>
  );
};
