import React from "react";
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

function Posts({ posts }: any) {
  // Render data...
  return (
    <div className={styles.hello}>
      <h2>Eg - Static Props</h2>
      <p>URL: `/fetch/getStaticProps`</p>
      <PostList post={posts} />
    </div>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`http://localhost:3001/posts`);
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Posts;
