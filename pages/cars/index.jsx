import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Cars() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="/cars/lamborghini/gallardo">Gallardo - Lamborghini</Link>
        </li>
        <li>
          <Link href="/cars/lamborghini/aventador">
            Aventador - Lamborghini
          </Link>
        </li>
        <li>
          <Link href="/cars/chevy/corvette">Corvette - Chevy</Link>
        </li>
      </ul>
    </div>
  );
}
