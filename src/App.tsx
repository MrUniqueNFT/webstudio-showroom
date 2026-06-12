import { LanguageProvider } from "./i18n/LanguageContext";
import { useLenis } from "./hooks/useLenis";
import { Navbar } from "./components/ui/Navbar";
import { CursorFollower } from "./components/ui/CursorFollower";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Showroom } from "./components/sections/Showroom";
import { Process } from "./components/sections/Process";
import { WhyUs } from "./components/sections/WhyUs";
import { Packages } from "./components/sections/Packages";
import { Testimonials } from "./components/sections/Testimonials";
import { Faq } from "./components/sections/Faq";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

function AppContent() {
  useLenis();

  return (
    <>
      <CursorFollower />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showroom />
        <Process />
        <WhyUs />
        <Packages />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
