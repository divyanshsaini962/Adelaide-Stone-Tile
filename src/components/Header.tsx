import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Page, ServiceId } from '../types';

interface HeaderProps {
  currentPage: Page;
  currentService: ServiceId | null;
  onNavigate: (page: Page, serviceId?: ServiceId | null) => void;
}

export default function Header({ currentPage, currentService, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', page: 'home' as Page },
    { label: 'Services', page: 'services' as Page },
    { label: 'Featured Projects', page: 'projects' as Page },
    { label: 'About', page: 'about' as Page },
    { label: 'Contact', page: 'contact' as Page },
  ];

  const handleNavItemClick = (page: Page) => {
    onNavigate(page, null);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isCurrentActive = (pageName: Page) => {
    return currentPage === pageName && currentService === null;
  };

  return (
    <>
      {/* Top micro bar for direct contact */}
      <div id="header-topbar" className="w-full bg-charcoal text-warmwhite text-[11px] py-2 px-4 md:px-8 flex justify-between items-center border-b border-charcoal/10 font-sans tracking-widest z-50 relative">
        <div className="flex items-center gap-6">
          <a href="tel:+61418835806" className="flex items-center gap-1.5 hover:text-sandstone transition duration-300">
            <Phone size={11} className="text-sandstone" />
            <span>+61 418 835 806</span>
          </a>
          <span className="hidden sm:inline-flex items-center gap-1.5">
            <MapPin size={11} className="text-sandstone" />
            <span>Adelaide, SA</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:cspisso07@gmail.com" className="flex items-center gap-1.5 hover:text-sandstone transition duration-300">
            <Mail size={11} className="text-sandstone" />
            <span>cspisso07@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Main Premium Floating Header */}
      <header
        id="main-header"
        className={`sticky top-0 w-full z-40 transition-all duration-300 ease-in-out ${
          isScrolled 
            ? 'bg-warmwhite/95 backdrop-blur-md shadow-lg border-b border-sandstone/20 py-3' 
            : 'bg-warmwhite/80 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo Brand Frame */}
          <div 
            id="logo-brand" 
            className="cursor-pointer flex flex-col group"
            onClick={() => handleNavItemClick('home')}
          >
            <span className="font-display font-bold text-xl md:text-2xl text-charcoal tracking-wider leading-none transition-colors duration-300 group-hover:text-bronze">
              ASTC
            </span>
            <span className="font-sans text-[9px] md:text-[10px] text-bronze tracking-[0.25em] font-semibold mt-1 uppercase leading-none">
              Adelaide Stone & Tile
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavItemClick(item.page)}
                className={`font-sans text-xs tracking-widest uppercase py-2 cursor-pointer transition-all duration-300 relative group ${
                  isCurrentActive(item.page) 
                    ? 'text-bronze font-semibold' 
                    : 'text-charcoal hover:text-bronze'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-bronze transition-transform duration-300 origin-left ${
                  isCurrentActive(item.page) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div id="desktop-cta" className="hidden md:block">
            <button
              onClick={() => handleNavItemClick('contact')}
              className="bg-charcoal text-warmwhite text-xs font-sans font-semibold tracking-widest uppercase px-5 py-2.5 border border-charcoal hover:bg-transparent hover:text-charcoal transition-all duration-500 rounded-none shadow-sm cursor-pointer"
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile Menu Action */}
          <div id="mobile-menu-trigger" className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal focus:outline-none p-1 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div id="mobile-nav-drawer" className="md:hidden absolute top-full left-0 w-full bg-warmwhite border-b border-sandstone/30 shadow-xl overflow-hidden animate-fade-in">
            <div className="px-6 py-6 flex flex-col gap-4 bg-warmwhite">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavItemClick(item.page)}
                  className={`text-left font-sans text-sm tracking-widest uppercase py-3 border-b border-sandstone/10 cursor-pointer ${
                    currentPage === item.page && currentService === null
                      ? 'text-bronze font-bold pl-2 border-l-2 border-l-bronze'
                      : 'text-charcoal'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <button
                  onClick={() => handleNavItemClick('contact')}
                  className="w-full text-center bg-charcoal text-warmwhite text-xs font-sans font-semibold tracking-widest uppercase py-3 border border-charcoal hover:bg-transparent hover:text-charcoal transition-all duration-300"
                >
                  Request A Quote
                </button>
                <div className="flex flex-col items-center gap-2 text-xs text-charcoal/60 pt-4">
                  <span>Direct Line: +61 418 835 806</span>
                  <span>Email: cspisso07@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
