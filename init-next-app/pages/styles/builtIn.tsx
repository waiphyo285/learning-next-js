import styles from "../../styles/Hello.module.css";

function Hello() {
  return (
    <div className={styles.hello}>
      <h2>Eg - Hello CSS</h2>
      <p>URL: `/styles/builtIn`</p>
    </div>
  );
}

export default Hello;
