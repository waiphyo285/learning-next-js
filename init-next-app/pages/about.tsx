import styles from "../styles/Hello.module.css";

function About() {
  return (
    <div className={styles.hello}>
      <h2>Eg - About Page</h2>
      <p>URL: `/about`</p>
    </div>
  );
}

export default About;
