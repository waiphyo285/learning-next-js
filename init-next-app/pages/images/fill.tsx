import Image from "next/image";
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
      <h2>Eg - Fill Image</h2>
      <p>URL: `/images/fill`</p>
      <br />
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
