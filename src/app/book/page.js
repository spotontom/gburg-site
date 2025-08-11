import styles from "./book.module.css";

export default function Book(){
  return (
    <main className={styles.page}>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.title}>Book Your Stay</h1>
          <p className={styles.lead}>
            We’re so glad you’re planning a trip to Bearadise in the Smokies! Booking your stay is quick and easy…
          </p>

          <div className={styles.grid}>
            <ul className={styles.list}>
              {[
                "3-Story Luxury Cabin",
                "Sleeps 12 Comfortably",
                "Scenic Views + Cozy Fireplace",
                "Private Hot Tub + Game Room",
                "Just 1 Mile from Downtown Gatlinburg",
              ].map((t)=> <li key={t}>✔️ {t}</li>)}
            </ul>

            <form className={`${styles.card} ${styles.form}`}>
              <div className={styles.field}>
                <label className={styles.label}>Full Name</label>
                <input className={styles.input} autoComplete="name" />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Email</label>
                <input className={styles.input} type="email" autoComplete="email" />
              </div>

              <div className={`${styles.field} ${styles.dates}`}>
                <div className={styles.field}>
                  <label className={styles.label}>Check-in</label>
                  <input className={styles.input} type="date" />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Check-out</label>
                  <input className={styles.input} type="date" />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Guests</label>
                <select className={styles.select} defaultValue="">
                  <option value="" disabled>Select guests</option>
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n}>{n}</option>)}
                </select>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Message</label>
                <textarea className={styles.textarea} rows={4} />
              </div>

              <button type="button" className={styles.button}>Request to Book</button>
            </form>
          </div>

          <div className={styles.note}>📅 Booking calendar coming soon…</div>
        </div>
      </section>
    </main>
  )};