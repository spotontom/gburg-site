import styles from "./nearby.module.css";
import Link from "next/link";

export const metadata = {
  title: "Nearby & Fun | Boujee Lodge",
  description: "Handpicked hikes, eats, and attractions close to the lodge.",
};

export default function NearbyPage() {
  return (
    <main className={styles.wrap}>
      <section className={styles.hero}>
        <h1>Nearby & Fun</h1>
        <p>Handpicked hikes, eats, and attractions close to the lodge.</p>
        <Link href="/#booking" className={styles.cta}>
          Check Dates
        </Link>
      </section>

      <section className={styles.grid}>
        <article className={styles.card}>
          <h2>Outdoors</h2>
          <ul>
            <li><strong>Laurel Falls Trail</strong> — 2.6 mi loop • ~32 min</li>
            <li><strong>Clingmans Dome</strong> — epic views • ~55 min</li>
            <li><strong>Roaring Fork</strong> — scenic motor nature trail • ~25 min</li>
          </ul>
        </article>

        <article className={styles.card}>
          <h2>Food & Drinks</h2>
          <ul>
            <li><strong>The Greenbrier</strong> — steakhouse • ~18 min</li>
            <li><strong>Smoky Mountain Brewery</strong> — casual • ~16 min</li>
            <li><strong>Donut Friar</strong> — morning fix • ~20 min</li>
          </ul>
        </article>

        <article className={styles.card}>
          <h2>Family Fun</h2>
          <ul>
            <li><strong>Dollywood</strong> — rides & shows • 20–25 min</li>
            <li><strong>Anakeesta</strong> — mountain park • ~22 min</li>
            <li><strong>Ripley’s Aquarium</strong> — sea life • ~21 min</li>
          </ul>
        </article>
      </section>
    </main>
  );
}