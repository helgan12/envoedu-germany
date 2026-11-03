import { useLanguage, updateDocumentLanguage } from "@/lib/i18n";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import Home from "@/pages/home";
import Services from "@/pages/services";
import About from "@/pages/about";
import Universities from "@/pages/universities";
import UniversityDetail from "@/pages/university-detail";
import Process from "@/pages/process";
import Contact from "@/pages/contact";
import FAQ from "@/pages/faq";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import Cookies from "@/pages/cookies";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/universities" component={Universities} />
        <Route path="/universities/:id" component={UniversityDetail} />
        <Route path="/process" component={Process} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={FAQ} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/cookies" component={Cookies} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  const { language } = useLanguage();
  const [location] = useLocation();
  useEffect(() => updateDocumentLanguage(language, location), [language, location]);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
