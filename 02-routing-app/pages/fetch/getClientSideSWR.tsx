import useSWR from "swr";
import Title from "../../components/title";
import styles from "../../styles/Hello.module.css";

const fetcher = (...args: any) => fetch(args).then((res: any) => res.json());

function Profile() {
  const { data, error } = useSWR("http://localhost:3001/profile", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className={styles.hello}>
      <Title
        title={"Fetch Client Side with SWR"}
        sub_title={"/fetch/getClientSideSWR"}
      />

      <h4>FullName: {data?.fullname}</h4>
      <span>Occupation: {data?.occupation}</span>
    </div>
  );
}

export default Profile;
