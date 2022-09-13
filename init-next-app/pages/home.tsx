import styles from "../styles/Hello.module.css";

function Home() {
  return (
    <div className={styles.hello}>
      <h2>Eg - Home Page</h2>
      <p>URL: `/home`</p>
    </div>
  );
}

export default Home;
