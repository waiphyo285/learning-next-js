import { useRouter } from "next/router";
import Title from "../../../components/title";
import styles from "../../../styles/Hello.module.css";

export default function CommentPage() {
  const router = useRouter();
  const id = router.query.id as string;
  const comment = router.query.comment as string;

  return (
    <div className={styles.hello}>
      <Title
        title={"Dynamic Rouing"}
        sub_title={"/dynamicRouting/[postId]/[your-comment]"}
      />

      <h4>Post ID: {id}</h4>
      <h4>Comment: {comment}</h4>
    </div>
  );
}
