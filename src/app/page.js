export default function HomePage() {
  return (
    <main className="home-page">
      {/* HERO */}
      <section className="home-hero" role="banner" aria-label="Cabin hero">
        <div className="home-hero-inner">
          <h1 className="home-hero-title"></h1>
          <p className="home-hero-subtitle">
            New 3-story modern cabin • Sleeps 12 • Stunning Smoky Mountain views
          </p>
          <div className="home-cta">
            <a
              className="home-btn primary"
              href="https://www.airbnb.com/rooms/1014022255504809661"
              target="_blank"
              rel="noopener"
            >
              View Availability
            </a>
            <a className="home-btn ghost" href="/book">Book Now</a>
          </div>
        </div>
      </section>

      {/* FEATURE IMAGE 
      <section className="home-figure">
        <img src="/imgs/view1.jpg" alt="Mountain view from The Lodge at SOTC" />
      </section> */}

      {/* HIGHLIGHTS (mixed style) */}
<section className="home-highlights" aria-label="Highlights">
  <div className="home-section-head">
    <h2>Why You’ll Love It</h2>
    <p>Perfect location off the Parkway in Gatlinburg, built for family fun and relaxation.</p>
  </div>

  {/* Media list (3 items) */}
  <div className="home-media-list">
    <article className="home-media">
      <div className="home-media-head">Game Lounge</div>
      <p>Polycade arcade system, game table (air hockey & ping pong), plus big-screen TV.</p>
    </article>

    <article className="home-media">
      <div className="home-media-head">Private Hot Tub</div>
      <p>Covered tub on the balcony with mountain views—ideal for stargazing.</p>
    </article>

    <article className="home-media">
      <div className="home-media-head">Loft Nook</div>
      <p>Cozy ladder-access hangout for kids—watch movies, play games, or relax.</p>
    </article>
  </div>

  {/* Feature chips (3 items) */}
  <div className="home-chip-row">
    <span className="home-chip">Chef-Ready Kitchen</span>
    <span className="home-chip">Fast Wi-Fi</span>
    <span className="home-chip">Central Location</span>
  </div>
</section>

      {/* AMENITIES */}
      <section className="home-amenities">
        <div className="home-section-head">
          <h2>Amenities</h2>
        </div>
        <div className="home-amenity-groups">
          <div className="home-amenity-col">
            <h3>Entertainment</h3>
            <ul>
              <li>Polycade arcade system</li>
              <li>Air hockey + ping pong combo table</li>
              <li>Loft nook w/ TV & seating</li>
              <li>Smart TVs in multiple rooms</li>
            </ul>
          </div>
          <div className="home-amenity-col">
            <h3>Relax & Outdoors</h3>
            <ul>
              <li>Private covered hot tub</li>
              <li>Outdoor dining & seating</li>
              <li>Mountain-view balconies</li>
              <li>Fire pit area</li>
            </ul>
          </div>
          <div className="home-amenity-col">
            <h3>Home Comforts</h3>
            <ul>
              <li>Full kitchen w/ coffee station</li>
              <li>Washer & dryer</li>
              <li>Central A/C & heat</li>
              <li>High-speed Wi-Fi</li>
            </ul>
          </div>
          <div className="home-amenity-col">
            <h3>Family</h3>
            <ul>
              <li>Kid-friendly loft nook</li>
              <li>Pack ’n Play (if available)</li>
              <li>High chair (if available)</li>
              <li>Board games</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SLEEPING */}
      <section className="home-sleep">
        <div className="home-section-head">
          <h2>Sleeping Arrangements</h2>
          <p>3 king bedrooms + 2 queen sleeper sofas • 3 full bathrooms</p>
        </div>
        <div className="home-sleep-grid">
          <article className="home-sleep-card">
            <h3>Main Floor King Suite</h3>
            <p>Private bath, mountain views, direct balcony access</p>
          </article>
          <article className="home-sleep-card">
            <h3>Upper Floor King Suite</h3>
            <p>Private bath, adjacent to loft & nook area</p>
          </article>
          <article className="home-sleep-card">
            <h3>Basement King Bedroom</h3>
            <p>Near game lounge & laundry room</p>
          </article>
          <article className="home-sleep-card">
            <h3>Queen Sleeper Sofas</h3>
            <p>One in loft, one in basement lounge</p>
          </article>
        </div>
      </section>

      {/* FACTS / CTA */}
      <section className="home-facts">
        <ul className="home-facts-list">
          <li><strong>Stories:</strong> 3</li>
          <li><strong>Bathrooms:</strong> 3 full</li>
          <li><strong>Check-in:</strong> After 4:00 PM</li>
          <li><strong>Check-out:</strong> Before 10:00 AM</li>
          <li><strong>Pets:</strong> Please inquire</li>
          <li><strong>Parking:</strong> On-site</li>
          <li><strong>House Rules:</strong> No parties, no smoking, quiet hours 10pm–8am</li>
        </ul>
        <div className="home-cta center">
          <a
            className="home-btn primary"
            href="https://www.airbnb.com/rooms/1014022255504809661"
            target="_blank"
            rel="noopener"
          >
            See Dates on Airbnb
          </a>
        </div>
      </section>
    </main>
  );
}
