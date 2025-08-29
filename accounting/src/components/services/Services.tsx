import { Link } from "../link/link";
import { Text } from "../text/Text";
import { SecondTitle } from "../second-title/SecondTitle";
import styles from "./Services.module.scss";
import { Block } from "../block/Block";

const descriptions = {
  text1:
    "Мы подстраиваем бухгалтерский учет под ваш бизнес. Мы привносим наши  знания и опыт в эту часть вашего бизнеса, в то время как вы фокусируете  свою энергию на вашей основной деятельности.",
  text2:
    "Правильное ведение кадрового учета позволяет уберечь предприятие  от штрафных санкций, дает возможность  работникам избежать проблем при оформлении пенсий, льгот, пособий и иных  выплат.",
  text3:
    "Налог всегда вступает в игру практически во всех аспектах бизнеса. Чтобы  избежать неожиданных убытков, необходимо обратиться к налоговым  консультантам до того, как вы входите в деловые операции. ",
  text4:
    "Специалисты «СМАР Аутсорсинг Солюшнс» могут помочь вам в вашем  финансовом и налоговом Due Diligence («должной осмотрительности»), чтобы  максимально увеличить стоимость предлагаемой транзакции.",
};

export const Services = () => {
  return (
    <section className={styles.sevices}>
      <SecondTitle title={"Наши услуги"} />
      <div className={styles.content}>
        <div className={styles.containerWithImg}>
          <div className={styles.description}>
            <Link title={"Бухгалтерский аутсорсинг"} className={styles.link} />
            <Text text={descriptions.text1} className={styles.text}></Text>
          </div>
        </div>
        <div className={styles.container}>
          <Block
            text={descriptions.text2}
            titleLink="Кадровый и воинский учет"
          />
          <Block
            text={descriptions.text3}
            titleLink="Налоговый консалтинг и учет"
          />
          <Block
            text={descriptions.text4}
            titleLink="Бизнес-консалтинг"
          />
        </div>
      </div>
    </section>
  );
};
