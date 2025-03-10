import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import Courses from "@/pages/courses";
import NotFound from "@/pages/not-found";
import Culture from "@/pages/culture";
import { default as WhyGermany } from "@/pages/why-germany";
import Registration from "@/pages/registration";
import { WhatsAppButton } from "./components/ui/whatsapp-button";
import GermanQuiz from "@/components/quiz/german-quiz"; // Added import for GermanQuiz component


function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/courses" component={Courses} />
          <Route path="/culture" component={Culture} />
          <Route path="/quiz" component={GermanQuiz} />
          <Route path="/why-germany" component={WhyGermany} />
          <Route path="/registration" component={Registration} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;