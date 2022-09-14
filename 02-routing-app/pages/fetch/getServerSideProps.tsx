import React from "react";
import Title from "../../components/title";
import styles from "../../styles/Hello.module.css";

function PostList(prop: any) {
  return (
    <ul>
      {prop?.post?.map((p: any, idx: number) => (
        <li key={idx} style={{ listStyle: "none" }}>
          {p.id} - {p.title} ({p.author})
        </li>
      ))}
    </ul>
  );
}

function Posts({ data }: any) {
  // Render data...
  return (
    <div className={styles.hello}>
      <Title
        title={"Server Side Props"}
        sub_title={"/fetch/getServerSideProps"}
      />

      <PostList post={data} />
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3001/posts`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Posts;
