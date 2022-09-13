import styles from "../../styles/Hello.module.css";

function Bootstrap() {
  return (
    <div className={styles.hello}>
      <h2 className={"text-warning"}>Eg - Hello Bootstrap</h2>
      <p className={"text-primary"}>URL: `/styles/hello`</p>
    </div>
  );
}

export default Bootstrap;
