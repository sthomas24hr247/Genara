import { useState } from "react";
import { Check, ShoppingCart, Store, Share2, BarChart3, AppWindow } from "lucide-react";

const plans = [
  {
    name: "Basic",
    badge: "Most Popular",
    tagline: "For solo entrepreneurs",
    price: { monthly: 29, yearly: 24 },
    cardRate: "2% 3rd-party payment providers",
    features: ["10 inventory locations", "24/7 chat support", "In-person selling by phone or POS device"],
    cta: "Try for free",
    highlighted: true,
  },
  {
    name: "Grow",
    badge: null,
    tagline: "For small teams",
    price: { monthly: 79, yearly: 66 },
    cardRate: "1% 3rd-party payment providers",
    features: ["10 inventory locations", "24/7 chat support", "5 staff accounts", "In-person selling by phone or POS device"],
    cta: "Try for free",
    highlighted: false,
  },
  {
    name: "Advanced",
    badge: null,
    tagline: "As your business scales",
    price: { monthly: 299, yearly: 249 },
    cardRate: "0.6% 3rd-party payment providers",
    features: ["10 inventory locations", "Enhanced 24/7 chat support", "Local storefronts by market", "15 staff accounts", "In-person selling by phone or POS device"],
    cta: "Try for free",
    highlighted: false,
  },
  {
    name: "Plus",
    badge: null,
    tagline: "For more complex businesses",
    price: { monthly: 2300, yearly: 2300 },
    isEnterprise: true,
    cardRate: "Competitive rates for high-volume merchants",
    features: ["200 inventory locations", "Priority 24/7 phone support", "Local storefronts by market", "Unlimited staff accounts", "Fully customizable checkout", "Up to 200 POS Pro locations", "Sell wholesale/B2B"],
    cta: "Get started",
    ctaSecondary: "Get in touch",
    highlighted: false,
  },
];

const everyPlanFeatures = [
  { icon: ShoppingCart, title: "World's best checkout", description: "Genara checkout converts 15% better on average than other commerce platforms." },
  { icon: Store, title: "In-person selling", description: "Sell in person and keep inventory in sync with online sales—all with Genara POS." },
  { icon: Share2, title: "Multiple sales channels", description: "Promote and sell products on Instagram, TikTok, Google, and other channels." },
  { icon: BarChart3, title: "In-depth analytics", description: "Access reports to track store performance and identify optimisation opportunities." },
  { icon: AppWindow, title: "Commerce apps", description: "Use apps for everything from product sourcing to customizing your store." },
];

const alternativePlans = [
  { name: "Starter", price: 5, description: "Sell instantly through social media and messaging apps or a simple online store" },
  { name: "Retail", price: 89, description: "In-person selling tools with advanced staff, inventory, and loyalty features" },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-teal-100 via-cyan-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-sm font-medium tracking-wider mb-4">PLANS & PRICING</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Start for free, then enjoy<br />$1/month for 3 months</h1>
          <p className="text-gray-600 text-lg mb-8">Choose the best plan for your business. Change plans as you grow.</p>
          <div className="max-w-xl mx-auto flex gap-2">
            <input type="email" placeholder="Enter your email address" className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" />
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">Start for free</button>
          </div>
          <p className="text-gray-500 text-sm mt-3">You agree to receive Genara marketing emails.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-full p-1 flex">
              <button onClick={() => setBillingCycle("monthly")} className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${billingCycle === "monthly" ? "bg-white text-gray-900 shadow" : "text-gray-600 hover:text-gray-900"}`}>Pay monthly</button>
              <button onClick={() => setBillingCycle("yearly")} className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${billingCycle === "yearly" ? "bg-gray-900 text-white shadow" : "text-gray-600 hover:text-gray-900"}`}>Pay yearly (save 25%)*</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-2xl border ${plan.highlighted ? "border-green-500" : "border-gray-200"} overflow-hidden`}>
                <div className="bg-green-400 text-gray-900 text-center py-2 text-sm font-medium">
                  {plan.isEnterprise ? "Available on a 1- or 3-year term" : "$1/month for first 3 months"}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                    {plan.badge && <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded-full">{plan.badge}</span>}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{plan.tagline}</p>
                  <div className="mb-4">
                    <span className="text-sm text-gray-600">Starting at</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-gray-900">${billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly}</span>
                      <span className="text-gray-600">USD</span>
                    </div>
                    <span className="text-gray-500 text-sm">/month</span>
                    {!plan.isEnterprise && <p className="text-gray-500 text-sm mt-1">{billingCycle === "monthly" ? "billed monthly" : "billed once yearly"}</p>}
                    {plan.isEnterprise && <p className="text-gray-500 text-sm mt-1">on a 3-year term</p>}
                  </div>
                  <div className="mb-6">
                    <p className="text-gray-900 font-medium text-sm">{plan.isEnterprise ? "Card rates" : "Card rates starting at"}</p>
                    <p className="text-gray-600 text-sm flex items-center gap-1"><Check className="w-4 h-4 text-gray-400" />{plan.cardRate}</p>
                  </div>
                  <div className="mb-6">
                    <p className="text-gray-900 font-medium text-sm mb-2">Standout features</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature) => (<li key={feature} className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />{feature}</li>))}
                    </ul>
                  </div>
                  <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">{plan.cta}</button>
                  {plan.ctaSecondary && <button className="w-full text-gray-900 py-3 font-medium hover:underline">{plan.ctaSecondary}</button>}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">*Yearly discount available on select plans<br />Prices may vary by your store location.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <button className="border border-gray-300 px-6 py-3 rounded-full font-medium text-gray-900 hover:bg-gray-50 transition-colors mb-8">+ Full list of features</button>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">What every plan gets you</h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {everyPlanFeatures.map((feature) => (
              <div key={feature.title} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4"><feature.icon className="w-6 h-6 text-blue-600" /></div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 italic">Alternative solutions for your business</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {alternativePlans.map((plan) => (
              <div key={plan.name} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="bg-green-400 text-gray-900 text-center py-2 text-sm font-medium">$1/month for first 3 months</div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-900 font-semibold mb-4">${plan.price} USD/month</p>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Learn more</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8">Join millions of merchants on Genara</h2>
          <div className="max-w-xl mx-auto flex gap-2">
            <input type="email" placeholder="Enter your email address" className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" />
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">Start for free</button>
          </div>
        </div>
      </section>
    </div>
  );
}
