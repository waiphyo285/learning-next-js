import Link from "next/link";
import { format } from "url";
import { useRouter } from "next/router";

import Title from "../../components/title";
import styles from "../../styles/Hello.module.css";

let counter = 0;

export async function getServerSideProps() {
  return {
    props: {
      initialPropsCounter: counter++,
    },
  };
}

function Shallow({ initialPropsCounter }: any) {
  const router = useRouter();
  const { pathname, query } = router;

  const reload = () => {
    router.push(format({ pathname, query }));
  };

  const incrementCounter = () => {
    const currentCounter: number = query.counter ? Number(query.counter) : 0;
    const href = `?counter=${currentCounter + 1}`;

    router.push(href, href, { shallow: true });
  };

  return (
    <div className={styles.hello}>
      <Title title={"Shallow Rouring"} sub_title={"/shallowRouting"} />

      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
        <button onClick={reload} className={"btn btn-dark mx-1"}>
          Reload
        </button>
        <button onClick={incrementCounter} className={"btn btn-dark mx-1"}>
          Change State Counter
        </button>
      </div>

      <hr />

      <div>
        <p>getServerSideProps ran for &ldquo;{initialPropsCounter}&ldquo; times.</p>
        <p>Change State Counter: &ldquo;{query.counter || 0}&ldquo;.</p>
      </div>
    </div>
  );
}

export default Shallow;
