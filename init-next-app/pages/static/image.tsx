import Image from "next/image";
import styles from "../../styles/Hello.module.css";

function ShowImage() {
  return (
    <div className={styles.hello}>
      <h2>Eg - Static Image</h2>
      <p>URL: `/static/image`</p>
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
