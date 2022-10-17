import Title from "../../components/title";
import styles from "../../styles/Hello.module.css";

function Hello() {
  return (
    <div className={styles.hello}>
      <Title title={"Hello CSS"} sub_title={"/styles/builtIn"} />

      <h4>I am CSS</h4>
    </div>
  );
}

export default Hello;
