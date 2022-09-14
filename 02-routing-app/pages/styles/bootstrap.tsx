import Title from "../../components/title";
import styles from "../../styles/Hello.module.css";

function Bootstrap() {
  return (
    <div className={styles.hello}>
      <Title title={"Hello Bootstrap"} sub_title={"/styles/bootstrap"} />

      <h4 className={"text-warning"}>I am Bootstrap</h4>
    </div>
  );
}

export default Bootstrap;
