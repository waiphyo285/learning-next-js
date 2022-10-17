import Title from "../components/title";
import styles from "../styles/Hello.module.css";

function About() {
  return (
    <div className={styles.hello}>
      <Title title={"About Page"} sub_title={"/about"} />

      <h4>I am About</h4>
    </div>
  );
}

export default About;
