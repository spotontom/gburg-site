import Image from "next/image";
import GalleryCarousel from "./components/Gallerycarousel";

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="home-hero" role="banner" aria-label="Cabin hero">
        <Image
          src="/imgs/frontview.jpg"
          alt="Bearadise cabin interior"
          fill
          priority
          quality={95}
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "50% 45%" }}
        />

        <div className="home-hero-inner">
          <h1 className="home-hero-title"></h1>
          <p className="home-hero-subtitle">
            New 3-story modern cabin • Sleeps 12 • Stunning Smoky Mountain views
          </p>
          <div className="home-cta">
            <a className="home-btn ghost" href="/book">Book Now</a>
          </div>
        </div>
      </section>

      <section className="home-highlights" aria-label="Highlights">
  <div className="home-section-head">
    <h2>Why You’ll Love It</h2>
    <p>Perfect location off the Parkway in Gatlinburg, built for family fun and relaxation.</p>
  </div>

  <div className="home-media-list">
    {/* Game Room */}
    <article className="home-media">
      <div className="home-media-head">Game Lounge</div>
      <Image
        src="/imgs/gameroom/1-web-or-mls-DSC_4190.jpg"
        alt="Game lounge photo"
        width={600}
        height={400}
        className="media-img"
      />
      <p>Polycade arcade system, game table (air hockey & ping pong), plus big-screen TV.</p>
    </article>

    {/* Hot Tub */}
    <article className="home-media">
      <div className="home-media-head">Private Hot Tub</div>
      <Image
        src="/imgs/DSC_8388.jpg"
        alt="Hot tub with view"
        width={600}
        height={400}
        className="media-img"
      />
      <p>Covered tub on the balcony with mountain views, ideal for stargazing.</p>
    </article>

    {/* Living Room */}
    <article className="home-media">
      <div className="home-media-head">Living Room</div>
      <Image
        src="/imgs/livingroom.jpg"
        alt="Living room photo"
        width={600}
        height={400}
        className="media-img"
      />
      <p>Spacious living area with fireplace, comfy seating, and views all around.</p>
    </article>

    {/* Loft Nook */}
    <article className="home-media">
      <div className="home-media-head">Secret Kids Kave</div>
      <Image
        src="/imgs/DSC_8378.jpg"
        alt="Living room photo"
        width={600}
        height={400}
        className="media-img"
      />
      <p>Cozy ladder access hangout for kids, watch movies, play games, or relax.</p>
    </article>
  </div>
</section>

  {/* Feature chips (3 items) */}
  <div className="home-chip-row">
    <span className="home-chip">Chef-Ready Kitchen</span>
    <span className="home-chip">Fast Wi-Fi</span>
    <span className="home-chip">Central Location</span>
  </div>

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
              <li>Smart TVs in every bedroom</li>
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

      {/* Slideshow */}
      <GalleryCarousel
      title="Amenities Photo Gallery"
      images={[
          { src: "/imgs/DSC_8426.jpg", alt: "Cabin exterior", caption: "Main View of Cabin" },
          { src: "/imgs/livingroom.jpg", alt: "Living room", caption: "Spacious living room + views" },
          { src: "/imgs/DSC_8388.jpg", alt: "Hot tub", caption: "Covered hot tub with mountain views" },
          { src: "/imgs/gameroom/1-web-or-mls-DSC_4190.jpg", alt: "Game lounge", caption: "Arcade + game table" },
          { src: "/imgs/DSC_8378.jpg", alt: "Kids kave", caption: "Secret kids kave hangout" },
        ]}
      /> 

      {/* SLEEPING */}
<section className="home-sleep">
  <div className="home-section-head">
    <h2>Sleeping Arrangements</h2>
    <p>3 king bedrooms + 2 queen sleeper sofas • 3 full bathrooms</p>
  </div>

  <div className="home-sleep-grid">
    {/* Main Floor King Suite */}
    <article className="home-sleep-card">
      <Image
        src="/imgs/DSC_8357.jpg" 
        alt="Main floor bedroom photo"
        width={500}
        height={350}
        className="sleep-img"
      />
      <h3>Main Floor King Suite</h3>
      <p>Private bath, mountain views, direct balcony access</p>
    </article>

    {/* Upper Floor King Suite */}
    <article className="home-sleep-card">
      <Image
        src="/imgs/10-web-or-mls-DSC_4214.jpg" 
        alt="Upper floor bathroom photo"
        width={500}
        height={350}
        className="sleep-img"
      />
      <h3>Basement Bathroom Suite</h3>
      <p>Private bath, adjacent to gameroom & bedroom</p>
    </article>

    {/* Basement King Bedroom */}
    <article className="home-sleep-card">
      <Image
        src="/imgs/13-web-or-mls-DSC_4223.jpg"
        alt="Basement king bedroom photo"
        width={500}
        height={350}
        className="sleep-img"
      />
      <h3>Basement King Bedroom</h3>
      <p>Near game lounge & laundry room</p>
    </article>

    {/* Queen Sleeper Sofas */}
    <article className="home-sleep-card">
      <Image
        src="/imgs/livingroom.jpg"
        alt="Living room sleeper sofa"
        width={500}
        height={350}
        className="sleep-img"
      />
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
          <li><strong>Check-in:</strong> 4:00 PM</li>
          <li><strong>Check-out:</strong> Before 10:00 AM</li>
          <li><strong>Pets:</strong> This property is not pet friendly</li>
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
