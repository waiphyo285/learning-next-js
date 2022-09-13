import styles from "../../styles/Hello.module.css";

function CreatePost() {
  return (
    <div className={styles.hello}>
      <h2>Eg - Create Post</h2>
      <p>URL: `/posts/create`</p>
    </div>
  );
}

export default CreatePost;
