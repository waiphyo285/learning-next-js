import styles from "../../../styles/Hello.module.css";

// pages/posts/[id].js

function Post({ post }: any) {
  // Render post...
  return (
    <div className={styles.hello}>
      <h2>Eg - Static Paths</h2>
      <p>URL: `/fetch/getStaticPaths/[postId]`</p>
      <li style={{ listStyle: "none" }}>
        {post.id} - {post.title} ({post.author})
      </li>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3001/posts`);
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post: any) => ({
    params: { id: post.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }: any) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`http://localhost:3001/posts/${params.id}`);
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post } };
}

export default Post;
