

import { Hero } from "../components/homepage/hero"
import { HeroMarquee } from "../components/homepage/marquee"
import { Navbar } from "../components/homepage/navbar"
import { SubHero } from "../components/homepage/sub-hero"

export function Homepage() {
  
  return <div className="bg-slate-100 min-h-screen">
    <Navbar />
    <Hero />
    <HeroMarquee />
    <SubHero />
  </div>
}