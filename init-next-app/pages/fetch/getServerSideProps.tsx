import React from "react";

const PostList = (prop: any) => {
  return (
    <ul>
      {prop?.post?.map((p: any) => (
        <li>
          {p.id} - {p.title} ({p.author})
        </li>
      ))}
    </ul>
  );
};

function Posts({ data }: any) {
  // Render data...
  return (
    <>
      <h2>Eg - ServerSideProps</h2>
      <p>URL: `/fetch/getServerSideProps`</p>
      <PostList post={data} />
    </>
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
