import React from "react";
import styles from "../../../styles/Hello.module.css";

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
      <h2>Eg - Incremental Static Regenerate</h2>
      <p>URL: `/fetch/incStaticRegenerate/[postId]`</p>
      <PostList post={posts} />
    </div>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`http://localhost:3001/posts`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`http://localhost:3001/posts`);
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post: any) => ({
    params: { id: post.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: false };
}

export default Posts;
