export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-800 px-6 py-12">
      <section className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Welcome to The Lodge at SOTC
          </h1>
          <p className="text-lg max-w-2xl">
            A luxurious 3-story Smoky Mountain cabin located just 1 mile from Gatlinburg Parkway. Sleeps 12. Designed for families, groups, or romantic getaways. 
            Enjoy scenic views, cozy wood finishes, a hot tub, and a full game room — all minutes from hiking, dining, and attractions.
          </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg mb-12">
          <img
            src="/imgs/view1.jpg"
            alt="The Lodge at SOTC"
            className="w-full h-[400px] object-cover"
          />
        </div>

        <section className="grid md:grid-cols-2 gap-10 text-base">
          <div>
            <h2 className="text-2xl font-semibold mb-2">🪵 Rustic Comfort Meets Modern Luxury</h2>
            <p>
              The lodge features hand-crafted wood interiors, cathedral ceilings, and updated furnishings throughout. Three decks provide sweeping mountain views and ample space for relaxing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🛏️ 5 Bedrooms, Sleeps 12</h2>
            <p>
              Includes 2 king suites with private baths, 2 queen bedrooms, and a bunk room for kids or teens. Perfect for large families or couples traveling together.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🎮 Game Room + Theater Area</h2>
            <p>
              Enjoy classic arcade games, a pool table, foosball, and a 75" smart TV. Movie night or game day? This space has you covered.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🍳 Chef-Ready Kitchen</h2>
            <p>
              Fully stocked kitchen with granite counters, modern appliances, Keurig & drip coffee, and a gas grill outside. Cook with ease, dine in comfort.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🔥 Private Hot Tub + Fire Pit</h2>
            <p>
              Relax in the covered hot tub or gather around the stone fire pit for stargazing and s’mores after a day of hiking.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">📍 Minutes to Downtown & National Park</h2>
            <p>
              Less than 5 minutes to the Gatlinburg Strip, Anakeesta, and Ober Mountain. Quick access to the Great Smoky Mountains National Park entrance.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}