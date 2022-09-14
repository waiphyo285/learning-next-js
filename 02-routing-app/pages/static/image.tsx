import Image from "next/image";
import Title from "../../components/title";
import styles from "../../styles/Hello.module.css";

function ShowImage() {
  return (
    <div className={styles.hello}>
      <Title title={"Static Image"} sub_title={"/static/image"} />

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
