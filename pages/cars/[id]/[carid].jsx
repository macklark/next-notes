import styles from "../../../styles/Home.module.css";
import { useRouter } from "next/router";

export default function CardId() {
  const router = useRouter();

  //   console.log(router.pathname);
  //   console.log(router.query);

  return (
    <div className={styles.container}>
      <h1>
        Car ID page - {router.query.id} - {router.query.carid}
      </h1>
    </div>
  );
}
