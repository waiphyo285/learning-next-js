import Image from "next/image";
import Title from "../../components/title";
import styles from "../../styles/Hello.module.css";

/**
 * Layout Values
 *
 * layout="intrinsic"
 * layout="responsive"
 * layout="fixed"
 * layout="fill"
 */

function ShowImage() {
  return (
    <div className={styles.hello}>
      <Title title={"Fill Image"} sub_title={"/images/fill"} />

      <Image
        src="/images/background.jpg"
        alt="Background image"
        layout="fill"
        priority
      />
    </div>
  );
}

export default ShowImage;
