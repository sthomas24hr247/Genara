import { Link } from "wouter";
import {
  Monitor,
  Palette,
  Globe,
  Users,
  Sparkles,
  Package,
  Truck,
  Wallet,
  Zap,
  Smartphone,
  ShoppingBag,
  Store,
  AppWindow,
  Share2,
  MessageSquare,
  Globe2,
  Building2,
  MapPin,
  Megaphone,
  Mail,
  Percent,
  BarChart3,
  CreditCard,
  Receipt,
  Calculator,
  ArrowRight,
} from "lucide-react";

const sections = [
  {
    title: "Build Your Website",
    description: "Everything you need to create a stunning online presence",
    color: "from-green-500 to-emerald-600",
    items: [
      { icon: Monitor, label: "Website Builder", description: "Drag-and-drop editor to build your perfect store", href: "/solutions/website-builder" },
      { icon: Palette, label: "Themes", description: "Professional designs for every industry", href: "/solutions/themes" },
      { icon: Globe, label: "Domains", description: "Get a custom domain that matches your brand", href: "/solutions/domains" },
      { icon: Users, label: "Customer Accounts", description: "Let customers create accounts and track orders", href: "/solutions/customer-accounts" },
      { icon: Sparkles, label: "Sidekick AI", description: "AI-powered assistant to help run your business", href: "/solutions/sidekick" },
    ],
  },
  {
    title: "Run Your Business",
    description: "Powerful tools to manage operations efficiently",
    color: "from-blue-500 to-indigo-600",
    items: [
      { icon: Package, label: "Orders & Inventory", description: "Track stock and fulfill orders seamlessly", href: "/solutions/orders" },
      { icon: Truck, label: "Shipping", description: "Discounted rates and automated fulfillment", href: "/solutions/shipping" },
      { icon: Wallet, label: "Finances & Funding", description: "Access capital and manage cash flow", href: "/solutions/finances" },
      { icon: Zap, label: "Workflow Automation", description: "Automate repetitive tasks and save time", href: "/solutions/automation" },
      { icon: Smartphone, label: "Mobile", description: "Manage your store from anywhere", href: "/solutions/mobile" },
    ],
  },
  {
    title: "Sell Anywhere",
    description: "Reach customers wherever they are",
    color: "from-purple-500 to-violet-600",
    items: [
      { icon: ShoppingBag, label: "Online", description: "Your own online store with unlimited products", href: "/solutions/online" },
      { icon: Store, label: "Point of Sale", description: "Sell in person with integrated hardware", href: "/solutions/pos" },
      { icon: AppWindow, label: "Shop App", description: "Get discovered on the Shop app marketplace", href: "/solutions/shop-app" },
      { icon: Share2, label: "Social & Marketplaces", description: "Sell on Facebook, Instagram, Amazon, and more", href: "/solutions/social" },
      { icon: MessageSquare, label: "AI Chats", description: "Convert conversations into sales", href: "/solutions/ai-chats" },
      { icon: Globe2, label: "Global", description: "Sell internationally with localized experiences", href: "/solutions/global" },
      { icon: Building2, label: "B2B", description: "Wholesale and business-to-business selling", href: "/solutions/b2b" },
      { icon: MapPin, label: "Across Markets", description: "Expand to new markets effortlessly", href: "/solutions/markets" },
    ],
  },
  {
    title: "Marketing & Analytics",
    description: "Grow your audience and understand your data",
    color: "from-orange-500 to-red-600",
    items: [
      { icon: Megaphone, label: "Advertising & Campaigns", description: "Create and manage ad campaigns", href: "/solutions/advertising" },
      { icon: Mail, label: "Email & Customer Chat", description: "Engage customers with email marketing", href: "/solutions/email" },
      { icon: Percent, label: "Discounts", description: "Create promotions that drive sales", href: "/solutions/discounts" },
      { icon: BarChart3, label: "Analytics", description: "Insights to make smarter decisions", href: "/solutions/analytics" },
    ],
  },
  {
    title: "Get Paid",
    description: "Accept payments and manage finances",
    color: "from-teal-500 to-cyan-600",
    items: [
      { icon: CreditCard, label: "Checkout", description: "The world's best-converting checkout", href: "/solutions/checkout" },
      { icon: Receipt, label: "Payments", description: "Accept all major payment methods", href: "/solutions/payments" },
      { icon: Calculator, label: "Taxes", description: "Automated tax calculation and filing", href: "/solutions/taxes" },
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-genara-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Everything you need to
            <span className="text-green-400"> sell anywhere</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Genara provides all the tools you need to start, run, and grow your business. 
            From building your website to processing payments, we've got you covered.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors"
          >
            Start free trial
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Solution Sections */}
      {sections.map((section, index) => (
        <section
          key={section.title}
          className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-600 text-lg">{section.description}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-500 hover:shadow-lg transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-4`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-green-600 transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-genara-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Join millions of businesses using Genara to power their commerce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors"
            >
              View pricing
            </Link>
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
