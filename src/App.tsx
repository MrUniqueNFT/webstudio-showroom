import { LanguageProvider } from "./i18n/LanguageContext";
import { useLenis } from "./hooks/useLenis";
import { Navbar } from "./components/ui/Navbar";
import { Hero } from "./components/sections/Hero";
import { Trust } from "./components/sections/Trust";
import { Examples } from "./components/sections/Examples";
import { BeforeAfter } from "./components/sections/BeforeAfter";
import { Process } from "./components/sections/Process";
import { Offerings } from "./components/sections/Offerings";
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
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Examples />
        <BeforeAfter />
        <Process />
        <Offerings />
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
