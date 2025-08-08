import styles from './availability.module.css';
import Image from 'next/image';


export default function AvailabilityPage() {
  return (
    <section className={styles.availabilitySection}>
      <h1 className={styles.heading}>Check Availability</h1>
      
      <p className={styles.text}>
        Bearadise is a highly sought-after retreat — especially during peak season. Below you’ll find our current availability and booking options.
      </p>

      <div className={styles.imageWrapper}>
      <Image
  src="/imgs/frontview.jpg"
  alt="Availability calendar preview"
  width={800}
  height={500}
  className={styles.image}
/>
      </div>

      <p className={styles.text}>
        For live calendar updates, booking inquiries, or to reserve your stay directly, visit our Airbnb listing or use the booking tab above.
      </p>
    </section>
  );
}
