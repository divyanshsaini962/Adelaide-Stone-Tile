/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Page, ServiceId } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentServiceId, setCurrentServiceId] = useState<ServiceId | null>(null);

  // Trigger smooth scroll resetting on page router mutations
  const handleNavigation = (page: Page, serviceId: ServiceId | null = null) => {
    setCurrentPage(page);
    setCurrentServiceId(serviceId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Check URL hashes for instant deep-linking in previews
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#/', '');
      if (!hash) return;
      
      const parts = hash.split('/');
      const pageToGoto = parts[0] as Page;
      const subservice = parts[1] as ServiceId;
      
      const validPages: Page[] = ['home', 'about', 'projects', 'services', 'contact'];
      if (validPages.includes(pageToGoto)) {
        setCurrentPage(pageToGoto);
        if (subservice) {
          setCurrentServiceId(subservice);
        } else {
          setCurrentServiceId(null);
        }
      }
    };

    window.addEventListener('hashchange', handleHash);
    handleHash(); // trigger once on start
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Update hash when state changes to permit deep saving
  useEffect(() => {
    const serviceSuffix = currentServiceId ? `/${currentServiceId}` : '';
    window.history.pushState(null, '', `#/${currentPage}${serviceSuffix}`);
  }, [currentPage, currentServiceId]);

  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigation} />;
      case 'about':
        return <About onNavigate={handleNavigation} />;
      case 'projects':
        return <Projects onNavigate={handleNavigation} />;
      case 'services':
        return (
          <Services 
            currentPage={currentPage}
            currentServiceId={currentServiceId}
            onNavigate={handleNavigation}
          />
        );
      case 'contact':
        return <Contact onNavigate={handleNavigation} />;
      default:
        return <Home onNavigate={handleNavigation} />;
    }
  };

  return (
    <div id="astc-root" className="min-h-screen flex flex-col justify-between bg-warmwhite text-charcoal font-sans antialiased text-sm">
      {/* Premium Contact Shortcuts Bar & Dynamic Sticky Header */}
      <Header 
        currentPage={currentPage} 
        currentService={currentServiceId}
        onNavigate={handleNavigation} 
      />

      {/* Main Page Stage Grid Wrapper */}
      <main id="app-main-stage" className="flex-grow">
        <AnimatePresence mode="wait">
          {renderPageContent()}
        </AnimatePresence>
      </main>

      {/* Fully SEO-Annotated Architectural Footer */}
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}
