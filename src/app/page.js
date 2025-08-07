export default function HomePage() {
  return (
    <main className="p-6 bg-gradient-to-b from-stone-100 to-stone-300 min-h-screen text-gray-800">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">
          Welcome to the Lodge at SOTC
        </h1>
        <p className="text-lg mb-8">
          A 3-story Smoky Mountain retreat nestled in the heart of Gatlinburg. Cozy wood finishes, breathtaking views, and unforgettable memories await.
        </p>
        <div className="rounded-lg overflow-hidden shadow-lg mb-8">
          <img
            src="/imgs/view1.jpg"
            alt="Rustic Cabin in the Smoky Mountains"
            className="w-full h-72 object-cover"
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 text-left">
          <div>
            <h2 className="text-xl font-semibold mb-2">🪵 Rustic Luxury</h2>
            <p>
              Designed with natural wood textures, a fireplace on every floor, and panoramic views of the forested mountains.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">🛏️ Sleeps 12 Comfortably</h2>
            <p>
              5 bedrooms, 4 bathrooms, and spacious living areas — perfect for families, groups, or romantic getaways.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">🔥 Hot Tub + Game Room</h2>
            <p>
              Relax under the stars or enjoy classic arcade games, pool, and movie nights on the big screen.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">🏞️ Prime Location</h2>
            <p>
              Just minutes from downtown Gatlinburg, hiking trails, waterfalls, and everything the Smokies have to offer.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
