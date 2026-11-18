import { useEffect } from "react";
import About from "@/components/sections/About";
import ShippedApps from "@/components/sections/ShippedApps";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Exploring from "@/components/sections/Exploring";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

/** Everything below the hero, loaded as a separate chunk to speed up first paint. */
export default function BelowFold() {
  // Deep links like /#contact: the target didn't exist before this chunk loaded.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id && id !== "home") document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    <>
      <About />
      <ShippedApps />
      <Experience />
      <Skills />
      <Projects />
      <Exploring />
      <Education />
      <Contact />
    </>
  );
}
