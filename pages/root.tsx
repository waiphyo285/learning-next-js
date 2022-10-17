import Link from "next/link";
import Title from "../components/title";
import styles from "../styles/Hello.module.css";

function Root() {
  return (
    <div className={styles.hello}>
      <Title title={"Root Page"} sub_title={"/root"} />

      <ol>
        <li>Basic Feature</li>
        <ol>
          <li>Pages</li>
          <ol>
            <li>
              <Link href={"/posts/create"}>Create Post</Link>
            </li>
            <li>
              <Link href="/posts/edit/1">Edit Post</Link>
            </li>
          </ol>
          <li>Data Fetching</li>
          <ol>
            <li>
              <Link href="/fetch/getStaticProps">Get Static Props</Link>
            </li>
            <li>
              <Link href="/fetch/getStaticPaths/1">Get Static Paths</Link>
            </li>
            <li>
              <Link href="/fetch/getServerSideProps">
                Get Server Side Props
              </Link>
            </li>
            <li>
              <Link href="/fetch/incStaticRegenerate/1">
                Incremental Static Regenerate
              </Link>
            </li>
            <li>
              <Link href="/fetch/getClientSide">Get Client Side</Link>
            </li>
            <li>
              <Link href="/fetch/getClientSideSWR">
                Get Client Side with SWR
              </Link>
            </li>
          </ol>
          <li>Built-in CSS</li>
          <ol>
            <li>
              <Link href="/styles/builtIn">Sample CSS</Link>
            </li>
            <li>
              <Link href="/styles/bootstrap">Sample Bootstrap</Link>
            </li>
            <li>
              <Link href="/styles/thirdParty">Sample Third Party</Link>
            </li>
          </ol>
          <li>Layout</li>
          <ol>
            <li>
              <Link href="/">Welcome Page</Link>
            </li>
          </ol>
          <li>Image Optimization</li>
          <ol>
            <li>
              <Link href="/images/show">Sample Image</Link>
            </li>
            <li>
              <Link href="/images/fill">Layout Image</Link>
            </li>
          </ol>
          <li>Font Optimization</li>
          <ol>
            <li>
              <Link href="/">Welcome Font</Link>
            </li>
          </ol>
          <li>Static File Serving</li>
          <ol>
            <li>
              <Link href="/static/image">Satic Image</Link>
            </li>
          </ol>
          <li>Fast Refresh</li>
          <ol>
            <li>
              <Link href="/fastRefresh/counter">Sample Counter</Link>
            </li>
          </ol>
          <li>Env Variable</li>
          <ol>
            <li>
              <Link href="/env/sample">Sample ENV</Link>
            </li>
          </ol>
        </ol>
        <li>Routing</li>
        <ol>
          <li>
            <Link href="/dynamicRouting/1">Dynamic Routing</Link>
          </li>
          <li>
            <Link href="/imperativeRouting">Imperative Routing</Link>
          </li>
          <li>
            <Link href="/shallowRouting">Shallow Routing</Link>
          </li>
        </ol>
      </ol>
    </div>
  );
}

export default Root;
