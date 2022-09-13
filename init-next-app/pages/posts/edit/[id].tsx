import styles from "../../../styles/Hello.module.css";

function EditPost() {
  return (
    <div className={styles.hello}>
      <h2>Eg - Edit Post</h2>
      <p>URL: `/posts/edit/[postId]`</p>
    </div>
  );
}

export default EditPost;
