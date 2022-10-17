import Link from "next/link";
import { useRouter } from "next/router";
import Title from "../../../components/title";
import styles from "../../../styles/Hello.module.css";

export default function PostPage() {
  const router = useRouter();
  const id = router.query.id as string;

  return (
    <div className={styles.hello}>
      <Title title={"Dynamic Routing"} sub_title={"/dynamicRouting/[postId]"} />

      <h4>Post ID: {id}</h4>
      <ul>
        <li style={{ listStyle: "none" }}>
          <Link href={`/dynamicRouting/${id}/first-comment`}>
            <a>First comment</a>
          </Link>
        </li>
        <li style={{ listStyle: "none" }}>
          <Link href={`/dynamicRouting/${id}/second-comment`}>
            <a>Second comment</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
