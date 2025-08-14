"use client";
import { useState } from "react";
import styles from "./book.module.css";

export default function Book(){
  const [form, setForm] = useState({
    name: "",
    email: "",
    arrival: "",
    departure: "",
    guests: "",
    message: "",
  });
  const [status, setStatus] = useState({ sending: false, done: false, error: "" });

  const minArrival = new Date().toISOString().split("T")[0];

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email.";
    if (!form.arrival || !form.departure) return "Please choose arrival and departure dates.";
    if (new Date(form.departure) <= new Date(form.arrival)) return "Departure must be after arrival.";
    if (!form.guests) return "Please select number of guests.";
    return "";
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) { setStatus({ sending:false, done:false, error: err }); return; }

    setStatus({ sending:true, done:false, error:"" });

    try {
      // ===== Today: send to your own API route (email or save) =====
      // Create /app/api/booking/route.js (see below) and uncomment:
      // await fetch("/api/booking", { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(form) });

      // Simulate:
      await new Promise((r)=> setTimeout(r, 700));

      // ===== Later: OwnerRez handoff (when you have an account) =====
      // const ownerRezQuoteUrl = `https://app.ownerrez.com/forms/quotes/XXXXXXXXXXXX?arrival=${form.arrival}&departure=${form.departure}&adults=${form.guests}`;
      // window.location.href = ownerRezQuoteUrl;
      // return;

      setStatus({ sending:false, done:true, error:"" });
      // Optional: reset form after success
      // setForm({ name:"", email:"", arrival:"", departure:"", guests:"", message:"" });
    } catch (e) {
      setStatus({ sending:false, done:false, error:"Something went wrong. Please try again." });
    }
  };

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

            <form className={`${styles.card} ${styles.form}`} onSubmit={onSubmit} noValidate>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">Full Name</label>
                <input id="name" name="name" className={styles.input} autoComplete="name" value={form.name} onChange={onChange} required />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input id="email" name="email" className={styles.input} type="email" autoComplete="email" value={form.email} onChange={onChange} required />
              </div>

              <div className={`${styles.field} ${styles.dates}`}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="arrival">Check-in</label>
                  <input id="arrival" name="arrival" className={styles.input} type="date" min={minArrival} value={form.arrival} onChange={onChange} required />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="departure">Check-out</label>
                  <input id="departure" name="departure" className={styles.input} type="date" min={form.arrival || minArrival} value={form.departure} onChange={onChange} required />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="guests">Guests</label>
                <select id="guests" name="guests" className={styles.select} value={form.guests} onChange={onChange} required>
                  <option value="" disabled>Select guests</option>
                  {[1,2,3,4,5,6,7,8,9,10,11,12].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">Message</label>
                <textarea id="message" name="message" className={styles.textarea} rows={4} value={form.message} onChange={onChange} />
              </div>

              {status.error && <p className={styles.error} role="alert">{status.error}</p>}
              {status.done && <p className={styles.success} role="status">Thanks! We’ve received your request—watch your email for next steps.</p>}

              <button type="submit" className={styles.button} disabled={status.sending}>
                {status.sending ? "Sending..." : "Request to Book"}
              </button>
            </form>
          </div>

          <div className={styles.note}>📅 Booking calendar coming soon…</div>
        </div>
      </section>
    </main>
  );
}