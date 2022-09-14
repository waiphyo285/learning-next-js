import Title from "../components/title";
import styles from "../styles/Hello.module.css";

function Contact() {
  return (
    <div className={styles.hello}>
      <Title title={"Contact Page"} sub_title={"/contact"} />
    </div>
  );
}

export default Contact;
