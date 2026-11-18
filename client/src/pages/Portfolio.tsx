import { lazy, Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/layout/Footer";

const BelowFold = lazy(() => import("./BelowFold"));

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Suspense fallback={<div className="min-h-screen" aria-hidden />}>
          <BelowFold />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
