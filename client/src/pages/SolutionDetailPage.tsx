import { Link, useRoute } from "wouter";
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
  Check,
} from "lucide-react";

const solutionData: Record<string, {
  icon: any;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  color: string;
}> = {
  "website-builder": {
    icon: Monitor,
    title: "Website Builder",
    tagline: "Create a stunning website without code",
    description: "Our drag-and-drop website builder makes it easy to create a professional online store. Choose from hundreds of templates and customize every detail to match your brand.",
    features: ["Drag-and-drop editor", "Mobile-responsive designs", "SEO optimization tools", "Custom code support", "Real-time preview", "Unlimited pages"],
    color: "from-green-500 to-emerald-600",
  },
  "themes": {
    icon: Palette,
    title: "Themes",
    tagline: "Professional designs for every business",
    description: "Browse our collection of professionally designed themes. Each theme is fully customizable and optimized for conversions.",
    features: ["100+ free themes", "Premium theme marketplace", "Mobile-first design", "Easy customization", "Regular updates", "Expert support"],
    color: "from-green-500 to-emerald-600",
  },
  "domains": {
    icon: Globe,
    title: "Domains",
    tagline: "Your brand, your domain",
    description: "Register a custom domain or connect one you already own. We handle all the technical setup so you can focus on your business.",
    features: ["Domain registration", "Free SSL certificates", "Email forwarding", "DNS management", "Domain transfers", "Auto-renewal"],
    color: "from-green-500 to-emerald-600",
  },
  "customer-accounts": {
    icon: Users,
    title: "Customer Accounts",
    tagline: "Build lasting customer relationships",
    description: "Let customers create accounts to track orders, save favorites, and check out faster. Build loyalty with personalized experiences.",
    features: ["Account creation", "Order history", "Wishlist support", "Fast checkout", "Customer groups", "Loyalty programs"],
    color: "from-green-500 to-emerald-600",
  },
  "sidekick": {
    icon: Sparkles,
    title: "Sidekick AI",
    tagline: "Your AI-powered business assistant",
    description: "Sidekick uses AI to help you run your business smarter. Get product descriptions, marketing copy, and business insights automatically.",
    features: ["AI product descriptions", "Marketing copy generation", "Business insights", "Customer support automation", "Inventory predictions", "24/7 availability"],
    color: "from-green-500 to-emerald-600",
  },
  "orders": {
    icon: Package,
    title: "Orders & Inventory",
    tagline: "Streamline your operations",
    description: "Manage orders and inventory across all your sales channels from one dashboard. Never oversell and always know what's in stock.",
    features: ["Unified order management", "Multi-location inventory", "Low stock alerts", "Bulk order processing", "Returns management", "Barcode scanning"],
    color: "from-blue-500 to-indigo-600",
  },
  "shipping": {
    icon: Truck,
    title: "Shipping",
    tagline: "Ship smarter, not harder",
    description: "Get discounted shipping rates from major carriers. Print labels, track packages, and automate fulfillment all from Genara.",
    features: ["Discounted rates", "Label printing", "Package tracking", "Automated fulfillment", "International shipping", "Returns labels"],
    color: "from-blue-500 to-indigo-600",
  },
  "finances": {
    icon: Wallet,
    title: "Finances & Funding",
    tagline: "Fuel your growth",
    description: "Access working capital to grow your business. Track expenses, manage cash flow, and get insights into your financial health.",
    features: ["Business financing", "Cash flow tracking", "Expense management", "Financial reports", "Tax preparation", "Payment schedules"],
    color: "from-blue-500 to-indigo-600",
  },
  "automation": {
    icon: Zap,
    title: "Workflow Automation",
    tagline: "Work smarter with automation",
    description: "Automate repetitive tasks like tagging orders, sending emails, and updating inventory. Save hours every week.",
    features: ["Visual workflow builder", "Pre-built templates", "Custom triggers", "Multi-step automations", "Integration support", "Activity logs"],
    color: "from-blue-500 to-indigo-600",
  },
  "mobile": {
    icon: Smartphone,
    title: "Mobile",
    tagline: "Your store in your pocket",
    description: "Manage your business from anywhere with the Genara mobile app. Process orders, check analytics, and respond to customers on the go.",
    features: ["iOS & Android apps", "Order notifications", "Mobile dashboard", "Barcode scanner", "Customer chat", "Quick actions"],
    color: "from-blue-500 to-indigo-600",
  },
  "online": {
    icon: ShoppingBag,
    title: "Online Store",
    tagline: "Your 24/7 storefront",
    description: "Create a beautiful online store that works around the clock. Unlimited products, unlimited bandwidth, unlimited potential.",
    features: ["Unlimited products", "Unlimited bandwidth", "Secure checkout", "Product reviews", "Gift cards", "Discount codes"],
    color: "from-purple-500 to-violet-600",
  },
  "pos": {
    icon: Store,
    title: "Point of Sale",
    tagline: "Sell in person, sync everywhere",
    description: "Accept payments in person with Genara POS. All your inventory and orders sync automatically with your online store.",
    features: ["Card readers", "Receipt printing", "Cash tracking", "Staff management", "Customer profiles", "Offline mode"],
    color: "from-purple-500 to-violet-600",
  },
  "shop-app": {
    icon: AppWindow,
    title: "Shop App",
    tagline: "Get discovered by millions",
    description: "List your products on the Shop app and reach millions of active shoppers. Benefit from Shop Pay's lightning-fast checkout.",
    features: ["Shop app listing", "Shop Pay checkout", "Order tracking", "Customer reviews", "Push notifications", "Analytics"],
    color: "from-purple-500 to-violet-600",
  },
  "social": {
    icon: Share2,
    title: "Social & Marketplaces",
    tagline: "Sell where your customers are",
    description: "Connect your store to Facebook, Instagram, TikTok, Amazon, and more. Manage everything from one place.",
    features: ["Facebook & Instagram shops", "TikTok shopping", "Amazon integration", "Google Shopping", "Pinterest", "eBay sync"],
    color: "from-purple-500 to-violet-600",
  },
  "ai-chats": {
    icon: MessageSquare,
    title: "AI Chats",
    tagline: "Convert conversations to sales",
    description: "Use AI-powered chat to answer customer questions, recommend products, and close sales automatically.",
    features: ["24/7 AI support", "Product recommendations", "Order status updates", "Human handoff", "Multi-language", "Chat analytics"],
    color: "from-purple-500 to-violet-600",
  },
  "global": {
    icon: Globe2,
    title: "Global Commerce",
    tagline: "Sell to the world",
    description: "Expand internationally with localized storefronts, multi-currency support, and international shipping options.",
    features: ["Multi-currency", "Language translations", "Local payment methods", "Duties & taxes", "Market-specific pricing", "Global CDN"],
    color: "from-purple-500 to-violet-600",
  },
  "b2b": {
    icon: Building2,
    title: "B2B & Wholesale",
    tagline: "Grow your wholesale business",
    description: "Sell to other businesses with custom pricing, bulk ordering, and net payment terms. B2B features built right in.",
    features: ["Wholesale pricing", "Custom catalogs", "Net payment terms", "Bulk ordering", "Company accounts", "Quote requests"],
    color: "from-purple-500 to-violet-600",
  },
  "markets": {
    icon: MapPin,
    title: "Across Markets",
    tagline: "One store, multiple markets",
    description: "Create localized shopping experiences for different regions while managing everything from a single admin.",
    features: ["Market-specific domains", "Local inventory", "Regional pricing", "Geo-targeting", "Market analytics", "Easy expansion"],
    color: "from-purple-500 to-violet-600",
  },
  "advertising": {
    icon: Megaphone,
    title: "Advertising & Campaigns",
    tagline: "Reach your ideal customers",
    description: "Create and manage ad campaigns across Google, Facebook, and more. Track performance and optimize for better results.",
    features: ["Campaign creation", "Audience targeting", "Performance tracking", "Budget management", "A/B testing", "ROI reporting"],
    color: "from-orange-500 to-red-600",
  },
  "email": {
    icon: Mail,
    title: "Email Marketing",
    tagline: "Stay connected with customers",
    description: "Send beautiful email campaigns, automate follow-ups, and segment your audience for better engagement.",
    features: ["Email templates", "Automation flows", "Audience segments", "A/B testing", "Analytics", "Deliverability"],
    color: "from-orange-500 to-red-600",
  },
  "discounts": {
    icon: Percent,
    title: "Discounts & Promotions",
    tagline: "Drive sales with smart promotions",
    description: "Create discount codes, automatic promotions, and flash sales to boost conversions and reward loyal customers.",
    features: ["Discount codes", "Automatic discounts", "Buy X get Y", "Flash sales", "Customer groups", "Usage limits"],
    color: "from-orange-500 to-red-600",
  },
  "analytics": {
    icon: BarChart3,
    title: "Analytics",
    tagline: "Data-driven decisions",
    description: "Understand your business with powerful analytics. Track sales, customers, and marketing performance in real-time.",
    features: ["Sales reports", "Customer insights", "Marketing analytics", "Custom reports", "Real-time data", "Export options"],
    color: "from-orange-500 to-red-600",
  },
  "checkout": {
    icon: CreditCard,
    title: "Checkout",
    tagline: "The world's best checkout",
    description: "Genara Checkout converts 15% better than the competition. One-click purchasing with Shop Pay, express checkout, and more.",
    features: ["One-click checkout", "Shop Pay", "Express options", "Guest checkout", "Custom branding", "Upsells"],
    color: "from-teal-500 to-cyan-600",
  },
  "payments": {
    icon: Receipt,
    title: "Payments",
    tagline: "Accept every payment method",
    description: "Accept credit cards, digital wallets, buy now pay later, and local payment methods. Get paid fast with daily payouts.",
    features: ["Credit cards", "Digital wallets", "Buy now pay later", "Local methods", "Daily payouts", "Fraud protection"],
    color: "from-teal-500 to-cyan-600",
  },
  "taxes": {
    icon: Calculator,
    title: "Taxes",
    tagline: "Taxes made simple",
    description: "Automatically calculate and collect the right amount of tax for every order, everywhere you sell.",
    features: ["Auto-calculation", "Tax reports", "Multi-region support", "Tax exemptions", "Filing assistance", "Audit support"],
    color: "from-teal-500 to-cyan-600",
  },
};

export default function SolutionDetailPage() {
  const [, params] = useRoute("/solutions/:slug");
  const slug = params?.slug || "";
  const solution = solutionData[slug];

  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Solution not found</h1>
          <Link href="/solutions" className="text-green-600 hover:underline">
            View all solutions
          </Link>
        </div>
      </div>
    );
  }

  const Icon = solution.icon;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-genara-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                {solution.title}
              </h1>
              <p className="text-green-400 text-xl mb-4">{solution.tagline}</p>
              <p className="text-gray-400 text-lg mb-8">{solution.description}</p>
              <div className="flex gap-4">
                <Link
                  href="/pricing"
                  className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
                >
                  Start free trial
                </Link>
                <Link
                  href="/contact"
                  className="border border-gray-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                >
                  Contact sales
                </Link>
              </div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-white font-semibold mb-6">Key Features</h3>
              <ul className="space-y-4">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to get started with {solution.title}?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Start your free trial today. No credit card required.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            View pricing
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Back to Solutions */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/solutions"
            className="text-green-600 hover:text-green-700 font-medium"
          >
            ← View all solutions
          </Link>
        </div>
      </section>
    </div>
  );
}
