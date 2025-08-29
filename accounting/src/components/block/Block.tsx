import styles from "./Block.module.scss";
import { Link } from "../link/link";
import { Text } from "../text/Text";

type Props = {
  titleLink: string;
  text: string;
};

export const Block = ({ titleLink, text }: Props) => {
  return (
    <div className={styles.container}>
      <Link title={titleLink} className={styles.link} />
      <Text text={text} className={styles.text}></Text>
    </div>
  );
};
