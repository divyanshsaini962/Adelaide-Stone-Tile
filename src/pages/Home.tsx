import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Phone, Award, Shield, Sparkles, CheckCircle, Quote, Compass, Instagram, Heart, MessageCircle, Play, Volume2, VolumeX, X, ExternalLink } from 'lucide-react';
import { SERVICES, PROJECTS, TESTIMONIALS } from '../data';
import { Page, ServiceId } from '../types';

const INSTAGRAM_REELS = [
  {
    id: 'reel-1',
    title: 'Precision Mosaic Alignment',
    caption: 'Surgical calibration on this fully tiled pool. Every glass mosaic aligned to the millimeter. 📐🏊‍♂️ #astc #pooldesign #tiling #adelaideconstruction',
    videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4',
    reelUrl: 'https://www.instagram.com/reel/DCTQRougG9S/',
    coverImage: '/src/assets/images/astc_pool_tile_1781272776563.jpg',
    views: '48.2K',
    likes: '3.4K',
    comments: '184',
    duration: '0:15'
  },
  {
    id: 'reel-2',
    title: 'Hand-Faced Sandstone Cladding',
    caption: 'Dressing random ashlar sandstone blocks direct from Adelaide Hills quarries. Old world craft, modern architecture. 🪨🔨 #stonemasonry #mason #craftsmanship #sandstone',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    reelUrl: 'https://www.instagram.com/reel/C7LEDB0yhIs/',
    coverImage: '/src/assets/images/astc_stone_1781272760014.jpg',
    views: '24.9K',
    likes: '1.8K',
    comments: '92',
    duration: '0:22'
  },
  {
    id: 'reel-3',
    title: 'Exposed Aggregate Concrete Pour',
    caption: 'Forming cantilevered floating steps with minimal grey concrete. Watch the aggregate exposure process. 🏗️🌊 #concrete #floatingsteps #architecture #outdoorliving',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    reelUrl: 'https://www.instagram.com/reel/DHNgCmxTywS/',
    coverImage: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=800&auto=format&fit=crop',
    views: '61.7K',
    likes: '5.2K',
    comments: '312',
    duration: '0:18'
  },
  {
    id: 'reel-4',
    title: 'Sunset over Medindie Terrace',
    caption: 'Completed outdoor transformation program. Sandstone fire pit, travertine paving, and fully tiled mosaic pool at dusk. 🌅🏡 #luxuryhomes #sunset #landscape #adelaide',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    reelUrl: 'https://www.instagram.com/reel/DKQswjZTCde/',
    coverImage: '/src/assets/images/astc_outdoor_dusk_1781272815184.jpg',
    views: '83.1K',
    likes: '7.9K',
    comments: '408',
    duration: '0:30'
  }
];

interface HomeProps {
  onNavigate: (page: Page, serviceId?: ServiceId | null) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  // We can select the top 3 projects for the homepage featured showcase
  const featuredProjects = PROJECTS.slice(0, 3);

  // Instagram Reels State
  const [activeReelId, setActiveReelId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [likedReels, setLikedReels] = useState<Record<string, boolean>>({});
  const [showHeartOverlay, setShowHeartOverlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleLike = (reelId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLikedReels(prev => ({
      ...prev,
      [reelId]: !prev[reelId]
    }));
  };

  const handleVideoDoubleClick = (reelId: string) => {
    if (!likedReels[reelId]) {
      handleLike(reelId);
    }
    setShowHeartOverlay(true);
    setTimeout(() => {
      setShowHeartOverlay(false);
    }, 800);
  };

  const activeReel = INSTAGRAM_REELS.find(r => r.id === activeReelId);

  // Animation constants for pristine transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-warmwhite overflow-hidden"
    >
      {/* 1. LUXURY HERO BANNER */}
      <section id="homepage-hero" className="relative min-h-[92vh] flex items-center justify-center bg-charcoal text-warmwhite overflow-hidden">
        {/* Fullsize Backdrop Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/luxury_pool_masonry.png"
            alt="Luxury Adelaide outdoor backyard with fully tiled mosaic pool and premium hand-crafted stone walls"
            className="w-full h-full object-cover opacity-45 scale-105 animate-pulse-slow"
            referrerPolicy="no-referrer"
          />
          {/* Architectural Overlay Gradient (Sandstone warm tone flowing into dark slate) */}
          <div className="absolute inset-0 bg-gradient-to-t from-warmwhite via-warmwhite/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-warmwhite/80 via-warmwhite/20 to-transparent" />
        </div>

        {/* Content Frame */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 w-full flex flex-col items-start text-left">
          {/* Micro Tagline */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-2 mb-6"
          >
            <span className="h-[1px] w-8 bg-bronze" />
            <span className="font-sans text-[11px] md:text-xs tracking-[0.4em] uppercase text-sandstone font-bold">
              Architectural Masonry & Luxury Pools
            </span>
          </motion.div>

          {/* Premium Headline */}
          <motion.h1 
            variants={itemVariants}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-warmwhite max-w-4xl leading-[1.1] mb-6"
          >
            Premium Stone & Pool <br className="hidden md:inline" />
            <span className="text-sandstone italic font-normal">Construction</span> in Adelaide
          </motion.h1>

          {/* Deep Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="font-sans text-sm md:text-base text-zinc-300 max-w-2xl leading-relaxed mb-10"
          >
            Crafting fully tiled swimming pools, hand-faced structural stone masonry, and high-end residential tiling solutions with the surgical calibration expected by South Australia’s premier architects and builders.
          </motion.p>

          {/* Double CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => onNavigate('contact')}
              className="bg-bronze text-charcoal text-xs font-sans font-bold tracking-widest uppercase px-8 py-4 hover:bg-warmwhite hover:text-charcoal transition-all duration-500 shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
            >
              Get Free Quote
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="bg-transparent border border-warmwhite text-warmwhite text-xs font-sans font-bold tracking-widest uppercase px-8 py-4 hover:bg-warmwhite hover:text-charcoal transition-all duration-500 flex items-center justify-center cursor-pointer"
            >
              View Projects
            </button>
          </motion.div>

          {/* Trust anchors */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-zinc-600/30 w-full max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <Award className="text-sandstone" size={20} />
              <div>
                <p className="font-display text-sm font-semibold text-warmwhite leading-none">BLD 291410</p>
                <span className="text-[10px] text-zinc-400 font-sans tracking-wider uppercase">Licensed Trade</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="text-sandstone" size={20} />
              <div>
                <p className="font-display text-sm font-semibold text-warmwhite leading-none">100% Fully Insured</p>
                <span className="text-[10px] text-zinc-400 font-sans tracking-wider uppercase">Complete Protection</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <Sparkles className="text-sandstone" size={20} />
              <div>
                <p className="font-display text-sm font-semibold text-warmwhite leading-none">Adelaide Hills Core</p>
                <span className="text-[10px] text-zinc-400 font-sans tracking-wider uppercase">Local Stonemasons</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE SERVICES GRID (3x2 Block) */}
      <section id="homepage-services" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-bronze font-bold mb-3 block">
            Craft Specialties
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-charcoal">
            Our Architectural <span className="italic font-normal text-bronze">Expertise</span>
          </h2>
          <div className="w-12 h-[2px] bg-bronze mt-5" />
          <p className="font-sans text-xs md:text-sm text-zinc-600 mt-5 max-w-2xl leading-relaxed text-center">
            Adelaide Stone & Tile Construction is a unified contracting team. We manage complex outdoor programs, syncing concrete structural bases, water-barrier membranes, stone facades, and designer tiles.
          </p>
        </div>

        {/* 3x2 Layout Frame */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, idx) => {
            return (
              <motion.div
                key={s.id}
                variants={itemVariants}
                onClick={() => onNavigate('services', s.id)}
                className="group relative cursor-pointer overflow-hidden border border-sandstone/25 shadow-sm hover:shadow-xl transition-all duration-500 bg-white flex flex-col justify-between"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
                  <img
                    src={s.heroImage}
                    alt={s.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-85"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle dark filter */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition duration-500" />
                  
                  {/* Numeric Badge */}
                  <span className="absolute top-4 left-4 font-display font-bold text-xs bg-warmwhite/90 border border-sandstone/30 text-charcoal px-2.5 py-1 tracking-widest rounded-none">
                    0{idx + 1}
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-6 bg-white shrink-0">
                  <h3 className="font-display text-xl font-bold text-charcoal tracking-tight group-hover:text-bronze transition-colors flex items-center justify-between">
                    {s.title}
                    <ArrowRight size={16} className="text-zinc-300 group-hover:text-bronze group-hover:translate-x-1.5 transition-all duration-300" />
                  </h3>
                  <p className="font-sans text-[11px] uppercase tracking-wide text-bronze/80 font-medium mt-1">
                    {s.subtitle.split('&')[0]}
                  </p>
                  <p className="font-sans text-xs text-zinc-650 leading-relaxed mt-3 pt-2 border-t border-sandstone/15">
                    {s.shortDescription}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. FEATURED PROJECTS CARDS SCREEN */}
      <section id="homepage-featured-projects" className="py-24 bg-charcoal text-warmwhite px-4 md:px-8 border-y border-bronze/10">
        <div className="max-w-7xl mx-auto">
          {/* Header row split */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-sandstone font-bold mb-3 block">
                The ASTC Portfolio
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-warmwhite">
                Monuments of <span className="italic font-normal text-bronze">Adelaide Craft</span>
              </h2>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="group flex items-center gap-2 font-sans text-xs font-bold tracking-widest text-sandstone uppercase border-b border-sandstone/30 pb-1.5 hover:text-bronze hover:border-bronze transition-all duration-300 cursor-pointer"
            >
              Explore Full Projects Gallery
              <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

          {/* Show 3 highlighted projects side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((p) => {
              return (
                <div
                  key={p.id}
                  onClick={() => onNavigate('projects')}
                  className="group cursor-pointer bg-zinc-900 border border-zinc-800 hover:border-bronze/50 transition-all duration-500 overflow-hidden flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-zinc-950/80 border border-zinc-800 text-[9px] tracking-widest uppercase font-sans font-bold text-bronze px-2.5 py-1">
                      {p.year}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <span className="font-sans text-[10px] tracking-widest text-bronze font-bold uppercase block">
                      {p.tag}
                    </span>
                    <h3 className="font-display text-xl font-bold text-warmwhite mt-1 group-hover:text-sandstone transition duration-300">
                      {p.title}
                    </h3>
                    <p className="font-sans text-[11px] text-zinc-505 italic mt-1 font-medium text-zinc-400">
                      {p.location}
                    </p>
                    <p className="font-sans text-xs text-zinc-400 leading-relaxed mt-4 pt-3 border-t border-zinc-850">
                      {p.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3.5. FOLLOW THE CRAFT ON INSTAGRAM REELS */}
      <section id="homepage-instagram-reels" className="py-24 bg-warmwhite px-4 md:px-8 border-b border-sandstone/15 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-bronze font-bold mb-3 block flex items-center gap-1.5">
                <Instagram size={13} className="text-bronze" /> Live from the Jobsite
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-charcoal">
                Follow Our Process <span className="italic font-normal text-bronze">on Reels</span>
              </h2>
              <p className="font-sans text-xs md:text-sm text-zinc-650 mt-4 max-w-xl leading-relaxed">
                Watch our Adelaide Hills stonemasons shape raw sandstone blocks, align luxury pool mosaics, and execute extreme-grade waterproofing live in the field.
              </p>
            </div>
            <a
              href="https://www.instagram.com/adelaidestoneandtile/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white border border-sandstone/25 px-6 py-3.5 text-xs font-sans font-bold tracking-widest uppercase text-charcoal hover:border-bronze hover:text-bronze transition-all duration-300"
            >
              <Instagram size={14} className="text-bronze group-hover:scale-110 transition-transform" />
              @adelaidestoneandtile
              <ExternalLink size={12} className="text-zinc-400 group-hover:text-bronze transition-colors" />
            </a>
          </div>

          {/* Reels Layout Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {INSTAGRAM_REELS.map((reel) => {
              const isLiked = likedReels[reel.id];
              return (
                <motion.div
                  key={reel.id}
                  variants={itemVariants}
                  onClick={() => setActiveReelId(reel.id)}
                  className="group relative aspect-[9/16] bg-zinc-950 border border-sandstone/15 hover:border-bronze/50 shadow-md hover:shadow-2xl overflow-hidden cursor-pointer flex flex-col justify-between p-5 transition-all duration-500 rounded-2xl"
                >
                  {/* Autoplaying Video Preview Loop */}
                  <video
                    src={reel.videoUrl}
                    poster={reel.coverImage}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-85 transition-all duration-700 pointer-events-none"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 opacity-80 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />

                  {/* Upper Row: Duration & Instagram Badge */}
                  <div className="relative z-10 flex justify-between items-center w-full">
                    <span className="bg-black/60 backdrop-blur-md border border-zinc-800 text-[9px] font-sans font-extrabold tracking-widest uppercase px-2.5 py-1 text-zinc-300 rounded-full">
                      {reel.duration}
                    </span>
                    <a
                      href={reel.reelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-warmwhite/80 hover:text-bronze transition-colors p-1"
                      title="Open on Instagram"
                    >
                      <Instagram size={16} />
                    </a>
                  </div>

                  {/* Play Hover Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="h-14 w-14 bg-bronze/90 backdrop-blur-md rounded-full flex items-center justify-center scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-xl">
                      <Play size={20} fill="currentColor" className="ml-1 text-charcoal" />
                    </div>
                  </div>

                  {/* Lower Row: Views, Title & Action Stats */}
                  <div className="relative z-10 flex flex-col items-start w-full">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-bronze font-bold mb-1">
                      {reel.views} views
                    </span>
                    <h3 className="font-display text-lg font-bold text-warmwhite leading-tight mb-2 text-left">
                      {reel.title}
                    </h3>
                    <p className="font-sans text-[11px] text-zinc-400 leading-snug line-clamp-2 mb-3 text-left">
                      {reel.caption}
                    </p>

                    {/* Likes & Comments Counters */}
                    <div className="flex gap-4 border-t border-zinc-800/60 pt-3 w-full justify-between items-center">
                      <div className="flex items-center gap-1.5 text-zinc-300 text-xs font-sans">
                        <button
                          onClick={(e) => handleLike(reel.id, e)}
                          className="hover:scale-110 transition-transform active:scale-95 cursor-pointer"
                        >
                          <Heart
                            size={14}
                            className={isLiked ? 'text-red-500 fill-red-500' : 'text-zinc-400 hover:text-red-500'}
                          />
                        </button>
                        <span>{isLiked ? (parseFloat(reel.likes.replace('K', '')) + 0.1).toFixed(1) + 'K' : reel.likes}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-300 text-xs font-sans">
                        <MessageCircle size={14} className="text-zinc-400" />
                        <span>{reel.comments}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INSTAGRAM REEL INTERACTIVE PLAYER MODAL */}
      <AnimatePresence>
        {activeReelId && activeReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-zinc-950/90 backdrop-blur-md flex items-center justify-center z-[9999] p-4"
            onClick={() => setActiveReelId(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="relative w-full max-w-[420px] aspect-[9/16] bg-black shadow-2xl flex flex-col justify-end text-warmwhite overflow-hidden rounded-2xl border border-zinc-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveReelId(null)}
                className="absolute top-4 right-4 z-[100] h-10 w-10 bg-black/60 backdrop-blur-md hover:bg-black/85 text-warmwhite rounded-full flex items-center justify-center cursor-pointer border border-zinc-800 transition-colors shadow-lg"
              >
                <X size={18} />
              </button>

              {/* Official Instagram Reel Embed Iframe */}
              <iframe
                src={`${activeReel.reelUrl}embed/`}
                className="w-full h-full border-0"
                allowTransparency
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. PREMIUM TESTIMONIALS (Luxury stone texture bg) */}
      <section id="homepage-testimonials" className="py-24 bg-warmwhite relative px-4 md:px-8 border-b border-sandstone/15">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <Quote size={28} className="text-bronze/40" />
          </div>
          <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-bronze font-bold mb-4 block">
            Client Appreciation
          </span>
          <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-charcoal mb-4">
            Trusted by Builders & Homeowners Across Adelaide
          </h2>
          <div className="w-8 h-[1.5px] bg-bronze mx-auto mt-6 mb-12" />

          {/* Testimonial slider / static gorgeous card list */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="bg-white p-8 md:p-12 border border-sandstone/15 shadow-md rounded-none relative">
              <p className="font-display text-lg md:text-xl text-charcoal leading-relaxed italic text-center">
                "{TESTIMONIALS[0].quote}"
              </p>
              <div className="mt-8 flex flex-col items-center">
                <span className="font-display text-sm font-bold text-charcoal">{TESTIMONIALS[0].author}</span>
                <span className="font-sans text-[10px] text-bronze font-bold uppercase tracking-widest mt-1">
                  {TESTIMONIALS[0].role} — {TESTIMONIALS[0].location} SA
                </span>
              </div>
            </div>
            
            {/* Architectural Trust Quote */}
            <div className="mt-12 text-center max-w-2xl mx-auto">
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-zinc-500 block mb-2">Architectural Quality Level</span>
              <p className="text-xs text-zinc-500 font-sans leading-relaxed">
                We design and finish each program to align strictly with standard <b>AS3958.1</b> tile placement practices and structural building codes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SPLENDID DUSK BANNER FOOTER CTA */}
      <section id="homepage-cta-banner" className="relative py-24 bg-charcoal text-warmwhite overflow-hidden border-t border-bronze/20">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/astc_outdoor_dusk_1781272815184.jpg"
            alt="Luxury Adelaide terrace and tiled pool highlighted under sunset outdoor lighting at dusk"
            className="w-full h-full object-cover opacity-35 scale-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center flex flex-col items-center">
          <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-sandstone font-bold mb-4">
            Adelaide Outdoor Transformation
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-warmwhite mb-6">
            Ready to Transform Your <span className="text-sandstone italic font-normal">Outdoor Space?</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-zinc-300 max-w-2xl leading-relaxed mb-10">
            Discuss your master pool tiling, architectural block facade, or high-end residential floor tiles with Adelaide’s dedicated masonry contractor. Let’s turn raw stone and tiles into lifelong visual monuments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto bg-bronze text-charcoal text-xs font-sans font-bold tracking-widest uppercase px-10 py-4 hover:bg-warmwhite hover:text-charcoal transition-all duration-300 cursor-pointer"
            >
              Request A Quote
            </button>
            <a
              href="tel:+61418835806"
              className="w-full sm:w-auto bg-transparent border border-warmwhite text-warmwhite text-xs font-sans font-bold tracking-widest uppercase px-10 py-4 hover:bg-warmwhite hover:text-charcoal transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <Phone size={14} className="text-sandstone group-hover:scale-115 transition" />
              Call Now: +61 418 835 806
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
