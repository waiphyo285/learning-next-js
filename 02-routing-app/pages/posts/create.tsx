import Title from "../../components/title";
import styles from "../../styles/Hello.module.css";

function CreatePost() {
  return (
    <div className={styles.hello}>
      <Title title={"Create Post"} sub_title={"/posts/create"} />

      <h4>Create new post!</h4>
    </div>
  );
}

export default CreatePost;
