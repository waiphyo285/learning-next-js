import Title from "../components/title";
import styles from "../styles/Hello.module.css";

function Home() {
  return (
    <div className={styles.hello}>
      <Title title={"Home Page"} sub_title={"/home"} />

      <h4>I am Home</h4>
    </div>
  );
}

export default Home;
