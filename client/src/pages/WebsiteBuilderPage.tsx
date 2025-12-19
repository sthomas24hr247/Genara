import { useState } from "react";
import { Link } from "wouter";
import {
  Monitor,
  Globe,
  Search,
  Check,
  X,
  ArrowRight,
  Loader2,
  ExternalLink,
  Shield,
  Zap,
  RefreshCw,
} from "lucide-react";

type DomainResult = {
  domain: string;
  available: boolean;
  price?: number;
  premium?: boolean;
};

export default function WebsiteBuilderPage() {
  const [activeTab, setActiveTab] = useState<"new" | "existing">("new");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<DomainResult[]>([]);
  const [existingDomain, setExistingDomain] = useState("");
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  // Simulated domain search
  const searchDomains = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    setSearchResults([]);
    
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    const baseName = searchQuery.toLowerCase().replace(/[^a-z0-9]/g, "");
    const extensions = [".com", ".co", ".io", ".store", ".shop", ".net", ".org"];
    
    // Simulate results - in production this would call a domain registrar API
    const results: DomainResult[] = extensions.map((ext, index) => ({
      domain: baseName + ext,
      available: index !== 0 && Math.random() > 0.3, // .com usually taken
      price: ext === ".com" ? 12.99 : ext === ".io" ? 39.99 : ext === ".store" ? 2.99 : ext === ".shop" ? 4.99 : 9.99,
      premium: ext === ".io",
    }));
    
    // Sort available first
    results.sort((a, b) => (b.available ? 1 : 0) - (a.available ? 1 : 0));
    
    setSearchResults(results);
    setIsSearching(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      searchDomains();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-genara-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-6">
              <Monitor className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Website Builder
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Create your online store in minutes. Start by setting up your domain — 
              use one you already own or find the perfect new one.
            </p>
          </div>
        </div>
      </section>

      {/* Domain Configuration */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab("new")}
                className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === "new"
                    ? "text-green-600 border-b-2 border-green-600 bg-green-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <Globe className="w-5 h-5 inline-block mr-2" />
                Get a New Domain
              </button>
              <button
                onClick={() => setActiveTab("existing")}
                className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === "existing"
                    ? "text-green-600 border-b-2 border-green-600 bg-green-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <ExternalLink className="w-5 h-5 inline-block mr-2" />
                Connect Existing Domain
              </button>
            </div>

            <div className="p-8">
              {activeTab === "new" ? (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Find your perfect domain
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Search for available domain names. We'll register it for you and set everything up automatically.
                  </p>

                  {/* Search Box */}
                  <div className="flex gap-3 mb-8">
                    <div className="flex-1 relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Enter your business name or desired domain"
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                      />
                    </div>
                    <button
                      onClick={searchDomains}
                      disabled={isSearching || !searchQuery.trim()}
                      className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {isSearching ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Searching
                        </>
                      ) : (
                        "Search"
                      )}
                    </button>
                  </div>

                  {/* Search Results */}
                  {searchResults.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="text-sm font-medium text-gray-700 mb-4">
                        Available domains for "{searchQuery}"
                      </h3>
                      {searchResults.map((result) => (
                        <div
                          key={result.domain}
                          className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                            selectedDomain === result.domain
                              ? "border-green-500 bg-green-50"
                              : result.available
                              ? "border-gray-200 hover:border-green-300 cursor-pointer"
                              : "border-gray-100 bg-gray-50 opacity-60"
                          }`}
                          onClick={() => result.available && setSelectedDomain(result.domain)}
                        >
                          <div className="flex items-center gap-3">
                            {result.available ? (
                              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                <Check className="w-5 h-5 text-green-600" />
                              </div>
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                                <X className="w-5 h-5 text-red-600" />
                              </div>
                            )}
                            <div>
                              <p className="font-medium text-gray-900">{result.domain}</p>
                              <p className="text-sm text-gray-500">
                                {result.available ? "Available" : "Taken"}
                                {result.premium && result.available && " • Premium"}
                              </p>
                            </div>
                          </div>
                          {result.available && (
                            <div className="text-right">
                              <p className="font-semibold text-gray-900">
                                ${result.price}/year
                              </p>
                              {selectedDomain === result.domain && (
                                <p className="text-sm text-green-600">Selected</p>
                              )}
                            </div>
                          )}
                        </div>
                      ))}

                      {selectedDomain && (
                        <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-gray-900">
                                Ready to claim <span className="text-green-600">{selectedDomain}</span>?
                              </p>
                              <p className="text-sm text-gray-600">
                                Includes free SSL, DNS management, and email forwarding
                              </p>
                            </div>
                            <Link
                              href="/signup"
                              className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
                            >
                              Continue
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Initial state - no search yet */}
                  {searchResults.length === 0 && !isSearching && (
                    <div className="text-center py-8 text-gray-500">
                      <Globe className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                      <p>Enter a name above to search for available domains</p>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Connect your existing domain
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Already own a domain? Connect it to your Genara store. We'll guide you through the DNS setup.
                  </p>

                  {/* Domain Input */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your domain name
                    </label>
                    <input
                      type="text"
                      value={existingDomain}
                      onChange={(e) => setExistingDomain(e.target.value)}
                      placeholder="example.com"
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                    />
                  </div>

                  {existingDomain && (
                    <div className="bg-gray-50 rounded-xl p-6 mb-6">
                      <h3 className="font-medium text-gray-900 mb-4">
                        To connect {existingDomain}, you'll need to:
                      </h3>
                      <ol className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 text-white text-sm flex items-center justify-center">
                            1
                          </span>
                          <div>
                            <p className="font-medium text-gray-900">Sign up for Genara</p>
                            <p className="text-sm text-gray-600">Create your account and store</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 text-white text-sm flex items-center justify-center">
                            2
                          </span>
                          <div>
                            <p className="font-medium text-gray-900">Update your DNS records</p>
                            <p className="text-sm text-gray-600">
                              Add a CNAME record pointing to shops.genara.com
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 text-white text-sm flex items-center justify-center">
                            3
                          </span>
                          <div>
                            <p className="font-medium text-gray-900">Verify ownership</p>
                            <p className="text-sm text-gray-600">
                              We'll automatically verify and provision SSL
                            </p>
                          </div>
                        </li>
                      </ol>
                    </div>
                  )}

                  <Link
                    href="/signup"
                    className={`w-full py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 ${
                      existingDomain
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    Continue with {existingDomain || "your domain"}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Everything included with your domain
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Free SSL Certificate</h3>
              <p className="text-gray-600 text-sm">
                Every domain gets a free SSL certificate automatically. Your customers' data is always secure.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Global CDN</h3>
              <p className="text-gray-600 text-sm">
                Your store loads fast everywhere with our worldwide content delivery network.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Auto-Renewal</h3>
              <p className="text-gray-600 text-sm">
                Never lose your domain. We automatically renew it before it expires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-genara-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Ready to build your store?
          </h2>
          <p className="text-gray-400 mb-8">
            Start your free trial today. No credit card required.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors"
          >
            View pricing
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
