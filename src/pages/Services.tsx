import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data';
import { Page, ServiceId, ServiceDetail } from '../types';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Scissors, RefreshCw, Smartphone, Phone, Mail, ChevronRight, HelpCircle } from 'lucide-react';

interface ServicesProps {
  currentPage: Page;
  currentServiceId: ServiceId | null;
  onNavigate: (page: Page, serviceId?: ServiceId | null) => void;
}

export default function Services({ currentPage, currentServiceId, onNavigate }: ServicesProps) {
  
  // Find current active detail if requested
  const activeService = SERVICES.find(s => s.id === currentServiceId);

  // Stagger configurations 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // Render index overview page if no active child service is chosen
  if (!activeService) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="bg-warmwhite py-16"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Section Titles */}
          <div className="text-left mb-16 max-w-2xl">
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-bronze font-bold mb-3 block">
              Professional Specialties
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-charcoal mb-4">
              Our Architectural <br />
              <span className="text-bronze italic font-normal">Trades & Construction</span>
            </h1>
            <p className="font-sans text-xs md:text-sm text-zinc-650 leading-relaxed">
              Adelaide Stone & Tile Construction delivers integrated high-end masonry. We own the program end-to-end, removing conflicts between separate paving, waterproofing, concrete, and tiling contractors. Explore our individual trades below to view active specifications.
            </p>
          </div>

          {/* Catalog Rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {SERVICES.map((s, index) => {
              return (
                <div
                  key={s.id}
                  onClick={() => {
                    onNavigate('services', s.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group cursor-pointer bg-white border border-sandstone/15 overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-500"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-charcoal">
                    <img 
                      src={s.heroImage} 
                      alt={s.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-warmwhite/30 to-transparent" />
                    <span className="absolute bottom-4 left-4 bg-zinc-950/80 border border-zinc-800 text-warmwhite font-sans text-[9px] tracking-widest font-extrabold uppercase px-3 py-1">
                      0{index + 1} // {s.id.toUpperCase()} SERVICE
                    </span>
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="font-display text-2xl font-bold text-charcoal group-hover:text-bronze transition-colors flex justify-between items-center">
                      {s.title}
                      < ChevronRight className="text-zinc-300 group-hover:text-bronze group-hover:translate-x-1.5 transition-all duration-300" size={20} />
                    </h3>
                    <p className="font-sans text-xs text-zinc-500 italic mt-1 font-medium">{s.subtitle}</p>
                    <p className="font-sans text-xs text-zinc-600 leading-relaxed mt-4 pt-4 border-t border-sandstone/15">
                      {s.shortDescription}
                    </p>
                    
                    <span className="inline-flex items-center gap-1.5 font-sans text-[10px] tracking-widest font-bold text-bronze uppercase mt-6 border-b border-bronze/10 pb-0.5">
                      Open Trade Details & Standards <ChevronRight size={10} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Help panel */}
          <div className="bg-zinc-900 text-warmwhite p-8 md:p-12 border border-bronze/20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#C89F65_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 max-w-3xl">
              <span className="font-sans text-[10px] uppercase tracking-widest text-sandstone font-bold flex items-center gap-1.5 mb-3">
                <HelpCircle size={12} className="text-bronze" /> Multi-Trade Advisory
              </span>
              <h4 className="font-display text-2xl md:text-3xl font-bold mb-4">Combining Masonry & Waterproofing?</h4>
              <p className="font-sans text-xs md:text-sm text-zinc-400 leading-relaxed mb-6">
                Most failures on fully tiled luxury pools or outdoor cladding happen at boundaries and transition joints between separate trades. By coordinating the structural concrete base pouring, high flex waterproofing membranes, and master stone layouts with a single contractor, you guarantee an engineered system that stands perfectly without compromise.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-bronze text-charcoal font-sans text-xs font-semibold tracking-widest uppercase px-6 py-3 hover:bg-white hover:text-charcoal transition-colors cursor-pointer"
              >
                Discuss Integrated Build
              </button>
            </div>
          </div>

        </div>
      </motion.div>
    );
  }

  // Else render specific Service detailed subpage!
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-warmwhite overflow-hidden pb-16"
    >
      {/* SECTION 1: DETAILED SERVICE HERO */}
      <section id={`${activeService.id}-detail-hero`} className="relative min-h-[50vh] md:min-h-[55vh] flex items-center justify-center bg-charcoal text-warmwhite pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={activeService.heroImage}
            alt={activeService.title}
            className="w-full h-full object-cover opacity-50 scale-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warmwhite via-warmwhite/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full text-left">
          {/* Navigation breadcrumb */}
          <div className="flex items-center gap-2 mb-4 font-sans text-[10px] tracking-wider text-sandstone uppercase">
            <button onClick={() => onNavigate('services', null)} className="hover:text-warmwhite transition font-bold cursor-pointer">Services</button>
            <span className="text-zinc-650">/</span>
            <span className="text-zinc-400 font-medium">{activeService.title} Details</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-warmwhite leading-tight max-w-3xl">
            {activeService.title} <br />
            <span className="text-sandstone italic font-normal text-2xl md:text-3xl lg:text-4xl block mt-2">{activeService.subtitle}</span>
          </h1>
          
          <div className="w-16 h-[1.5px] bg-bronze mt-6" />
        </div>
      </section>

      {/* SECTION 2: EXPLANATION AND BENEFITS */}
      <section id="service-benefits" className="py-20 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-sandstone/15">
        
        {/* Deep explanation text */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-bronze font-extrabold">Detailed trade specifications</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal tracking-tight">
            Comprehensive Construction Scope
          </h2>
          <p className="font-sans text-xs md:text-sm text-zinc-600 leading-relaxed">
            {activeService.fullDescription}
          </p>
          <p className="font-sans text-xs md:text-sm text-zinc-600 leading-relaxed">
            Every millimeter of our work matches South Australia's strict building mandates and complies with premium structural guidelines. We prioritize heavy-duty polymer mortars, Swiss moisture barriers, and diamond-tooled miter corners to give homes and businesses an absolute edge in aesthetics and protection.
          </p>
        </div>

        {/* Benefits bullets card */}
        <div className="lg:col-span-5 bg-white p-6 md:p-8 border border-sandstone/15 shadow-md rounded-none">
          <h3 className="font-display text-lg font-bold text-charcoal border-b border-sandstone/15 pb-3 mb-5 uppercase tracking-wide">
            Engineered Craft Benefits
          </h3>
          <ul className="flex flex-col gap-4">
            {activeService.benefits.map((b, bIdx) => {
              return (
                <li key={bIdx} className="flex gap-3">
                  <CheckCircle2 className="text-bronze shrink-0 mt-0.5" size={16} />
                  <span className="font-sans text-xs text-zinc-700 leading-relaxed">
                    {b}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* SECTION 3: CRAFT GALLERY */}
      {activeService.gallery && activeService.gallery.length > 0 && (
        <section id="service-portfolio-gallery" className="py-20 bg-warmwhite px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-bronze font-bold mb-3 block">
              Result Visualizations
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-charcoal tracking-tight">
              On-Site Craft Handover
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeService.gallery.map((img, iIndex) => {
              return (
                <div key={iIndex} className="relative aspect-[4/3] bg-zinc-950 overflow-hidden border border-sandstone/15 shadow-sm group">
                  <img
                    src={img}
                    alt={`${activeService.title} masterpiece`}
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition duration-500" />
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* SECTION 4: 5-STEP TIMELINE PROCESS ROW */}
      <section id="service-timeline" className="py-20 bg-charcoal text-warmwhite px-6 md:px-12 border-y border-bronze/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-sandstone font-bold mb-3 block">
              Architectural Sequencing
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-warmwhite">
              The Step-by-Step <span className="text-sandstone italic font-normal">Method</span>
            </h2>
            <div className="w-12 h-[1px] bg-bronze mx-auto mt-4" />
          </div>

          {/* Sequential Grid Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {activeService.processSteps.map((pStep, pIndex) => {
              return (
                <div key={pIndex} className="bg-zinc-900 border border-zinc-800 p-6 flex flex-col justify-between hover:border-bronze/45 transition-colors duration-300 relative">
                  {/* Step indicator arrow */}
                  {pIndex < 4 && (
                    <div className="hidden lg:block absolute top-[40%] -right-3.5 translate-y-1/2 z-10 text-bronze">
                      <ChevronRight size={18} />
                    </div>
                  )}
                  
                  <div>
                    <span className="font-display text-zinc-700 font-black text-4xl block leading-none mb-4">
                      0{pStep.step}
                    </span>
                    <h4 className="font-display text-lg font-bold text-warmwhite leading-snug">{pStep.title}</h4>
                    <p className="font-sans text-xs text-zinc-400 mt-3 leading-relaxed">{pStep.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: CUSTOM SERVICE CALL TO ACTION */}
      <section id="service-specific-cta" className="max-w-4xl mx-auto px-4 md:px-8 mt-20 text-center">
        <div className="bg-white p-8 md:p-12 border border-sandstone/20 shadow-xl rounded-none relative">
          <span className="font-sans text-[10px] uppercase font-extrabold tracking-widest text-bronze block mb-2">Connect Directly</span>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-charcoal tracking-tight mb-4">
            Transform Your Project with Certified {activeService.title} Specialists
          </h3>
          <p className="font-sans text-xs text-zinc-500 max-w-md mx-auto mb-8 leading-relaxed">
            Let our masons review your layouts, provide material specifications, and offer an accurate cost breakdown. Book a consult via our secure contact page.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-charcoal text-warmwhite font-sans text-xs font-bold tracking-widest uppercase px-8 py-3.5 hover:bg-bronze hover:text-charcoal transition-colors duration-300 w-full sm:w-auto cursor-pointer"
            >
              Get Custom Quote
            </button>
            <button
              onClick={() => onNavigate('services', null)}
              className="bg-transparent border border-sandstone/30 text-charcoal font-sans text-xs font-semibold tracking-widest uppercase px-8 py-3.5 hover:bg-zinc-100 transition-colors duration-300 w-full sm:w-auto cursor-pointer"
            >
              Back to Services List
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
