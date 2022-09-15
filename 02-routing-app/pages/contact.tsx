import Title from "../components/title";
import styles from "../styles/Hello.module.css";

function Contact() {
  return (
    <div className={styles.hello}>
      <Title title={"Contact Page"} sub_title={"/contact"} />

      <h4>I am Contact</h4>
    </div>
  );
}

export default Contact;
