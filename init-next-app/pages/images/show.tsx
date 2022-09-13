import Image from "next/image";
import styles from "../../styles/Hello.module.css";

function ShowImage() {
  return (
    <div className={styles.hello}>
      <h2>Eg - Show Image</h2>
      <p>URL: `/images/show`</p>
      <br />
      <Image
        src="/images/me.jpg"
        alt="Picture image"
        width={500}
        height={500}
        priority
      />
    </div>
  );
}

export default ShowImage;
