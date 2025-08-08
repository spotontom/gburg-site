import styles from './about.module.css';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.aboutHeading}>About Bearadise in the Smokies</h1>
      
      <p className={styles.aboutText}>
        Nestled in the heart of Gatlinburg, <span className={styles.highlight}>Bearadise in the Smokies</span> was thoughtfully designed by Summer and Matt —
        two passionate nature lovers with a vision for creating a warm, timeless retreat that feels like home from the moment you arrive.
      </p>

      <h2 className={styles.aboutSubheading}>Designed with Purpose</h2>
      <p className={styles.aboutText}>
        Every detail, from the hand-picked wood accents to the cozy furnishings, reflects Summer’s eye for comfort and Matt’s appreciation for the natural beauty of the Smokies.
        The cabin is a modern escape, balanced by rustic charm and refined mountain character.
      </p>

      <p className={styles.aboutText}>
        Whether you're sipping coffee on the porch or relaxing by the fire, Bearadise offers a space to slow down, recharge, and connect with nature.
      </p>
    </section>
  );
}