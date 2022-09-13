import { useEffect, useState } from "react";
import styles from "../../styles/Hello.module.css";

function Profile() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3001/profile")
      .then((res: any) => res.json())
      .then((data: any) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className={styles.hello}>
      <h2>Eg - Fetch Client Side</h2>
      <p>URL: `/fetch/getClientSide`</p>
      <br />
      <h4>FullName: {data?.fullname}</h4>
      <span>Occupation: {data?.occupation}</span>
    </div>
  );
}

export default Profile;
