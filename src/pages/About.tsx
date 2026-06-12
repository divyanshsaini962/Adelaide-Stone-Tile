import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Award, Shield, Hammer, Users, Eye, ArrowRight, History } from 'lucide-react';
import { TIMELINE_EVENTS } from '../data';
import { Page, ServiceId } from '../types';

interface AboutProps {
  onNavigate: (page: Page, serviceId?: ServiceId | null) => void;
}

export default function About({ onNavigate }: AboutProps) {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const values = [
    {
      icon: <Award className="text-bronze" size={24} />,
      title: "Artisan Quality",
      description: "We don't settle for 'good enough'. Our margins are laser-checked, concrete mixes are custom engineered, and stone faces are chiseled by hand."
    },
    {
      icon: <Shield className="text-bronze" size={24} />,
      title: "Unyielding Integrity",
      description: "Our quotes are transparent and complete. Licensed under South Australian BLD 291410, matching every safety, fall, and compliance standard."
    },
    {
      icon: <Hammer className="text-bronze" size={24} />,
      title: "Structural Heritage",
      description: "We believe stone and tiles are century-long investments. Our advanced epoxy waterproofing systems guard against Adelaide's soil movements."
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-warmwhite py-16"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Introduction */}
        <div className="text-left mb-16 max-w-3xl">
          <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-bronze font-bold mb-3 block">
            Who We Are
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-charcoal mb-6">
            Pioneers of Adelaide’s <br className="hidden sm:inline" />
            <span className="text-bronze italic font-normal">Modern Stonemasonry</span>
          </h1>
          <p className="font-sans text-sm md:text-base text-zinc-600 leading-relaxed">
            Founded with a passion to unify natural stone raw mechanics with contemporary architectural layout, Adelaide Stone & Tile Construction commands the residential and commercial pool tiling benchmark throughout South Australia.
          </p>
        </div>

        {/* Story Section: Two columns with Contractor Portrait */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Portrait Image Frame */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 border-2 border-bronze/30 translate-x-4 translate-y-4 -z-10" />
            <div className="relative aspect-[3/4] bg-zinc-900 overflow-hidden shadow-2xl">
              <img
                src="/src/assets/images/astc_contractor_1781272795451.jpg"
                alt="Professional masonry contractor standing confidently on an Adelaide construction site"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 bg-zinc-950/90 backdrop-blur-md border border-sandstone/25 p-4 text-warmwhite">
                <p className="font-display text-xs font-semibold tracking-wider text-sandstone uppercase">Master Masonry Division</p>
                <p className="font-sans text-[11px] text-zinc-300 mt-1 uppercase tracking-widest">ASTC Founder & Lead Contractor</p>
              </div>
            </div>
          </motion.div>

          {/* Documentary Bio Details */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-extrabold text-bronze">
              The Heritage Story
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal tracking-tight">
              Honoring Natural Textures & Engineered Performance
            </h2>
            <p className="font-sans text-xs md:text-sm text-zinc-600 leading-relaxed">
              At Adelaide Stone & Tile Construction, our journey began over a decade ago matching raw Adelaide Hills sandstones with complex modern villa footprints. We realized backyards were increasingly designed with disconnected trades: concrete builders poured shells, landscapers packed soil, and tilers tried to paste glass mosaic tiles without unified structural grade adhesives or waterproofing.
            </p>
            <p className="font-sans text-xs md:text-sm text-zinc-600 leading-relaxed">
              We changed the landscape entirely by building an architectural-focused specialist team. We handle the <b>entire scope</b>. From establishing structural concrete footings and double-barrier elastomeric membrane systems to precision mitered stonework cladding, we guarantee zero friction and pristine longevity.
            </p>
            
            {/* Adelaide Hills quarry info badge */}
            <div className="bg-white border-l-4 border-bronze p-5 border border-sandstone/15 mt-2">
              <p className="font-display text-base font-bold text-charcoal">
                "We hand-dress our stones directly from natural SA hills quarries. What we build stands long after standard stucco and plaster has weathered away."
              </p>
              <span className="block font-sans text-[10px] text-zinc-500 tracking-wider uppercase mt-2">
                — Professional Builder Guarantee
              </span>
            </div>
          </motion.div>
        </section>

        {/* Three Core Brand Values */}
        <section className="py-16 border-t border-sandstone/20 mb-20">
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl md:text-4xl font-bold text-charcoal">
              Built on Unflinching <span className="text-bronze italic font-normal">Principles</span>
            </h3>
            <div className="w-8 h-[1px] bg-bronze mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="bg-white p-6 border border-sandstone/15 hover:shadow-lg hover:border-bronze/30 transition duration-300"
              >
                <div className="p-3 bg-warmwhite w-max mb-5 rounded-none border border-sandstone/20">
                  {v.icon}
                </div>
                <h4 className="font-display text-lg font-bold text-charcoal mb-2">{v.title}</h4>
                <p className="font-sans text-xs text-zinc-600 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. VISUAL TIMELINE OF EXPANSION */}
        <section id="about-timeline" className="py-16 bg-charcoal text-warmwhite p-8 md:p-12 rounded-none border border-bronze/20 relative overflow-hidden">
          {/* subtle pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#C89F65_1px,transparent_1px)] [background-size:24px_24px]" />
          
          <div className="relative z-10 text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-2">
              <History className="text-bronze" size={16} />
              <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-sandstone font-bold">Historical Blueprint</span>
            </div>
            <h3 className="font-display text-3xl md:text-5xl font-bold text-warmwhite">
              The Journey of <span className="text-sandstone italic font-normal">ASTC</span>
            </h3>
            <p className="font-sans text-xs text-zinc-400 mt-4 max-w-xl mx-auto">
              How we grew from a passionate local Adelaide stone-masonry partnership into South Australia’s recognized multi-trade construction benchmark.
            </p>
          </div>

          {/* Timeline Nodes (Alternating vertical layout) */}
          <div className="relative z-10 max-w-4xl mx-auto mt-12">
            {/* Center line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-700 -translate-x-[0.5px]" />

            <div className="flex flex-col gap-12">
              {TIMELINE_EVENTS.map((evt, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={evt.year} className="relative flex flex-col md:flex-row items-start md:items-center">
                    
                    {/* Floating Node marker */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                      <div className="h-9 w-9 bg-zinc-950 border-2 border-bronze rounded-full flex items-center justify-center text-[10px] font-sans font-bold text-sandstone">
                        {evt.year.substring(2)}
                      </div>
                    </div>

                    {/* Content Box */}
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:order-last md:pl-12 md:text-left'}`}>
                      <div className="bg-zinc-900 border border-zinc-800 p-6 hover:border-bronze/40 transition duration-300">
                        <span className="font-sans text-xs text-bronze uppercase tracking-widest font-extrabold block mb-2">
                          {evt.year} Milestone
                        </span>
                        <h4 className="font-display text-lg font-bold text-warmwhite">{evt.title}</h4>
                        <p className="font-sans text-xs text-zinc-400 leading-relaxed mt-2">{evt.description}</p>
                      </div>
                    </div>

                    {/* Empty spacer for grid alignment */}
                    <div className="hidden md:block w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final Conversion Area */}
        <section className="text-center pt-8">
          <h4 className="font-display text-2xl font-bold text-charcoal mb-4">Would You Like to See Our Projects up Close?</h4>
          <p className="font-sans text-xs text-zinc-500 max-w-md mx-auto mb-6">Our portfolio of luxury homes, pool installations, and architectural stonework covers all of Adelaide metro.</p>
          <button
            onClick={() => onNavigate('projects')}
            className="bg-charcoal text-warmwhite text-xs font-sans tracking-widest uppercase py-3.5 px-8 hover:bg-bronze hover:text-charcoal transition-colors duration-300 cursor-pointer"
          >
            Explore Projects
          </button>
        </section>

      </div>
    </motion.div>
  );
}
