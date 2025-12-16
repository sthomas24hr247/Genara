import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-genara-dark relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-genara-dark via-genara-dark to-green-900/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-genara-darker/60 border border-green-800/50 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              <span className="text-gray-300 text-sm">
                New: POS Go is now available
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
              Making<br />
              Commerce<br />
              <span className="text-gradient">Better for</span><br />
              <span className="text-gradient">Everyone</span>
            </h1>

            {/* Subheadline */}
            <p className="text-gray-400 text-lg lg:text-xl mb-8 max-w-md">
              Genara is a complete commerce platform that lets you start, grow, and manage a business.
            </p>

            {/* Email signup */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-white rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 max-w-xs"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors whitespace-nowrap">
                Start free trial
              </button>
            </div>
            <p className="text-gray-500 text-sm">
              Try Genara free for 3 days, no credit card required.
            </p>
          </div>

          {/* Right content - Dashboard mockup */}
          <div className="relative">
            {/* Main dashboard image */}
            <div className="bg-gray-900 rounded-2xl p-4 shadow-2xl glow-green">
              <div className="bg-genara-darker rounded-xl p-6">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold">E-Commerce Analytics</h3>
                  <button className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                    Dashboard
                  </button>
                </div>

                {/* Sales stat */}
                <div className="mb-6">
                  <p className="text-gray-400 text-sm mb-1">Sales</p>
                  <p className="text-white text-3xl font-bold">$90k</p>
                </div>

                {/* Chart visualization */}
                <div className="h-32 flex items-end gap-1">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-green-500/80 rounded-t"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-gray-700">
                  <div>
                    <p className="text-gray-400 text-xs">Product Name</p>
                    <p className="text-white text-sm font-medium">Premium Pack</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Revenue</p>
                    <p className="text-white text-sm font-medium">$3,897.00</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Growth</p>
                    <p className="text-green-400 text-sm font-medium">+12.5%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-gray-500 text-xs">Total Sales</p>
                <p className="text-gray-900 text-lg font-bold">$142,302</p>
              </div>
            </div>

            {/* Decorative gradient line */}
            <div className="absolute -bottom-8 left-1/4 right-0 h-1 bg-gradient-to-r from-green-500 to-transparent rounded-full blur-sm" />
          </div>
        </div>

        {/* Brand logos */}
        <div className="mt-20 pt-12 border-t border-gray-800">
          <div className="flex items-center justify-center gap-12 lg:gap-20 flex-wrap opacity-60">
            {["GLOSSIER", "ALLBIRDS", "ROTHY'S", "KOTN", "MATADOR"].map((brand) => (
              <span key={brand} className="text-gray-400 font-semibold tracking-wider text-sm">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
