import styles from './book.module.css';

export default function BookPage() {
  return (
    <section className={styles.bookingSection}>
      <h1 className={styles.heading}>Book Your Stay</h1>
      <p className={styles.text}>
        We’re so glad you’re planning a trip to Bearadise in the Smokies! Booking your stay is quick and easy.
        Just select your dates, fill in your details, and we’ll take care of the rest. 
      </p>

      <div className={styles.fillerContent}>
        <h2 className={styles.subheading}>What to Expect</h2>
        <ul className={styles.list}>
          <li>✔️ 3-Story Luxury Cabin</li>
          <li>✔️ Sleeps 12 Comfortably</li>
          <li>✔️ Scenic Views + Cozy Fireplace</li>
          <li>✔️ Private Hot Tub + Game Room</li>
          <li>✔️ Just 1 Mile from Downtown Gatlinburg</li>
        </ul>

        <div className={styles.placeholderBox}>
          <p>📆 Booking calendar coming soon...</p>
        </div>
      </div>
    </section>
  );
}