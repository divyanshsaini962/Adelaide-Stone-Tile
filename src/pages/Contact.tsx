import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, HelpCircle, CheckCircle2, ShieldAlert, Sparkles, Building2 } from 'lucide-react';
import InteractiveMap from '../components/InteractiveMap';
import { Page, ServiceId } from '../types';

interface ContactProps {
  onNavigate: (page: Page, serviceId?: ServiceId | null) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'pools',
    suburb: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate premium API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div id="contact-office" className="bg-warmwhite min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Page Titles */}
        <div className="text-left mb-16 max-w-2xl">
          <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-bronze font-bold mb-3 block">
            Partner With ASTC
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-charcoal mb-4">
            Request Consultation <br />
            <span className="text-bronze italic font-normal text-3xl md:text-5xl">& Project Estimate</span>
          </h1>
          <p className="font-sans text-xs md:text-sm text-zinc-600 leading-relaxed">
            Have architectural plans, tile elevations, or a landscape model to share? Reach our Adelaide Estimating desk directly. We analyze blueprints and detail complete structural packages.
          </p>
        </div>

        {/* Major Split-Screen Grid Module */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">
          
          {/* Left Panel: Direct Lines, Details, and Map Locator */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 h-full">
            
            {/* Rapid Correspondence Card */}
            <div className="bg-white border border-sandstone/15 p-6 md:p-8 shadow-md flex flex-col gap-6">
              <h3 className="font-display text-xl font-bold text-charcoal border-b border-sandstone/15 pb-3">
                Official Channels
              </h3>
              
              <div className="flex flex-col gap-5">
                <a 
                  href="tel:+61418835806" 
                  className="flex items-start gap-4 hover:bg-zinc-50 p-2 -m-2 rounded transition group"
                >
                  <div className="p-3 bg-warmwhite text-bronze border border-sandstone/25 shrink-0 group-hover:scale-105 transition">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 font-sans tracking-wider uppercase block">Immediate Callback</span>
                    <span className="text-sm font-semibold text-charcoal">+61 418 835 806</span>
                  </div>
                </a>

                <a 
                  href="mailto:cspisso07@gmail.com" 
                  className="flex items-start gap-4 hover:bg-zinc-50 p-2 -m-2 rounded transition group"
                >
                  <div className="p-3 bg-warmwhite text-bronze border border-sandstone/25 shrink-0 group-hover:scale-105 transition">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 font-sans tracking-wider uppercase block">Estimating Department</span>
                    <span className="text-sm font-semibold text-charcoal">cspisso07@gmail.com</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-2 -m-2">
                  <div className="p-3 bg-warmwhite text-bronze border border-sandstone/25 shrink-0">
                    <Building2 size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 font-sans tracking-wider uppercase block">Headquarters Scope</span>
                    <span className="text-xs text-zinc-600 leading-relaxed block">Adelaide Metro, South Australia</span>
                    <span className="text-[10px] text-zinc-500 font-medium tracking-wide">Licence No: BLD 291410</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Suburbs Map */}
            <div className="grow">
              <InteractiveMap />
            </div>
          </div>

          {/* Right Panel: High-End Estimator Questionnaire Form */}
          <div className="lg:col-span-7 bg-white border border-sandstone/20 shadow-xl p-8 md:p-12 relative flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!success ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  <div>
                    <span className="font-sans text-[11px] tracking-widest uppercase font-extrabold text-bronze block mb-1">Brief Questionnaire</span>
                    <h3 className="font-display text-2xl font-bold text-charcoal">Estimating Portal</h3>
                    <p className="font-sans text-xs text-zinc-500 leading-relaxed mt-1">Please provide initial structural outlines for your proposed project.</p>
                  </div>

                  {/* Standard Form Inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name-input" className="font-sans text-[10px] tracking-wider uppercase text-zinc-500 font-bold">Your Name *</label>
                      <input 
                        type="text" 
                        id="name-input"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. David Jenkins" 
                        required
                        className="w-full bg-warmwhite border border-sandstone/25 px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-bronze transition-colors rounded-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email-input" className="font-sans text-[10px] tracking-wider uppercase text-zinc-500 font-bold">Email Address *</label>
                      <input 
                        type="email" 
                        id="email-input"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. client@architect.com" 
                        required
                        className="w-full bg-warmwhite border border-sandstone/25 px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-bronze transition-colors rounded-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone-input" className="font-sans text-[10px] tracking-wider uppercase text-zinc-500 font-bold">Contact Number *</label>
                      <input 
                        type="tel" 
                        id="phone-input"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +61 418 835 806" 
                        required
                        className="w-full bg-warmwhite border border-sandstone/25 px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-bronze transition-colors rounded-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="service-select" className="font-sans text-[10px] tracking-wider uppercase text-zinc-500 font-bold">Core Trade Category</label>
                      <select 
                        id="service-select"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-warmwhite border border-sandstone/25 px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-bronze transition-colors rounded-none cursor-pointer"
                      >
                        <option value="pools">Fully Tiled Blue Pool</option>
                        <option value="stone">Fine Natural Stone masonry</option>
                        <option value="residential">Luxury Residential Tiles</option>
                        <option value="commercial">Commercial Institutional Tiles</option>
                        <option value="concrete">Polished Concrete & agg paving</option>
                        <option value="landscaping">Complete hardscape & alfresco</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="suburb-input" className="font-sans text-[10px] tracking-wider uppercase text-zinc-500 font-bold">Project Site Suburb (Adelaide SA)</label>
                    <input 
                      type="text" 
                      id="suburb-input"
                      name="suburb"
                      value={formData.suburb}
                      onChange={handleInputChange}
                      placeholder="e.g. Medindie, Burnside, Springfield" 
                      className="w-full bg-warmwhite border border-sandstone/25 px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-bronze transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message-textarea" className="font-sans text-[10px] tracking-wider uppercase text-zinc-500 font-bold">Outline of Project Scope / Architect requirements *</label>
                    <textarea 
                      id="message-textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Please outline dimensional specs, estimated site start dates, or material selections if known..."
                      required
                      className="w-full bg-warmwhite border border-sandstone/25 px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-bronze transition-colors rounded-none resize-none"
                    />
                  </div>

                  {/* Submission triggers */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-charcoal hover:bg-bronze text-warmwhite hover:text-charcoal text-xs font-sans font-bold tracking-widest uppercase py-4 border border-charcoal hover:border-bronze transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-warmwhite" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Verifying blueprints...
                        </>
                      ) : (
                        <>
                          Submit Consultation Request <Send size={12} className="ml-1" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-8 flex flex-col items-center gap-6"
                >
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/35 text-emerald-600 rounded-full animate-bounce">
                    <CheckCircle2 size={36} />
                  </div>
                  
                  <div>
                    <h3 className="font-display text-3xl font-bold text-charcoal">Design Intent Received</h3>
                    <p className="font-sans text-xs text-zinc-500 mt-2 font-medium">Thank you for submitting your project specifications.</p>
                  </div>

                  <div className="bg-warmwhite border border-sandstone/15 p-6 max-w-md text-left text-zinc-700 text-xs leading-relaxed flex flex-col gap-3">
                    <div className="flex items-start gap-1.5 font-sans font-bold uppercase text-[9px] tracking-wider text-bronze">
                      <Sparkles size={11} className="mt-0.5" /> ASTC Blueprints Protocol
                    </div>
                    <span>
                      Our commercial operations manager is reviewing your suburb coordinates (<b>{formData.suburb || 'Adelaide Metro'}</b>) alongside the trade selection (<b>{formData.service.toUpperCase()}</b>). 
                    </span>
                    <span>
                      We will reach out to <b>{formData.email}</b> or call <b>{formData.phone}</b> within <b>24 business hours</b> to coordinate a site visit or detailed blueprint markup.
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setSuccess(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'pools',
                        suburb: '',
                        message: ''
                      });
                    }}
                    className="font-sans text-[10px] tracking-widest text-bronze border-b border-bronze hover:text-charcoal hover:border-charcoal transition-colors uppercase font-bold mt-4 cursor-pointer"
                  >
                    Submit another enquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </div>
  );
}
