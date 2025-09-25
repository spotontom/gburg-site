"use client";


import { useEffect } from "react";
import styles from "./book.module.css";


export default function Book() {
  useEffect(() => {
    const container = document.getElementById("ownerrez-widget-container");
  
    // Clean out any previous widget content
    container.innerHTML = "";
  
    // Create widget div and append
    const widgetDiv = document.createElement("div");
    widgetDiv.className = "ownerrez-widget";
    widgetDiv.setAttribute("data-propertyId", "dcb31f5dee5c4c798252ddea699d32c9");
    widgetDiv.setAttribute("data-widget-type", "Bearadise in the Smokies - Booking/Inquiry");
    widgetDiv.setAttribute("data-widgetId", "7b5391064ae34b03972ade21d1f00b58");
    container.appendChild(widgetDiv);
  
    const injectScript = () => {
      const existing = document.querySelector('script[src="https://app.ownerrez.com/widget.js"]');
  
      if (!existing) {
        const script = document.createElement("script");
        script.src = "https://app.ownerrez.com/widget.js";
        script.async = true;
  
        script.onload = () => {
          console.log("✅ OwnerRez script loaded");
          if (window.ORW && typeof window.ORW.initAll === "function") {
            window.ORW.initAll();
          } else {
            console.error("❌ window.ORW still undefined after script load");
          }
        };
  
        script.onerror = () => {
          console.error("❌ Failed to load OwnerRez widget.js");
        };
  
        document.body.appendChild(script);
      } else {
        console.log("ℹ️ OwnerRez script already present");
        if (window.ORW && typeof window.ORW.initAll === "function") {
          window.ORW.initAll();
        }
      }
    };
  
    // Small delay to allow hydration to complete
    setTimeout(injectScript, 300);
  }, []);

return (
<main className={styles.page}>
<section className={styles.section}>
<div className={styles.container}>
<h1 className={styles.title}>Book Your Stay</h1>
<p className={styles.lead}>Use the secure booking tool below to check availability, request a quote, or confirm your stay at Bearadise in the Smokies.</p>


<div id="ownerrez-widget-container" className={styles.widgetWrapper}></div>


<div className={styles.note}>✔️ Instant quotes, calendar sync, and secure booking powered by OwnerRez.</div>
</div>
</section>
</main>
);
}