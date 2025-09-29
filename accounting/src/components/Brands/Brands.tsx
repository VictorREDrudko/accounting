import { SecondTitle } from '../second-title/SecondTitle';
import styles from './Brands.module.scss';
import { BRAND_IMAGES, ConstantText } from './Constants';


export const Brands = () => {
  return (
    <section className={styles.services}>
      <SecondTitle title={ConstantText.BLOCK_HEADER} />
      <div className={styles.brandsContainer}>
        {BRAND_IMAGES.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={'brand'}
            className={styles.brandImage}
          />
        ))}
      </div>
    </section>
  );
};
