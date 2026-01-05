import styles from './about.module.css';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.aboutHeading}>About Bearadise in the Smokies</h1>
      
      <p className={styles.aboutText}>
      Welcome to Bearadise in the Smokies, a modern mountain retreat designed to feel like home.
      Nestled in the heart of Gatlinburg and just moments from the Parkway, 
      Bearadise in the Smokies is a thoughtfully designed escape created by Summer and Matt, two nature lovers with a passion for timeless design, 
      comfort, and the beauty of the Great Smoky Mountains. From the moment you arrive, this cabin invites you to slow down, recharge, and truly connect with nature.
      Every detail tells a story, from hand-selected wood accents and cozy, elevated furnishings to panoramic mountain views that bring the outdoors in. 
      The result is a modern cabin perfectly balanced with rustic charm and refined mountain character. Whether you’re sipping coffee on the porch, gathering around the fire, 
      or soaking in the hot tub, Bearadise offers a warm, welcoming space made for unforgettable memories.
      </p>

      <h2 className={styles.aboutSubheading}>Why Guests Love Bearadise</h2>
      <p className={styles.aboutText}>
        •  Brand new 2023 construction with modern finishes and mountain charm
        •  Prime Gatlinburg location right off the Parkway
        •  Stunning panoramic views of the Great Smoky Mountains
        •  Sleeps up to 10 guests comfortably
      </p>

      <h2 className={styles.aboutSubheading}>Sleeping & Living Spaces</h2>
      <p className={styles.aboutText}>
        •    3 King bedrooms, each with en-suite bathrooms
        •    2 Queen sleeper sofas for flexible sleeping arrangements
        •    Open-concept living, dining & kitchen with breathtaking views
        •    Loft living area with pull-out sofa and game space
      </p>

      <h2 className={styles.aboutSubheading}>Entertainment for All Ages</h2>
      <p className={styles.aboutText}>
        •    Game room with Polycade arcade system
        •    Convertible game table (air hockey + ping pong)
        •    TV lounge with sleeper sofa
        •    One-of-a-kind ladder-access nook a favorite kids’ hangout for movies, gaming, or relaxing
      </p>

      <h2 className={styles.aboutSubheading}>Outdoor Living</h2>
      <p className={styles.aboutText}>
        •    Expansive main-level porch spanning the length of the cabin
        •    Hot tub with mountain views
        •    Outdoor dining area perfect for family meals and sunset moments
      </p>

      <h2 className={styles.aboutSubheading}>Additional Features</h2>
      <p className={styles.aboutText}>
        •    Laundry room
        •    Large foyer and functional layout ideal for families and groups
        •    Outdoor security cameras for safety and peace of mind
      </p>

      <p className={styles.aboutText}>
      Whether you’re planning a family getaway, a couples’ retreat, or a mountain escape with friends, Bearadise in the Smokies offers the perfect blend of comfort, style, 
      and unforgettable scenery. Come experience mountain living elevated.
      </p>
    </section>
  );
}