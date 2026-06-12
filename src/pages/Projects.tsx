import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { ServiceId, Project } from '../types';
import { MapPin, Grid, Layers, Calendar, ArrowUpRight } from 'lucide-react';

interface ProjectsProps {
  onNavigate: (page: string, serviceId?: string | null) => void;
}

export default function Projects({ onNavigate }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | ServiceId>('all');

  // Filter project lists
  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  const filters: { label: string; value: 'all' | ServiceId }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Tiled Pools', value: 'pools' },
    { label: 'Stone Masonry', value: 'stone' },
    { label: 'Residential Tiling', value: 'residential' },
    { label: 'Commercial Tiling', value: 'commercial' },
    { label: 'Concrete Works', value: 'concrete' }
  ];

  return (
    <div id="projects-showroom-collection" className="bg-warmwhite min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Page Titles */}
        <div className="text-left mb-16 max-w-2xl">
          <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-bronze font-bold mb-3 block animate-pulse-slow">
            ASTC Showroom Portfolio
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-charcoal mb-4">
            The Masterpiece <span className="text-bronze italic font-normal">Collection</span>
          </h1>
          <p className="font-sans text-xs md:text-sm text-zinc-650 leading-relaxed">
            A curated gallery representing our physical milestones across Adelaide. Filter by craft to explore how we marry heavy natural sandstone materials with high-density tile finishes.
          </p>
        </div>

        {/* Dynamic Category Sieve Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-sandstone/15">
          {filters.map((f) => {
            const isActive = activeFilter === f.value;
            return (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`font-sans text-xs tracking-widest uppercase py-3 px-5 border transition-all duration-300 rounded-none cursor-pointer ${
                  isActive
                    ? 'bg-charcoal border-charcoal text-warmwhite font-bold shadow'
                    : 'bg-white border-sandstone/20 text-charcoal hover:border-bronze hover:text-bronze'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Dynamic Grid Framework (Portrait-Optimized 3:4 and 4:3 structures) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => {
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  key={proj.id}
                  className="group bg-white border border-sandstone/15 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 relative flex flex-col justify-between"
                >
                  {/* Photo area */}
                  <div className="relative aspect-[3/4] bg-zinc-950 overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-90"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient shadow inside */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />
                    
                    {/* Upper Category Ribbon */}
                    <div className="absolute top-4 left-4 bg-zinc-900 border border-zinc-800 px-3 py-1 text-[9px] font-sans tracking-widest font-bold text-sandstone uppercase">
                      {proj.tag}
                    </div>

                    {/* Lower details that show on hover or stay styled */}
                    <div className="absolute bottom-6 left-6 right-6 text-warmwhite z-10 flex flex-col justify-end">
                      <div className="flex items-center gap-1 text-[10px] text-bronze uppercase tracking-widest font-extrabold mb-1">
                        <MapPin size={10} className="text-sandstone" />
                        <span>{proj.location}</span>
                      </div>
                      
                      <h3 className="font-display text-xl font-bold hover:text-bronze transition-colors">
                        {proj.title}
                      </h3>
                      
                      <p className="font-sans text-xs text-zinc-300 leading-relaxed mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
                        {proj.description}
                      </p>
                    </div>

                    {/* Expand icon block */}
                    <div className="absolute top-4 right-4 p-2 bg-zinc-950/80 text-warmwhite border border-sandstone/20 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <ArrowUpRight size={14} className="text-sandstone" />
                    </div>
                  </div>

                  {/* Footer ribbon info */}
                  <div className="p-4 bg-warmwhite/40 border-t border-sandstone/10 flex justify-between items-center text-[10px] font-sans text-zinc-500 uppercase tracking-widest">
                    <span className="flex items-center gap-1 font-semibold text-charcoal">
                      <Grid size={11} className="text-bronze" /> ASTC Masterworks
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={11} /> Handover: {proj.year}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Map & Coverage callout */}
        <section className="bg-warmwhite/95 border border-bronze/20 text-warmwhite p-8 md:p-12 mt-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C89F65_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-sandstone font-bold mb-3 block">
              South Australia-Wide Handover Guild
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight mb-4">
              Have a Custom Architectural Plan to Realize?
            </h2>
            <p className="font-sans text-xs md:text-sm text-zinc-300 leading-relaxed mb-8">
              We collaborate closely with high-end Adelaide home designers, architects, and direct estate owners. Let our masons and pool tilers review your engineering blueprints.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-bronze text-charcoal font-sans text-xs font-bold tracking-widest uppercase px-8 py-3.5 hover:bg-white hover:text-charcoal transition-all duration-300 cursor-pointer"
            >
              Consult Our Builders Now
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
