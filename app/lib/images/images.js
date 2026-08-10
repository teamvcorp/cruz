import comm1 from "@/public/images/comm1.jpg";
import comm2 from "@/public/images/comm2.jpg";
import comm3 from "@/public/images/comm3.jpg";
import comm4 from "@/public/images/comm4.jpg";
import comm5 from "@/public/images/comm5.jpg";
import comm6 from "@/public/images/comm6.jpg";
import comm7 from "@/public/images/comm7.jpg";
import comm8 from "@/public/images/comm8.jpg";

import res1 from "@/public/images/res1.jpg";
import res2 from "@/public/images/res2.jpg";
import res3 from "@/public/images/res3.jpg";
import res4 from "@/public/images/res4.jpg";
import res5 from "@/public/images/res5.jpg";
import res6 from "@/public/images/res6.jpg";
import res7 from "@/public/images/res7.jpg";
import res8 from "@/public/images/res8.jpg";

import ag1 from "@/public/images/ag1.jpg";
import ag2 from "@/public/images/ag2.jpg";

import gen1 from "@/public/images/gen1.jpg";
// Lowercase .png on purpose: Turbopack (default from Next 16) resolves file
// extensions case-sensitively and rejects .PNG as an unknown module type.
import gen2 from "@/public/images/gen2.png";

import emp1 from "@/public/images/emp1.jpeg";
import emp2 from "@/public/images/emp2.jpg";
import emp3 from "@/public/images/emp3.jpg";
import emp4 from "@/public/images/emp4.jpg";
import emp5 from "@/public/images/emp5.jpg";

/**
 * Alt text was previously "first", "second", "third"... which is worse than
 * useless: it tells a screen reader nothing and gives Google Images no reason
 * to surface these photos. Each entry now describes the work shown and the
 * service area, which is a genuine ranking signal for image search.
 *
 * Keep alt text descriptive but honest -- do not keyword-stuff. Google treats
 * repetitive keyword-loaded alt text as spam.
 */

export const empImages = [
  { src: emp1, alt: "Cruz Electric owner and licensed master electrician" },
  { src: emp2, alt: "Cruz Electric journeyman electrician on the job" },
  { src: emp3, alt: "Cruz Electric crew member performing electrical work" },
  { src: emp4, alt: "Cruz Electric electrician in the field" },
  { src: emp5, alt: "Cruz Electric crew member on a service call" },
];

export const commImages = [
  { src: comm1, alt: "Commercial electrical panel installation by Cruz Electric" },
  { src: comm2, alt: "Commercial building electrical wiring in northwest Iowa" },
  { src: comm3, alt: "Commercial lighting installation by a licensed electrician" },
  { src: comm4, alt: "Business electrical service upgrade in progress" },
  { src: comm5, alt: "Commercial electrical conduit and rough-in work" },
  { src: comm6, alt: "Three-phase commercial power installation" },
  { src: comm7, alt: "Commercial electrician wiring a storefront" },
  { src: comm8, alt: "Completed commercial electrical project by Cruz Electric" },
];

export const resImages = [
  { src: res1, alt: "Residential electrical panel upgrade by Cruz Electric" },
  { src: res2, alt: "Home electrical wiring installation in Storm Lake, Iowa" },
  { src: res3, alt: "Residential lighting installation by a licensed electrician" },
  { src: res4, alt: "Whole house rewiring project in progress" },
  { src: res5, alt: "Outlet and switch installation in a home" },
  { src: res6, alt: "Residential electrical service entrance installation" },
  { src: res7, alt: "Home electrical repair by Cruz Electric" },
  { src: res8, alt: "Completed residential electrical project in Cherokee County" },
];

export const agImages = [
  { src: ag1, alt: "Agricultural electrical installation on an Iowa farm" },
  { src: ag2, alt: "Farm building electrical wiring by Cruz Electric" },
];

export const genImages = [
  { src: gen1, alt: "Generac standby generator installation by Cruz Electric" },
  { src: gen2, alt: "Installed Generac whole-home backup generator in Iowa" },
];
