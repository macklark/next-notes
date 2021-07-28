import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";

export default function MovieId() {
  const router = useRouter();

  console.log(router.query.id);

  return (
    <div className={styles.container}>
      <h1>Movie ID page</h1>
      {/* {router.query.id.map((instance) => {
        return <p key={instance}>{instance}</p>;
      })} */}
    </div>
  );
}
