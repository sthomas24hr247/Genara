export default function CTA() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Start your business journey today
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Try Genara for free, and explore all the tools and services you need to start, run, and grow your business.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg shadow-green-500/25 hover:shadow-green-500/40">
          Start free trial
        </button>
        <p className="text-gray-500 text-sm mt-4">
          No credit card required
        </p>
      </div>
    </section>
  );
}
