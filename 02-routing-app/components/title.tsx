import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

function Title({ title, sub_title }: any) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <h2>Title - {title}</h2>
      <span>
        <Link href={"#"}>
          <a onClick={() => router.back()}>Go back</a>
        </Link>{" "}
        Current URL - {sub_title}
      </span>
      <hr></hr>
    </>
  );
}

export default Title;
