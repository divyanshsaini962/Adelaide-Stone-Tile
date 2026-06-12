import React, { useState } from 'react';
import { MapPin, Sparkles, Building, Landmark, Compass, Eye } from 'lucide-react';

interface SuburbProject {
  name: string;
  coords: { x: string; y: string };
  projectTitle: string;
  projectType: string;
  year: string;
  description: string;
}

const ADELAIDE_SUBURBS: SuburbProject[] = [
  {
    name: 'Burnside',
    coords: { x: '72%', y: '48%' },
    projectTitle: 'The Burnside Resort Pool',
    projectType: 'Fully Tiled Glass Mosaic Pool',
    year: '2025',
    description: '12-meter residential pool fully tiled with Spanish glass mosaics and Sandstone waterfall accents.'
  },
  {
    name: 'Stonyfell',
    coords: { x: '85%', y: '32%' },
    projectTitle: 'Ravine Sandstone Facade',
    projectType: 'Natural Rubble Stone Masonry',
    year: '2024',
    description: '120sqm of Hand-dressed irregular sandstone cladding blending into the local Adelaide Hills gorge.'
  },
  {
    name: 'Medindie',
    coords: { x: '45%', y: '22%' },
    projectTitle: 'Medindie Alfresco Pavilion',
    projectType: 'Travertine Coping & Slate Fireplace',
    year: '2025',
    description: 'Sublime luxury outdoor dining and pool surround lined with drop-face travertine coping.'
  },
  {
    name: 'Springfield',
    coords: { x: '68%', y: '78%' },
    projectTitle: 'Springfield Cantilever Stairs',
    projectType: 'Polished Architectural Concrete',
    year: '2025',
    description: 'Minimal charcoal concrete floating stairs paired alongside a historical raw dry-stone wall.'
  },
  {
    name: 'North Adelaide',
    coords: { x: '35%', y: '35%' },
    projectTitle: 'The Cathedral Masterbath',
    projectType: 'Bookmatched Calacatta Marble Tiling',
    year: '2025',
    description: 'Flawless floor-to-ceiling bookmatched marble ensuite featuring double-mitered birdsmouth edges.'
  }
];

export default function InteractiveMap() {
  const [selectedSuburb, setSelectedSuburb] = useState<SuburbProject>(ADELAIDE_SUBURBS[0]);

  return (
    <div id="interactive-suburbs-locator" className="bg-charcoal text-warmwhite p-6 md:p-8 border border-sandstone/20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-between">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C89F65_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <Compass className="text-bronze animate-spin-slow" size={18} />
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-sandstone font-bold">
            Adelaide Metro Coverage
          </span>
        </div>
        <h3 className="font-display text-2xl font-bold tracking-tight mb-4 text-warmwhite">
          Where We Build
        </h3>
        <p className="font-sans text-xs text-zinc-400 mb-6 max-w-md leading-relaxed">
          From the prestige estates of Springfield to coastal luxury and CBD commercial landmarks, ASTC is Adelaide’s trusted master-class contracting division. Click active pins to view regional craft.
        </p>
      </div>

      {/* Styled Interactive Canvas Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center my-4 relative z-10">
        
        {/* Map Vector Grid Showcase */}
        <div className="lg:col-span-3 relative bg-zinc-900 border border-zinc-800 rounded-lg h-[280px] md:h-[320px] flex items-center justify-center overflow-hidden group">
          {/* Adelaide Coast Grid Mock */}
          <div className="absolute left-0 top-0 bottom-0 w-1/5 bg-poolblue/5 border-r border-poolblue/10 flex items-center justify-center">
            <span className="font-sans text-[9px] text-poolblue/40 tracking-[0.3em] -rotate-90 uppercase font-semibold">Gulf St Vincent</span>
          </div>
          
          <div className="absolute inset-2 border border-zinc-800/50 rounded pointer-events-none" />
          
          {/* Suburb Nodes Overlay */}
          <div className="absolute inset-0 relative w-full h-full">
            {ADELAIDE_SUBURBS.map((suburb) => {
              const isSelected = selectedSuburb.name === suburb.name;
              return (
                <button
                  key={suburb.name}
                  onClick={() => setSelectedSuburb(suburb)}
                  className="absolute cursor-pointer group/pin -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-20 focus:outline-none"
                  style={{ left: suburb.coords.x, top: suburb.coords.y }}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Ring Pulse */}
                    {isSelected && (
                      <span className="absolute inline-flex h-8 w-8 rounded-full bg-bronze/30 animate-ping" />
                    )}
                    <span className={`absolute inline-flex h-10 w-10 rounded-full bg-bronze/10 scale-0 group-hover/pin:scale-100 transition-transform duration-300`} />
                    
                    {/* Pin Dot */}
                    <div className={`p-1.5 rounded-full shadow-lg border transition-all duration-300 ${
                      isSelected 
                        ? 'bg-bronze text-charcoal border-warmwhite scale-110' 
                        : 'bg-zinc-850 text-sandstone border-zinc-700 hover:border-bronze hover:scale-105'
                    }`}>
                      <MapPin size={14} className={isSelected ? 'animate-bounce' : ''} />
                    </div>

                    {/* Miniature Hover Label */}
                    <span className={`absolute top-full mt-1.5 px-2 py-0.5 whitespace-nowrap text-[9px] font-sans tracking-widest uppercase bg-zinc-950 border text-warmwhite rounded transition-opacity duration-300 ${
                      isSelected ? 'opacity-100 border-bronze font-bold' : 'opacity-60 group-hover/pin:opacity-100 border-zinc-800'
                    }`}>
                      {suburb.name}
                    </span>
                  </div>
                </button>
              );
            })}
            
            {/* Adelaide CBD Marker Node */}
            <div className="absolute left-[38%] top-[45%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center opacity-60 z-10">
              <Building size={14} className="text-zinc-650" />
              <span className="text-[9px] tracking-wider uppercase text-zinc-650 font-bold mt-0.5">Adelaide CBD</span>
            </div>

            {/* Mount Lofty Ridgeline Mock */}
            <div className="absolute right-0 top-0 bottom-0 w-1/8 bg-emerald-950/5 border-l border-emerald-950/10 flex items-center justify-center">
              <span className="font-sans text-[8px] text-zinc-600 tracking-[0.2em] rotate-90 uppercase mt-4">Adelaide Hills</span>
            </div>
          </div>
        </div>

        {/* Selected Suburb Metadata Card Panel */}
        <div className="lg:col-span-2 flex flex-col justify-center h-full">
          <div className="bg-zinc-900/80 border border-zinc-850 p-5 rounded-lg relative overflow-hidden">
            <span className="text-[10px] bg-bronze/10 text-bronze border border-bronze/20 px-2 py-0.5 rounded uppercase tracking-widest font-semibold font-sans">
              Recent Handover
            </span>
            
            <h4 className="font-display text-xl font-bold text-warmwhite mt-3 flex items-center gap-1.5">
              {selectedSuburb.name} Real Estate
            </h4>
            
            <div className="border-t border-zinc-800 my-3 pt-2">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-sans">Project Target</span>
              <p className="text-sm font-semibold text-sandstone mt-0.5">{selectedSuburb.projectTitle}</p>
              <p className="text-xs text-zinc-400 font-sans italic mt-0.5">{selectedSuburb.projectType}</p>
            </div>

            <div className="my-3">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-sans">Craft Summary</span>
              <p className="text-xs text-zinc-300 leading-relaxed mt-1">{selectedSuburb.description}</p>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-zinc-850 text-[10px] font-sans text-zinc-400">
              <span>Delivery Year: {selectedSuburb.year}</span>
              <span className="flex items-center gap-1 text-bronze font-semibold">
                <Sparkles size={10} /> Certified ASTC Masonry
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Info Lines */}
      <div className="border-t border-zinc-800/80 pt-4 mt-2 flex justify-between items-center relative z-10 text-[10px] text-zinc-500 font-sans">
        <span>Licence BLD 291410</span>
        <span className="flex items-center gap-1">
          <Eye size={10} className="text-bronze" /> 100% Adelaide-Owned & Operated
        </span>
      </div>
    </div>
  );
}
