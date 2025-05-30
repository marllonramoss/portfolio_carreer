import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import ProjectPage from "@/pages/project/[id]";
import ScrollProgress from "@/components/ui/scroll-progress";
import { useLocation } from "wouter";
import { useEffect } from "react";
import { LanguageProvider } from "@/contexts/language-context";
import { PortfolioAssistant } from "@/components/PortfolioAssistant";

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/project/:id" component={ProjectPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <div className="min-h-screen bg-zinc-900">
            <ScrollProgress />
            <Toaster />
            <Router />
            <PortfolioAssistant />
          </div>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
