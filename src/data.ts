import { ServiceDetail, Project, Testimonial, TimelineEvent, ProcessPhase } from './types';

export const SERVICES: ServiceDetail[] = [
  {
    id: 'pools',
    title: 'Fully Tiled Pools',
    subtitle: 'Luxury Pool Construction & Professional Glass Mosaic Tiling',
    shortDescription: 'Bespoke fully tiled pools utilizing premium European glass mosaics, precision screeding, and bulletproof waterproofing systems.',
    fullDescription: 'At Adelaide Stone & Tile Construction, we transform backyards into breathtaking private resorts. Fully tiled pools represent the absolute pinnacle of luxury, visual beauty, and durability. Unlike plaster or vinyl liners, glass mosaics offer an enduring, shimmering color that never degrades under chemical exposure or UV light. We manage the entire scope: from precise concrete shell preparation, expert level screeding, and advanced dual-layer epoxy waterproofing, to artisan-level tiling and expanding silicone expansion joints.',
    heroImage: '/src/assets/images/astc_pool_tile_1781272776563.jpg',
    benefits: [
      'Artisan-level mosaic alignment with laser-guided tiling grids',
      'Advanced epoxy-base waterproofing with double elastomeric barrier layers',
      'Highly chemically resistant quartz premium finishes and low maintenance',
      'Bespoke stone coping integration (Travertine, Sandstone, granite surfaces)'
    ],
    processSteps: [
      { step: 1, title: 'Shell Preparation', description: 'Power washing and chemical cleaning of the concrete pool shell to ensure flawless bond.' },
      { step: 2, title: 'Precision Screeding', description: 'Applying engineered sand-and-cement screed with precise fall layout for absolute straight lines.' },
      { step: 3, title: 'Dual-Layer Waterproofing', description: 'Applying code-exceeding flexible rubberized membranes with reinforced high-pressure bond mesh.' },
      { step: 4, title: 'Hand-Aligned Mosaic Tiling', description: 'Custom tile installation using specialized high-polymer adhesive and stain-proof epoxy ground.' },
      { step: 5, title: 'Expansion & Sealing', description: 'Installing luxury polyurethane joint sealants to allow dynamic movement and prevent leaks.' }
    ],
    gallery: [
      '/src/assets/images/astc_hero_1781272742572.jpg',
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'stone',
    title: 'Stone Masonry',
    subtitle: 'Architectural Stone Cladding, Feature Walls & Natural Ashlar Work',
    shortDescription: 'Hand-crafted stone masonry featuring premium Australian sandstone, granite, and slate. Sourced and laid with perfect structural integrity.',
    fullDescription: 'Our hand-crafted stone work elevates standard structural walls, fireplaces, and garden facades into sculptural architectural masterpieces. Every single masonry element is hand-selected and carefully hand-dressed by qualified Adelaide stonemasons. We work hand-in-hand with luxury building designers to select the absolute best textures (whether Random Stone, Split Face, Dry Stack, or Ashlar) to emphasize natural Australian terrain.',
    heroImage: '/src/assets/images/astc_stone_1781272760014.jpg',
    benefits: [
      'Genuinely hand-chiseled and dressed quarry-direct premium stones',
      'Engineered structural backing with custom high-strength galvanized steel ties',
      'Specialist sealing systems that accentuate natural sandstone and slate veins',
      'Durable construction designed to endure thermal swing fluctuations for decades'
    ],
    processSteps: [
      { step: 1, title: 'Design Consult', description: 'Analyzing the architectural footprint and choosing stone layout style (sandstone, granite chips, dry-stack).' },
      { step: 2, title: 'Wall Structuring', description: 'Securing heavy structural brickwork or blockwork with moisture-barrier membranes and starter anchors.' },
      { step: 3, title: 'Stone Sourcing', description: 'Sourcing select blocks from high-grade Adelaide Hills or Flinders Ranges natural quarries.' },
      { step: 4, title: 'Expert Masonry Laying', description: 'Artisan hand-chopping, trial-placing, and anchoring each stone into its ultimate horizontal alignment.' },
      { step: 5, title: 'Jointing & Cleanup', description: 'Raking joints to desired depths (dry stack appearance versus flush grout) and deep-cleansing natural deposits.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'residential',
    title: 'Residential Tiling',
    subtitle: 'Luxury Bespoke Bathrooms, Marble Foyers, and Dynamic Living Floors',
    shortDescription: 'Flawless installation of large format tiles, porcelain slabs, and marble. Meticulous mitering and laser flatness guaranteed.',
    fullDescription: 'Indoor living spaces demand absolute perfection. At ASTC, our residential tiling is executed with standard-shattering accuracy. We specialise in luxury main floor tiling, geometric bathroom features, and floor-to-ceiling bookmarked porcelain slabs. By using leading-edge Italian leveling technology and opting for birdsmouth or 45-degree mitered stone corners over cheap metal trims, we ensure your internal assets flow visually.',
    heroImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
    benefits: [
      'Absolute zero-lippage guarantee across every floor and wall tile joint',
      'Intricate master bathroom detailing, bespoke shower recesses and niche mitre-cuts',
      'Unmatched experience with heavy marble, travertine, and modern quartz slabs',
      'Full compliance with Australian tile standards for screed falls and drainage'
    ],
    processSteps: [
      { step: 1, title: 'Surface Level Assessment', description: 'Scanning surfaces with high-precision line lasers and correcting any variation with self-leveling latex.' },
      { step: 2, title: 'Layout Engineering', description: 'Calculating tile grids mathematically from the visual threshold to avoid awkward sliver cuts.' },
      { step: 3, title: 'Laser Cutting', description: 'Utilising elite diamond wet saws to ensure glassy, chip-free custom border edges.' },
      { step: 4, title: 'Setting & Bonding', description: 'Full-coverage back-buttering methods ensuring zero hollow spots underneath high-impact floors.' },
      { step: 5, title: 'Sealing', description: 'Applying stain-proof polymer grouts and anti-fungal silicones color-matched to the tiles.' }
    ],
    gallery: [
      '/src/assets/images/luxury_marble_bathroom.png',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Tiling',
    subtitle: 'High-Traffic Showrooms, Multi-Res Buildings & Multi-Tier Retail Fitouts',
    shortDescription: 'High-spec corporate tiling executed on schedule, strictly complying with commercial load and slip ratings.',
    fullDescription: 'Commercial sites present strict engineering constraints, tight deadlines, and complex logistical pathways. Adelaide Stone & Tile Construction commands the staffing, heavy-duty equipment, and structural background to complete demanding commercial scopes. We design complete systems incorporating crack-suppression barriers, specialized expansion systems, acoustic sound insulation, and highly resilient epoxy grout joints.',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    benefits: [
      'Strict compliance with commercial slip resistance classifications (AS4586)',
      'High-durability grout structures that resist deep industrial floor washers',
      'Specialist subfloor expansion joints designed to flex under heavy material shifting',
      'Swift workforce allocation to meet strict commercial handover deadliness'
    ],
    processSteps: [
      { step: 1, title: 'Compliance Check', description: 'Reviewing structural specifications, slip requirements, acoustic ratings, and structural expansion targets.' },
      { step: 2, title: 'Subfloor Treatment', description: 'Removing residues, shot-blasting, and setting up heavy-gauge anti-fracture membranes.' },
      { step: 3, title: 'Laser Alignments', description: 'Setting precise control grids across expanses of open showrooms or hotel lobbies.' },
      { step: 4, title: 'Heavy duty Setting', description: 'Laying premium vitrified porcelain using heavy-bed high-flex adhesive lines.' },
      { step: 5, title: 'Validation', description: 'Conducting load-bearing adhesive pull tests and issuing engineering compliance certs.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'concrete',
    title: 'Concrete Works',
    subtitle: 'Architectural Floating Steps, Poured Coping, and Exposed Aggregate Surrounds',
    shortDescription: 'Engineered structural and decorative pours. Specializing in minimal grey concrete, pool steps, and custom pathways.',
    fullDescription: 'Highly-crafted stonework and tiles deserve a foundation that never moves. Our professional concrete division ensures that all external features are bolstered by heavy steel reinforcement and poured to correct thickness. We specialize in contemporary architectural features—of note are gorgeous cantilevered floating steps and bespoke pool copings.',
    heroImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop',
    benefits: [
      'Stunning floating steps with clean, seamless architectural margins',
      'Premium exposed aggregate combinations designed specifically for wet-pool anti-slip comfort',
      'Extremely dense engineered concrete formulations built to combat soil heave',
      'Perfect integrated drainage channels and custom matching control cuts'
    ],
    processSteps: [
      { step: 1, title: 'Excavation & Shutter', description: 'Digging to exact structural specifications and setting up thick custom plywood formwork boards.' },
      { step: 2, title: 'Steel Reinforcement', description: 'Assembling rigid structural steel reinforcement rebar blocks, suspended securely on chairs.' },
      { step: 3, title: 'Laser Level Pouring', description: 'Pouring high-MPa concrete mix directly from mixers, vibrated deep to eliminate inner hollow pockets.' },
      { step: 4, title: 'Architectural Finishing', description: 'Hand trowelling, acid wash treatment, or bead-blasting to reveal custom stone aggregates.' },
      { step: 5, title: 'Curing & Protection', description: 'Keeping concrete wet-cured under protective blankets and sealing with chemical barriers.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'landscaping',
    title: 'Outdoor Landscaping',
    subtitle: 'Premium Outdoor Kitchens, Fireplaces, Paved Terraces, and Retaining stone Works',
    shortDescription: 'Bespoke structural outdoor construction merging organic Adelaide sandstone with luxurious limestone alfrescos.',
    fullDescription: 'A luxury pool and stone masonry are best unified by a holistic landscape architecture design. We craft incredible outdoor living zones completed with natural stone flags, robust retaining structures, fully detailed sandstone firepits, and sleek modern outdoor culinary spaces.',
    heroImage: '/src/assets/images/astc_outdoor_dusk_1781272815184.jpg',
    benefits: [
      'Bespoke outdoor pizza-ovens, charcoal pits, and heavy stone entertainment slabs',
      'Flawlessly aligned travertine pathways that visually connect swimming pool borders',
      'Premium sandstone structural block retaining walls for sloping Adelaide backyards',
      'Underground copper-pipe landscape water management and hidden designer uplighting'
    ],
    processSteps: [
      { step: 1, title: 'Lifestyle consultation', description: 'Aligning paving choices, entertainment requirements (cooking, warmth, dining) with pool limits.' },
      { step: 2, title: 'Soil Engineering', description: 'Grading block levels, organizing underground storm-pipes and load-bearing soil compacted footings.' },
      { step: 3, title: 'Structural hardscaping', description: 'Installing major masonry components including outdoor fireplaces, retaining walls, and custom kitchen hubs.' },
      { step: 4, title: 'Premium stone paving', description: 'Laying sand-bedded large format stone pavers, fully pointed with specialized non-cracking mortars.' },
      { step: 5, title: 'Designer illumination', description: 'Pre-wiring warm low-voltage garden fixtures to cast elegant vertical highlights up natural stone walls.' }
    ],
    gallery: [
      '/src/assets/images/astc_outdoor_dusk_1781272815184.jpg'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj1',
    title: 'The Burnside Resort',
    category: 'pools',
    location: 'Burnside, Adelaide',
    description: 'A striking 12-meter residential swimming pool fully tiled with Spanish glass mosaic tiles. Includes a matching hand-faced sandstone feature waterfall wall and cantilevered floating basalt stepping stones.',
    image: '/src/assets/images/astc_hero_1781272742572.jpg',
    tag: 'FULLY TILED POOL & STONE',
    year: '2025'
  },
  {
    id: 'proj2',
    title: 'Stonyfell Ravine Facade',
    category: 'stone',
    location: 'Stonyfell, Adelaide Hills',
    description: 'Over 120 square meters of structural sandstone cladding using hand-dressed random ashlar stone. Sourced directly from local quarry beds to blend perfectly with the surrounding natural steep gorge.',
    image: '/src/assets/images/astc_stone_1781272760014.jpg',
    tag: 'STONE MASONRY',
    year: '2024'
  },
  {
    id: 'proj3',
    title: 'North Adelaide Luxury Ensuite',
    category: 'residential',
    location: 'North Adelaide',
    description: 'A sublime structural master bathroom using floor-to-ceiling bookmatched Calacatta marble slabs. Features exact 45-degree mitered stone niche detailing, walk-in shower trays with integrated linear floor drains.',
    image: '/src/assets/images/luxury_marble_bathroom.png',
    tag: 'RESIDENTIAL TILING',
    year: '2025'
  },
  {
    id: 'proj4',
    title: 'Medindie Alfresco & Pool Suite',
    category: 'pools',
    location: 'Medindie, Adelaide',
    description: 'A modern fully tiled sapphire glass pool seamlessly integrated with premium silver travertine drop-face coping, expanding into a magnificent luxury outdoor fireplace and kitchen pavilion.',
    image: '/src/assets/images/astc_pool_tile_1781272776563.jpg',
    tag: 'LUXURY POOL & OUTDOOR',
    year: '2025'
  },
  {
    id: 'proj5',
    title: 'King William Street Lobby',
    category: 'commercial',
    location: 'Adelaide CBD',
    description: 'An expansive corporate reception floor tiled with high-durability 1200x1200mm slate grey porcelain tiles. Features acoustic compression joins and zero tolerance level compliance for supreme accessibility.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    tag: 'COMMERCIAL TILING',
    year: '2024'
  },
  {
    id: 'proj6',
    title: 'Springfield Floating Concrete Steps',
    category: 'concrete',
    location: 'Springfield, Adelaide',
    description: 'Stunning cantilevered structural concrete stairs with raw charcoal polished surfaces. Set against an ancient dry-stone wall to establish a modern minimal transition from lawns to pool terrace.',
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=800&auto=format&fit=crop',
    tag: 'ARCHITECTURAL CONCRETE',
    year: '2025'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test1',
    author: 'Eleanor Vance',
    role: 'Homeowner',
    location: 'Burnside',
    quote: "Adelaide Stone & Tile Construction built our dream fully tiled pool and sandstone boundary walls. The craftsmanship is breathtaking—it genuinely feels like an absolute architectural sanctuary. Their stonemasons are true artists."
  },
  {
    id: 'test2',
    author: 'Marcus Wright',
    role: 'Director, Wright Architectural Homes',
    location: 'North Adelaide',
    quote: "As high-end custom home builders, we demand absolute perfection in tiling and stone cladding. ASTC is the ONLY contractor we trust in Adelaide to deliver level joints, complex mitering, and structural integrity that lasts. Flawless on every project."
  },
  {
    id: 'test3',
    author: 'David & Sarah Jenkins',
    role: 'Estate Owners',
    location: 'Stonyfell',
    quote: "The random ashlar feature stone wall ASTC created for our entryway is a magnificent sculpture that greets us daily. From first consultation through block sourcing to final placement, they were professional, ultra-detailed, and deeply respect premium craftsmanship."
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '2012',
    title: 'Foundation of Craftsmanship',
    description: 'ASTC was founded with a singular mission: to restore true architectural masonry and premium tiling back to Adelaide constructions, stepping away from cheap prefab trends.'
  },
  {
    year: '2016',
    title: 'Pioneering Fully Tiled Pools',
    description: 'Recognized as premier specialists in extreme-grade pool waterproofing systems and glass mosaic pool finishes, partnering with custom pool engineering groups across South Australia.'
  },
  {
    year: '2020',
    title: 'About the Stone Expansion',
    description: 'Integrating dedicated stone sourcing partnerships directly with elite Australian quarry mines, expanding our scope to historic heritage restorations and massive ashlar wall installations.'
  },
  {
    year: '2024',
    title: 'Architectural Design Awards',
    description: 'Awarded elite honors by standard construction societies for three custom architectural homes in Springfield, Burnside and Stonyfell, celebrating our focus on high-fidelity outdoor living.'
  },
  {
    year: '2026',
    title: 'Adelaide’s Benchmark',
    description: 'Now employing a leading division of Master Stonemasons, Architectural Concrete pourers, and certified Swiss-membrane waterproofers establishing Adelaide’s highest standard.'
  }
];

export const PROCESS_PHASES: ProcessPhase[] = [
  {
    number: '01',
    title: 'Consultation & Site Review',
    description: 'Understanding your architectural blueprints, design inspirations, and landscape limits.',
    details: [
      'In-person site scanning and visual line laser check',
      'Material advising from natural stone samples to custom glass mosaics',
      'Determining specific compliance, slip-ratings, and structural reinforcement demands'
    ]
  },
  {
    number: '02',
    title: 'Planning & Layout Engineering',
    description: 'Calculating structural loads, joints, water runs, and grid alignments before turning soil.',
    details: [
      'Preparing high-definition joint layouts to prevent narrow tile cuts',
      'Engineered formwork design and concrete reinforcement mesh layout planning',
      'Determining drainage slopes (Copings and surrounding paving grades)'
    ]
  },
  {
    number: '03',
    title: 'Honest Comprehensive Quote',
    description: 'An itemized, legally binding cost framework with transparent labor and material variables.',
    details: [
      'Zero hidden allowances—all epoxy grouts, membranes, and stone sealers specified up front',
      'Detailed staging schedule coordinating seamlessly with builder handover milestones',
      'Full insurance, warranty, and material certification transparency'
    ]
  },
  {
    number: '04',
    title: 'Master-Class Construction',
    description: 'Qualified trade specialists and masons deploying with absolute precision on-site.',
    details: [
      'Daily site manager updates on substrate cures and alignment progress',
      'Thorough Swiss-standard double-waterproofing testing with 72-hour wet tests',
      'Hand-dressed stonemasonry and zero-lippage tiling alignments backed by laser-guided grids'
    ]
  },
  {
    number: '05',
    title: 'Flawless Finish & Handover',
    description: 'Deep mechanical cleaning, sealing natural surfaces, and technical signoffs.',
    details: [
      'Premium chemical aggregate wash to lift stubborn grout residue without pitting stone face',
      'Applying custom deep-penetrating water-repellant sealers (Sandstone, Travertine, slate)',
      'Submitting complete maintenance manuals, structural warranty tokens, and certificates'
    ]
  }
];
