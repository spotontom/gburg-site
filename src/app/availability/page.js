import styles from './availability.module.css';
import Image from 'next/image';


export default function AvailabilityPage() {
  return (
    <section className={styles.availabilitySection}>
      <h1 className={styles.heading}>Check Availability</h1>
      
      <p className={styles.text}>
        Bearadise in the Smokies is a highly sought after retreat, especially during peak season. Below you’ll find our current availability and booking options.
      </p>
      <div className="home-cta center">
          <a
            className="home-btn primary"
            href="/book"
            rel="noopener"
          >
            See Dates Available
          </a>
        </div>
      <p className={styles.text}>
        For live calendar updates, booking inquiries, or to reserve your stay directly, use the booking tab above.
      </p>
      <div justify-content="center" className={styles.imageWrapper}>
      <Image
  src="/imgs/DSC_8397.jpg"
  alt="Availability calendar preview"
  width={800}
  height={500}
  className={styles.image}
/>
      </div>
    </section>
  );
}
