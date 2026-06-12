import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, Instagram, Facebook, Award, Shield, FileCheck } from 'lucide-react';
import { Page, ServiceId } from '../types';

interface FooterProps {
  onNavigate: (page: Page, serviceId?: ServiceId | null) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: Page, serviceId?: ServiceId | null) => {
    onNavigate(page, serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-charcoal text-warmwhite font-sans pt-16 pb-8 border-t-2 border-bronze/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand Meta Column */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col cursor-pointer" onClick={() => handleNav('home')}>
            <span className="font-display font-semibold text-2xl text-warmwhite tracking-wider leading-none">
              ASTC
            </span>
            <span className="font-sans text-[10px] text-bronze tracking-[0.25em] font-semibold mt-1 uppercase">
              Adelaide Stone & Tile
            </span>
          </div>
          <p className="text-zinc-400 text-xs leading-relaxed mt-2">
            Adelaide’s premium masonry contracting firm. Specializing in fully tiled luxury pools, bespoke residential and commercial porcelain/stone work, and architectural sandstone structures.
          </p>
          {/* Trust badges */}
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1.5 text-[10px] text-sandstone tracking-wider uppercase font-semibold border border-sandstone/20 px-2 py-1 rounded bg-zinc-900/50">
              <Shield size={12} className="text-bronze" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-sandstone tracking-wider uppercase font-semibold border border-sandstone/20 px-2 py-1 rounded bg-zinc-900/50">
              <Award size={12} className="text-bronze" />
              <span>Master Craft</span>
            </div>
          </div>
        </div>

        {/* Brand Services Menu */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display text-sm tracking-widest uppercase font-semibold text-sandstone border-b border-zinc-800 pb-2">
            Our Specialties
          </h4>
          <ul className="flex flex-col gap-2.5 text-xs text-zinc-400">
            <li>
              <button onClick={() => handleNav('services', 'pools')} className="hover:text-bronze transition duration-300 flex items-center gap-1 text-left cursor-pointer">
                <ArrowRight size={10} className="text-bronze/50" /> Fully Tiled Pools
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('services', 'stone')} className="hover:text-bronze transition duration-300 flex items-center gap-1 text-left cursor-pointer">
                <ArrowRight size={10} className="text-bronze/50" /> Stone Masonry
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('services', 'residential')} className="hover:text-bronze transition duration-300 flex items-center gap-1 text-left cursor-pointer">
                <ArrowRight size={10} className="text-bronze/50" /> Residential Tiling
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('services', 'commercial')} className="hover:text-bronze transition duration-300 flex items-center gap-1 text-left cursor-pointer">
                <ArrowRight size={10} className="text-bronze/50" /> Commercial Tiling
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('services', 'concrete')} className="hover:text-bronze transition duration-300 flex items-center gap-1 text-left cursor-pointer">
                <ArrowRight size={10} className="text-bronze/50" /> Architectural Concrete
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('services', 'landscaping')} className="hover:text-bronze transition duration-300 flex items-center gap-1 text-left cursor-pointer">
                <ArrowRight size={10} className="text-bronze/50" /> Outdoor Landscaping
              </button>
            </li>
          </ul>
        </div>

        {/* Corporate Navigation */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display text-sm tracking-widest uppercase font-semibold text-sandstone border-b border-zinc-800 pb-2">
            Company
          </h4>
          <ul className="flex flex-col gap-2.5 text-xs text-zinc-400">
            <li>
              <button onClick={() => handleNav('home')} className="hover:text-bronze transition duration-300 flex items-center gap-1 text-left cursor-pointer">
                Home Portfolio
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('about')} className="hover:text-bronze transition duration-300 flex items-center gap-1 text-left cursor-pointer">
                The Heritage Story
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('projects')} className="hover:text-bronze transition duration-300 flex items-center gap-1 text-left cursor-pointer">
                Featured Gallery
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('contact')} className="hover:text-bronze transition duration-300 flex items-center gap-1 text-left cursor-pointer">
                Request A Quote
              </button>
            </li>
            <li className="pt-2">
              <span className="text-[10px] text-zinc-500 block uppercase tracking-wide">Business Hours</span>
              <span className="text-[11px] block text-zinc-400 mt-1">Monday – Saturday: 7:00 AM – 6:00 PM</span>
              <span className="text-[11px] block text-zinc-500 font-medium">Sunday: Closed (By Appointment Only)</span>
            </li>
          </ul>
        </div>

        {/* Contact/HQ Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display text-sm tracking-widest uppercase font-semibold text-sandstone border-b border-zinc-800 pb-2">
            Direct Contact
          </h4>
          <div className="flex flex-col gap-3.5 text-xs text-zinc-400">
            <div className="flex items-start gap-2.5">
              <MapPin size={16} className="text-bronze shrink-0 mt-0.5" />
              <span>Adelaide, South Australia<br />Servicing Burnside, Medindie, Springfield, and SA Suburbs</span>
            </div>
            <a href="tel:+61418835806" className="flex items-center gap-2.5 hover:text-bronze transition group">
              <Phone size={16} className="text-bronze group-hover:scale-110 transition" />
              <span>+61 418 835 806</span>
            </a>
            <a href="mailto:cspisso07@gmail.com" className="flex items-center gap-2.5 hover:text-bronze transition group">
              <Mail size={16} className="text-bronze group-hover:scale-110 transition" />
              <span>cspisso07@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://www.instagram.com/adelaidestoneandtile/" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-zinc-900 border border-zinc-800 hover:border-bronze hover:text-bronze transition duration-300" aria-label="Visit ASTC on Instagram">
                <Instagram size={14} />
              </a>
              <a href="https://www.facebook.com/cspisso07" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-zinc-900 border border-zinc-800 hover:border-bronze hover:text-bronze transition duration-300" aria-label="Visit ASTC on Facebook">
                <Facebook size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <p>© {currentYear} Adelaide Stone & Tile Construction (ASTC). All Rights Reserved.</p>
          <p className="text-[10px] text-zinc-600">
            SEO Keywords: Pool Tiling Adelaide • Stone Masonry Adelaide • Commercial Tiling Adelaide • Residential Tiling Adelaide
          </p>
        </div>
        <div className="flex gap-4 text-[11px]">
          <span className="hover:text-zinc-400 transition cursor-pointer">Licence No: BLD 291410</span>
          <span>•</span>
          <span className="hover:text-zinc-400 transition cursor-pointer">Terms & Security</span>
        </div>
      </div>
    </footer>
  );
}
