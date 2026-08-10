/**
 * Per-location content.
 *
 * WHY THIS FILE EXISTS
 * The six location pages used to be templates: a byte-identical 12-item
 * service array, an identical "Why Choose Us" block and an identical CTA, with
 * only the town name swapped. Google calls that a doorway page -- "multiple
 * pages generated for the purpose of funneling visitors, with content that's
 * substantially similar" -- and it is a ranking liability, not just duplicated
 * code. Componentising the markup alone would have made the duplication tidier
 * without making it safer.
 *
 * So every entry below carries content that is genuinely specific to that
 * place: real local geography, the actual housing stock, the industries that
 * drive electrical demand there, and a service list ordered for what that
 * community actually needs. If you add a location, write real local detail --
 * do not copy another entry and swap the name, or the problem comes back.
 *
 * `featuredWork` is DELIBERATELY a placeholder on every entry. Real completed
 * jobs are the strongest possible local content, but they have to come from
 * the owner -- inventing them would be putting false claims on a real
 * business's website. Replace each one and set `pending: false`.
 */

const ALL_SERVICES = {
  residentialRepair: 'Residential electrical repair',
  panelUpgrade: 'Electrical panel & service upgrades',
  rewiring: 'Whole-house rewiring',
  knobAndTube: 'Knob-and-tube & aluminium wiring replacement',
  outlets: 'Outlet, switch & GFCI installation',
  lighting: 'Interior & exterior lighting',
  ceilingFans: 'Ceiling fan installation',
  commercial: 'Commercial electrical service',
  threePhase: 'Three-phase power installation',
  parkingLot: 'Parking lot & security lighting',
  codeCompliance: 'Code compliance & inspections',
  agricultural: 'Farm & agricultural electrical',
  grainSystems: 'Grain system & bin wiring',
  livestock: 'Livestock building electrical',
  acreage: 'Acreage & outbuilding service',
  generator: 'Generac standby generator installation',
  emergency: '24/7 emergency electrical repair',
  troubleshooting: 'Electrical troubleshooting',
  security: 'Security camera & low-voltage',
  evCharger: 'EV charger installation',
}

const s = (...keys) => keys.map((k) => ALL_SERVICES[k])

export const locations = [
  {
    slug: 'storm-lake',
    name: 'Storm Lake',
    type: 'city',
    county: 'Buena Vista County',
    lat: '42.6411',
    lng: '-95.2094',
    title: 'Electrician Storm Lake IA | 24/7 Electrical Repair & Service | Cruz Electric',
    description:
      'Licensed electrician in Storm Lake IA. Fast electrical repair, service & new installations. Residential, commercial & generator experts. Call (712) 299-7004 for same-day service.',
    keywords:
      'electrician Storm Lake IA, electrical repair Storm Lake, emergency electrician Storm Lake, generator installation Storm Lake, commercial electrician Storm Lake, licensed electrician Storm Lake Iowa',
    intro:
      'Storm Lake is the largest community we serve and the most varied. A lakeside town with a working industrial base means one call can be a hundred-year-old cottage on the north shore and the next a three-phase service for a business on Lake Avenue. We handle both.',
    localNotes: [
      {
        heading: 'Older lakeside housing stock',
        body: 'Much of the housing ringing the lake predates modern electrical demand. Undersized services, ungrounded two-prong outlets and crowded panels are common, and they surface fast when a family adds air conditioning, a hot tub or an EV charger. Panel and service upgrades are our most frequent Storm Lake call.',
      },
      {
        heading: 'A working commercial and industrial base',
        body: 'Storm Lake is a Buena Vista County employment hub with food processing, retail along Lake Avenue and Highway 71, and the traffic that comes with Buena Vista University. That means three-phase power, commercial panel work, parking lot lighting and code compliance on a schedule that cannot interrupt a business day.',
      },
      {
        heading: 'Rental and multi-family properties',
        body: 'A large share of Storm Lake housing is rented. We work with landlords on inspections, code compliance and turnover repairs, and we are used to scheduling around tenants.',
      },
    ],
    nearbyTowns: ['Alta', 'Truesdale', 'Lakeside', 'Newell', 'Sioux Rapids'],
    services: s(
      'panelUpgrade',
      'residentialRepair',
      'commercial',
      'threePhase',
      'parkingLot',
      'rewiring',
      'outlets',
      'lighting',
      'generator',
      'emergency',
      'codeCompliance',
      'evCharger'
    ),
    featuredWork: {
      pending: true,
      text: 'Add a real Storm Lake job here — what it was, what made it tricky, and roughly when. One specific, true story outranks any amount of generic copy.',
    },
  },

  {
    slug: 'cherokee',
    name: 'Cherokee',
    type: 'city',
    county: 'Cherokee County',
    lat: '42.7497',
    lng: '-95.5517',
    title: 'Electrician Cherokee IA | Licensed Electrical Contractor | Cruz Electric',
    description:
      'Top-rated electrician in Cherokee IA. Expert electrical repair, installation & service. Residential, commercial & agricultural. Licensed & insured. Call (712) 299-7004.',
    keywords:
      'electrician Cherokee IA, electrical repair Cherokee, emergency electrician Cherokee, knob and tube rewiring Cherokee, generator installation Cherokee, Cherokee County electrician',
    intro:
      'Cruz Electric started in Cherokee in 2020, so this is home. Cherokee sits along the Little Sioux River with a historic downtown and a lot of genuinely old housing — which makes it the town where we do the most rewiring and the most careful work inside finished walls.',
    localNotes: [
      {
        heading: 'Historic homes, historic wiring',
        body: 'Cherokee has a large stock of late-19th and early-20th century houses. Behind the plaster you still find knob-and-tube, ungrounded circuits and mid-century aluminium branch wiring — all of which insurers increasingly refuse to cover. We rewire these homes with as little damage to original trim and plaster as the job allows.',
      },
      {
        heading: 'Downtown commercial buildings',
        body: 'The older brick buildings along the downtown blocks were wired for a different century of tenants. Converting one to a new use usually means a new service, a new panel and bringing the whole building to current code before an occupancy inspection.',
      },
      {
        heading: 'River-valley outages',
        body: 'Storms coming up the Little Sioux valley take power out here, and older neighbourhoods can be slow to come back. Standby generators are a common Cherokee request, and we are certified Generac installers.',
      },
    ],
    nearbyTowns: ['Aurelia', 'Marcus', 'Cleghorn', 'Meriden', 'Quimby', 'Washta'],
    services: s(
      'rewiring',
      'knobAndTube',
      'panelUpgrade',
      'residentialRepair',
      'generator',
      'commercial',
      'codeCompliance',
      'outlets',
      'lighting',
      'troubleshooting',
      'emergency',
      'security'
    ),
    featuredWork: {
      pending: true,
      text: 'Add a real Cherokee job — an older-home rewire or a downtown building conversion would be ideal, since that is what people here search for.',
    },
  },

  {
    slug: 'aurelia',
    name: 'Aurelia',
    type: 'city',
    county: 'Cherokee County',
    lat: '42.7108',
    lng: '-95.4358',
    title: 'Electrician Aurelia IA | Local Electrical Repair & Service | Cruz Electric',
    description:
      'Licensed electrician serving Aurelia IA. Residential, farm & commercial electrical repair and installation. Fast, reliable local service. Call (712) 299-7004.',
    keywords:
      'electrician Aurelia IA, electrical repair Aurelia, farm electrician Aurelia Iowa, generator installation Aurelia, acreage electrician Cherokee County',
    intro:
      'Aurelia is a small Cherokee County town surrounded by working farmland, and the electrical work reflects that mix: town houses on one side of the job list, machine sheds and grain setups on the other. Being ten minutes from Cherokee means we get here quickly.',
    localNotes: [
      {
        heading: 'Town homes and acreages together',
        body: 'A single day in Aurelia often covers a service call in town and an outbuilding feed on an acreage outside it. We carry what both need rather than making a second trip.',
      },
      {
        heading: 'Farmstead electrical',
        body: 'The farms around Aurelia run grain handling, shop equipment and livestock buildings — loads that punish undersized or aging services. Farmstead service upgrades and new feeds to shops and sheds are steady work here.',
      },
      {
        heading: 'Rural power reliability',
        body: 'Outages last longer at the end of a rural line than they do in town. For homes with wells, sump pumps or livestock depending on power, a standby generator is not a luxury.',
      },
    ],
    nearbyTowns: ['Cherokee', 'Alta', 'Marcus', 'Larrabee', 'Storm Lake'],
    services: s(
      'residentialRepair',
      'agricultural',
      'acreage',
      'panelUpgrade',
      'generator',
      'grainSystems',
      'outlets',
      'lighting',
      'troubleshooting',
      'emergency',
      'security',
      'codeCompliance'
    ),
    featuredWork: {
      pending: true,
      text: 'Add a real Aurelia job — a farmstead service upgrade or an outbuilding feed would fit what people here are searching for.',
    },
  },

  {
    slug: 'larrabee',
    name: 'Larrabee',
    type: 'city',
    county: 'Cherokee County',
    lat: '42.8622',
    lng: '-95.5450',
    title: 'Electrician Larrabee IA | Farm & Home Electrical | Cruz Electric',
    description:
      'Trusted electrician serving Larrabee IA and the surrounding farms. Acreage, outbuilding and home electrical work. Licensed & insured. Call (712) 299-7004.',
    keywords:
      'electrician Larrabee IA, farm electrician Larrabee, acreage electrical Cherokee County, generator installation Larrabee Iowa, outbuilding wiring Larrabee',
    intro:
      'Larrabee is one of the smallest communities we serve, and almost all of the electrical work here is rural. Small towns often get told they are too far out of the way for a callout — that has never been how we work. Larrabee is on our regular route.',
    localNotes: [
      {
        heading: 'Mostly farm and acreage work',
        body: 'With only a small number of homes in the village itself, most Larrabee calls are farmsteads: shop feeds, machine sheds, grain equipment, yard lighting and services that were sized for far less equipment than they now run.',
      },
      {
        heading: 'Long rural service runs',
        body: 'Feeding a shed or a second building across a farmyard means calculating voltage drop properly and burying conduit to depth. Undersized long runs are a common thing we are called out to correct.',
      },
      {
        heading: 'No job too small to drive to',
        body: 'A single failed yard light or a tripping circuit is still worth a trip. We would rather keep a small community supplied than only show up for large jobs.',
      },
    ],
    nearbyTowns: ['Cherokee', 'Marcus', 'Meriden', 'Aurelia', 'Cleghorn'],
    services: s(
      'agricultural',
      'acreage',
      'grainSystems',
      'livestock',
      'panelUpgrade',
      'generator',
      'residentialRepair',
      'lighting',
      'troubleshooting',
      'outlets',
      'emergency',
      'codeCompliance'
    ),
    featuredWork: {
      pending: true,
      text: 'Add a real Larrabee-area job — a long outbuilding run or a farmstead service upgrade would be the most representative.',
    },
  },

  {
    slug: 'buena-vista-county',
    name: 'Buena Vista County',
    type: 'county',
    county: 'Buena Vista County',
    lat: '42.7357',
    lng: '-95.1511',
    title: 'Electrician Buena Vista County IA | Licensed Electrical Contractor | Cruz Electric',
    description:
      'Electrician serving all of Buena Vista County IA — Storm Lake, Alta, Newell, Sioux Rapids, Albert City and more. Farm, home & commercial electrical. Call (712) 299-7004.',
    keywords:
      'electrician Buena Vista County IA, electrical contractor Buena Vista County, electrician Alta IA, electrician Newell IA, electrician Sioux Rapids, farm electrician Buena Vista County',
    intro:
      'Buena Vista County runs from Storm Lake out across some of the most productive farmland in Iowa, and we cover all of it. The work changes with the map: commercial and residential concentrated around Storm Lake, and almost entirely agricultural once you are past the county roads.',
    localNotes: [
      {
        heading: 'One county, two kinds of work',
        body: 'Storm Lake brings commercial service, three-phase power and dense older housing. The rest of the county brings grain systems, livestock buildings, irrigation and farmstead services. We are set up for both rather than specialising in one.',
      },
      {
        heading: 'Heavy agricultural load',
        body: 'Grain drying and handling are among the most demanding electrical loads on any farm, and they run hardest exactly when you cannot afford a failure. We size services for the equipment actually installed, not the equipment that was there when the yard was first wired.',
      },
      {
        heading: 'Wind country',
        body: 'Buena Vista County has been a wind-energy county for years. It has made people here more comfortable than most with generation, backup and load planning — conversations we are glad to have in detail.',
      },
    ],
    nearbyTowns: ['Storm Lake', 'Alta', 'Newell', 'Sioux Rapids', 'Albert City', 'Marathon', 'Linn Grove', 'Rembrandt', 'Truesdale'],
    services: s(
      'agricultural',
      'grainSystems',
      'livestock',
      'panelUpgrade',
      'commercial',
      'threePhase',
      'generator',
      'acreage',
      'residentialRepair',
      'emergency',
      'codeCompliance',
      'parkingLot'
    ),
    featuredWork: {
      pending: true,
      text: 'Add a real job from somewhere in the county that is NOT Storm Lake — Alta, Newell or Sioux Rapids — so this page does not simply echo the Storm Lake one.',
    },
  },

  {
    slug: 'cherokee-county',
    name: 'Cherokee County',
    type: 'county',
    county: 'Cherokee County',
    lat: '42.7333',
    lng: '-95.6222',
    title: 'Electrician Cherokee County IA | Licensed Electrical Contractor | Cruz Electric',
    description:
      'Electrician serving all of Cherokee County IA — Cherokee, Aurelia, Marcus, Quimby, Washta, Larrabee and Cleghorn. Farm, home & commercial electrical. Call (712) 299-7004.',
    keywords:
      'electrician Cherokee County IA, electrical contractor Cherokee County, electrician Marcus IA, electrician Quimby IA, electrician Washta, farm electrician Cherokee County Iowa',
    intro:
      'Cherokee County is where Cruz Electric began, and we cover every town in it. The county is a patchwork of small communities with genuinely old housing stock, connected by farmland — which makes rewiring and farmstead work the two things we do most here.',
    localNotes: [
      {
        heading: 'Old houses in every town',
        body: 'Cherokee, Marcus, Quimby, Washta and the rest all have housing built well before modern electrical demand. Knob-and-tube, ungrounded circuits and undersized services turn up across the whole county, not just in the county seat.',
      },
      {
        heading: 'Small towns that get skipped',
        body: 'Contractors based further away often will not drive to Quimby or Washta for a single call. We are based in the county, so the smaller communities get the same response as the larger ones.',
      },
      {
        heading: 'Farm work between the towns',
        body: 'Between the towns it is grain, livestock and machine sheds. Farmstead service upgrades, outbuilding feeds and standby generators make up most of our rural Cherokee County work.',
      },
    ],
    nearbyTowns: ['Cherokee', 'Aurelia', 'Marcus', 'Larrabee', 'Quimby', 'Washta', 'Cleghorn', 'Meriden'],
    services: s(
      'rewiring',
      'knobAndTube',
      'panelUpgrade',
      'agricultural',
      'acreage',
      'grainSystems',
      'generator',
      'residentialRepair',
      'commercial',
      'troubleshooting',
      'emergency',
      'security'
    ),
    featuredWork: {
      pending: true,
      text: 'Add a real job from a smaller Cherokee County town — Marcus, Quimby or Washta — rather than Cherokee itself, so this page stands apart from the Cherokee city page.',
    },
  },
]

export const getLocation = (slug) => locations.find((l) => l.slug === slug)
export const locationSlugs = () => locations.map((l) => l.slug)
