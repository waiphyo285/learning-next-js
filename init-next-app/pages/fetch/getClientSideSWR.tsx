import useSWR from "swr";
import styles from "../../styles/Hello.module.css";

const fetcher = (...args: any) => fetch(args).then((res: any) => res.json());

function Profile() {
  const { data, error } = useSWR("http://localhost:3001/profile", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className={styles.hello}>
      <h2>Eg - Fetch Client Side with SWR</h2>
      <p>URL: `/fetch/getClientSideSWR`</p>
      <br />
      <h4>FullName: {data?.fullname}</h4>
      <span>Occupation: {data?.occupation}</span>
    </div>
  );
}

export default Profile;
