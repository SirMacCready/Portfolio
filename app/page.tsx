export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-4">Paul Charbel</h1>
      <p className="text-l text-gray-400">
        Continuous learner. Builder of things
      </p>
      <a
        href="/about"
        className="mt-7 px-6 py-2 bg-amber-800 rounded btn-hover"
      >
        Learn More
      </a>
    </main>
  );
}
