import React from 'react';

import { MainTitle } from '../../main-title/MainTitle';
import { SecondTitle } from '../../second-title/SecondTitle';
import { Text } from '../../text/Text';
import { Constants } from './Constants';
import styles from './SlideCertificate.module.scss';


export const SlideCertificate: React.FC = () => {

  return (
    <div className={styles.container}>
      <MainTitle
        title={Constants.MAIN_TITLE}
        className={styles.title}
      />
      <SecondTitle
        title={Constants.SECOND_TITLE}
        className={styles.secondTitle}
      />
      <Text
        text={Constants.EXTRA_TEXT}
        className={styles.text}
      />
    </div>
  );
};
