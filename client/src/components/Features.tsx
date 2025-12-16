import { Globe, CreditCard, Layout, BarChart3, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Sell across the globe",
    description:
      "Reach new customers by selling on social media, online marketplaces, and more.",
    cta: "Explore global selling",
    color: "bg-green-50",
    iconColor: "text-green-600",
    hasImage: true,
  },
  {
    icon: CreditCard,
    title: "Fast & Secure Payments",
    description:
      "Accept payments with Genara Payments or integrate with 100+ gateways.",
    color: "bg-gray-900",
    iconColor: "text-gray-400",
    dark: true,
  },
  {
    icon: Layout,
    title: "Customizable Themes",
    description:
      "Create a unique store with our drag-and-drop store builder and themes.",
    color: "bg-gray-50",
    iconColor: "text-blue-500",
  },
  {
    icon: BarChart3,
    title: "Insightful Analytics",
    description:
      "Get detailed reports on your sales, customers, and marketing performance.",
    cta: "View Dashboard",
    color: "bg-amber-50",
    iconColor: "text-amber-500",
    hasChart: true,
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Discover why millions of entrepreneurs chose Genara
          </h2>
          <p className="text-gray-600 text-lg">
            From your first sale to full scale, we have the tools you need to succeed.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Feature 1 - Global Selling (Large) */}
          <div className="bg-green-50 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Sell across the globe
            </h3>
            <p className="text-gray-600 mb-6 max-w-sm">
              Reach new customers by selling on social media, online marketplaces, and more.
            </p>
            <button className="inline-flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all">
              Explore global selling
              <ArrowRight className="w-4 h-4" />
            </button>
            
            {/* Decorative globe illustration */}
            <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20">
              <div className="w-full h-full rounded-full border-4 border-green-500" />
            </div>
          </div>

          {/* Feature 2 - Payments (Dark) */}
          <div className="bg-gray-900 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
            <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-6">
              <CreditCard className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3">
              Fast & Secure Payments
            </h3>
            <p className="text-gray-400 mb-6 max-w-sm">
              Accept payments with Genara Payments or integrate with 100+ gateways.
            </p>
            
            {/* Payment success mockup */}
            <div className="mt-8 flex justify-end">
              <div className="bg-white rounded-2xl p-4 shadow-xl w-40">
                <div className="text-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500">Payment</p>
                  <p className="text-sm font-semibold text-gray-900">Successful</p>
                  <p className="text-xs text-gray-400 mt-1">Transaction Complete</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 - Themes */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Layout className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Customizable Themes
            </h3>
            <p className="text-gray-600 mb-6">
              Create a unique store with our drag-and-drop store builder and themes.
            </p>
            
            {/* Browser mockup */}
            <div className="bg-white rounded-xl border border-gray-200 p-3 mt-4">
              <div className="flex items-center gap-1.5 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded w-3/4" />
                <div className="h-3 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          </div>

          {/* Feature 4 - Analytics */}
          <div className="bg-amber-50 rounded-3xl p-8 lg:p-10">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Insightful Analytics
            </h3>
            <p className="text-gray-600 mb-6">
              Get detailed reports on your sales, customers, and marketing performance.
            </p>
            <button className="inline-flex items-center gap-2 border border-gray-300 bg-white text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-gray-50 transition-colors">
              View Dashboard
            </button>
            
            {/* Chart mockup */}
            <div className="mt-6 bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-xs text-gray-500">Total Revenue</p>
                  <p className="text-xl font-bold text-gray-900">$45,231.89</p>
                </div>
                <span className="text-green-500 text-sm font-medium">+20.1%</span>
              </div>
              <div className="flex items-end gap-1 h-16">
                {[30, 45, 35, 50, 40, 55, 65, 70].map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t ${i === 7 ? "bg-gray-900" : "bg-gray-200"}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
