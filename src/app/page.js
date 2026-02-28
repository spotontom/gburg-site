import Image from "next/image";
import GalleryCarousel from "./components/Gallerycarousel";

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero" aria-label="Cabin hero">
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
        <h1 id="home-hero-title" className="home-hero-title sr-only">
          Bearadise in the Smokies
        </h1>
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
    <div className="home-media">
      <div className="home-media-head">Game Lounge</div>
      <Image
        src="/imgs/gameroom/1-web-or-mls-DSC_4190.jpg"
        alt="Game lounge photo"
        width={600}
        height={400}
        className="media-img"
      />
      <p>Polycade arcade system, game table (air hockey & ping pong), plus big-screen TV.</p>
    </div>

    {/* Hot Tub */}
    <div className="home-media">
      <div className="home-media-head">Private Hot Tub</div>
      <Image
        src="/imgs/DSC_8388.jpg"
        alt="Hot tub with view"
        width={600}
        height={400}
        className="media-img"
      />
      <p>Covered tub on the balcony with mountain views, ideal for stargazing.</p>
    </div>

    {/* Living Room */}
    <div className="home-media">
      <div className="home-media-head">Living Room</div>
      <Image
        src="/imgs/livingroom.jpg"
        alt="Living room photo"
        width={600}
        height={400}
        className="media-img"
      />
      <p>Spacious living area with fireplace, comfy seating, and views all around.</p>
    </div>

    {/* Loft Nook */}
    <div className="home-media">
      <div className="home-media-head">Secret Kids Kave</div>
      <Image
        src="/imgs/DSC_8378.jpg"
        alt="Living room photo"
        width={600}
        height={400}
        className="media-img"
      />
      <p>Cozy ladder access hangout for kids, watch movies, play games, or relax.</p>
    </div>
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
    </div>
  <div className="home-chip-row">
    <span className="home-chip">3 King Bedrooms</span>
    <span className="home-chip">2 Queen Sleeper Sofas</span>
    <span className="home-chip">3 Full Bathrooms</span>
  </div>
  <p></p>
  <div className="home-sleep-grid">
    {/* Main Floor King Suite */}
    <div className="home-sleep-card">
      <Image
        src="/imgs/DSC_8357.jpg" 
        alt="Main floor bedroom photo"
        width={500}
        height={350}
        className="sleep-img"
      />
      <h3>Main Floor King Suite</h3>
      <p>Private bath, mountain views, direct balcony access</p>
    </div>

    {/* Upper Floor King Suite */}
    <div className="home-sleep-card">
      <Image
        src="/imgs/10-web-or-mls-DSC_4214.jpg" 
        alt="Upper floor bathroom photo"
        width={500}
        height={350}
        className="sleep-img"
      />
      <h3>Basement Bathroom Suite</h3>
      <p>Private bath, adjacent to gameroom & bedroom</p>
    </div>

    {/* Basement King Bedroom */}
    <div className="home-sleep-card">
      <Image
        src="/imgs/13-web-or-mls-DSC_4223.jpg"
        alt="Basement king bedroom photo"
        width={500}
        height={350}
        className="sleep-img"
      />
      <h3>Basement King Bedroom</h3>
      <p>Near game lounge & laundry room</p>
    </div>

    {/* Queen Sleeper Sofas */}
    <div className="home-sleep-card">
      <Image
        src="/imgs/livingroom.jpg"
        alt="Living room sleeper sofa"
        width={500}
        height={350}
        className="sleep-img"
      />
      <h3>Queen Sleeper Sofas</h3>
      <p>One in loft, one in basement lounge</p>
    </div>
  </div>
</section>

      {/* FACTS / CTA */}
      <section className="home-facts">
        <ul className="home-facts-list">
          <li><strong>Stories:</strong> 3</li>
          <li><strong>Bathrooms:</strong> 3 full</li>
          <li><strong>Check-in:</strong> 4:00 PM</li>
          <li><strong>Check-out:</strong> Before 11:00 AM</li>
          <li><strong>Pets:</strong> This property is not pet friendly</li>
          <li><strong>Parking:</strong> On-site</li>
          <li><strong>House Rules:</strong> No parties, no smoking, quiet hours 10pm–8am</li>
        </ul>
        <div className="home-cta center">
          <a
            className="home-btn primary"
            href="/book"
            rel="noopener"
          >
            See Dates Available
          </a>
        </div>
      </section>
    </div>
  );
}
