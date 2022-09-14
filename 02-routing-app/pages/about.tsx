import Title from "../components/title";
import styles from "../styles/Hello.module.css";

function About() {
  return (
    <div className={styles.hello}>
      <Title title={"About Page"} sub_title={"/about"} />
    </div>
  );
}

export default About;
