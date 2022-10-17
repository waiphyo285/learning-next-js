import { useRouter } from "next/router";
import Title from "../../../components/title";
import styles from "../../../styles/Hello.module.css";

function EditPost() {
  const router = useRouter();
  const id = router.query.id as string;

  return (
    <div className={styles.hello}>
      <Title title={"Edit Post"} sub_title={"/posts/edit/[postId]"} />

      <h4>Post ID: {id}</h4>
    </div>
  );
}

export default EditPost;
