import { Route, Switch } from "wouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import SolutionsPage from "./pages/SolutionsPage";
import SolutionDetailPage from "./pages/SolutionDetailPage";
import WebsiteBuilderPage from "./pages/WebsiteBuilderPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/pricing" component={PricingPage} />
          <Route path="/solutions" component={SolutionsPage} />
          <Route path="/solutions/website-builder" component={WebsiteBuilderPage} />
          <Route path="/solutions/:slug" component={SolutionDetailPage} />
          <Route>
            <div className="flex items-center justify-center min-h-[60vh]">
              <h1 className="text-2xl font-semibold text-gray-600">404 - Page Not Found</h1>
            </div>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
