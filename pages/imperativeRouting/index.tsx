import { useRouter } from "next/router";
import Title from "../../components/title";
import styles from "../../styles/Hello.module.css";

const Link = ({ children, href }: any) => {
  const router = useRouter();

  const goToHref = (e: any) => {
    e.preventDefault();
    // typically you want to use `next/link` for this usecase
    // but this example shows how you can also access the router
    // and use it manually
    router.push(href);
  };

  return (
    <a href="#" onClick={(e) => goToHref(e)}>
      {children}
      <style jsx>{`
        a {
          margin-right: 10px;
        }
      `}</style>
    </a>
  );
};

function Header() {
  return (
    <div className={styles.hello}>
      <Title title={"Imperative Rouring"} sub_title={"/imperativeRouting"} />

      <div>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}

export default Header;
