import { useState } from "react";
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
  ChevronDown,
} from "lucide-react";

const menuSections = [
  {
    title: "BUILD YOUR WEBSITE",
    items: [
      { icon: Monitor, label: "Website Builder", href: "/solutions/website-builder" },
      { icon: Palette, label: "Themes", href: "/solutions/themes" },
      { icon: Globe, label: "Domains", href: "/solutions/domains" },
      { icon: Users, label: "Customer Accounts", href: "/solutions/customer-accounts" },
      { icon: Sparkles, label: "Sidekick AI", href: "/solutions/sidekick" },
    ],
  },
  {
    title: "RUN YOUR BUSINESS",
    items: [
      { icon: Package, label: "Orders & Inventory", href: "/solutions/orders" },
      { icon: Truck, label: "Shipping", href: "/solutions/shipping" },
      { icon: Wallet, label: "Finances & Funding", href: "/solutions/finances" },
      { icon: Zap, label: "Workflow Automation", href: "/solutions/automation" },
      { icon: Smartphone, label: "Mobile", href: "/solutions/mobile" },
    ],
  },
  {
    title: "SELL ANYWHERE",
    items: [
      { icon: ShoppingBag, label: "Online", href: "/solutions/online" },
      { icon: Store, label: "Point of Sale", href: "/solutions/pos" },
      { icon: AppWindow, label: "Shop App", href: "/solutions/shop-app" },
      { icon: Share2, label: "Social & Marketplaces", href: "/solutions/social" },
      { icon: MessageSquare, label: "AI Chats", href: "/solutions/ai-chats" },
      { icon: Globe2, label: "Global", href: "/solutions/global" },
      { icon: Building2, label: "B2B", href: "/solutions/b2b" },
      { icon: MapPin, label: "Across Markets", href: "/solutions/markets" },
    ],
  },
  {
    title: "MARKETING & ANALYTICS",
    items: [
      { icon: Megaphone, label: "Advertising & Campaigns", href: "/solutions/advertising" },
      { icon: Mail, label: "Email & Customer Chat", href: "/solutions/email" },
      { icon: Percent, label: "Discounts", href: "/solutions/discounts" },
      { icon: BarChart3, label: "Analytics", href: "/solutions/analytics" },
    ],
  },
  {
    title: "GET PAID",
    items: [
      { icon: CreditCard, label: "Checkout", href: "/solutions/checkout" },
      { icon: Receipt, label: "Payments", href: "/solutions/payments" },
      { icon: Calculator, label: "Taxes", href: "/solutions/taxes" },
    ],
  },
];

export default function SolutionsMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium flex items-center gap-1 transition-colors">
        Solutions
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-genara-dark border border-gray-800 rounded-2xl shadow-2xl p-8 mt-2 z-50">
          <div className="grid grid-cols-5 gap-8">
            {menuSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold text-green-400 mb-4 tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors group"
                      >
                        <item.icon className="w-4 h-4 text-gray-500 group-hover:text-green-400 transition-colors" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-800 grid grid-cols-3 gap-6">
            <Link href="/solutions/commerce-agents" className="group p-4 rounded-xl hover:bg-gray-800/50 transition-colors">
              <p className="text-green-400 text-xs font-semibold mb-1 tracking-wider">CUSTOMIZE & EXTEND</p>
              <p className="text-white font-medium">Commerce for Agents</p>
              <p className="text-gray-400 text-sm">Build with our agent tools</p>
            </Link>
            <Link href="/solutions/app-store" className="group p-4 rounded-xl hover:bg-gray-800/50 transition-colors">
              <p className="text-white font-medium">Genara App Store</p>
              <p className="text-gray-400 text-sm">Largest commerce ecosystem</p>
            </Link>
            <Link href="/developers" className="group p-4 rounded-xl hover:bg-gray-800/50 transition-colors">
              <p className="text-white font-medium">Genara.dev</p>
              <p className="text-gray-400 text-sm">Dev docs, CLI, and more</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
