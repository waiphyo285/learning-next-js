import Head from "next/head";
import styles from "../styles/components/layout.module.css";

function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Eg - Layouts</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
}

export default Layout;
