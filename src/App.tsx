import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CursorTrail } from './components/common/CursorTrail';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Treatments } from './pages/Treatments';
import { SkinAndFace } from './pages/SkinAndFace';
import { LaserHairReduction } from './pages/LaserHairReduction';
import { HairRestoration } from './pages/HairRestoration';
import { BodyAndWellness } from './pages/BodyAndWellness';
import { Contact } from './pages/Contact';
import { Button } from './components/common/Button';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}

function NotFoundPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-28 text-center">
      <p className="font-mono-index text-xs tracking-[0.18em] uppercase text-[#737C67]">
        404 · PAGE NOT FOUND
      </p>
      <h1 className="mt-4 font-display text-4xl font-normal text-[#3B252B] sm:text-5xl">
        This page could not be found.
      </h1>
      <p className="mt-4 text-base text-[#5C554E]">
        Return to the Camellia home page or browse our complete treatment directory.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button to="/" variant="primary">
          Return Home
        </Button>
        <Button to="/treatments" variant="outline">
          Explore Treatments
        </Button>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col bg-[#F6F1E9] text-[#25221F]">
          <CursorTrail />
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/treatments" element={<Treatments />} />
              <Route path="/treatments/skin-and-face" element={<SkinAndFace />} />
              <Route
                path="/treatments/laser-hair-reduction"
                element={<LaserHairReduction />}
              />
              <Route
                path="/treatments/hair-restoration"
                element={<HairRestoration />}
              />
              <Route
                path="/treatments/body-and-wellness"
                element={<BodyAndWellness />}
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </MotionConfig>
  );
}
