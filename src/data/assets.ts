export interface AssetEntry {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string;
}

export const CLINIC_ASSETS = {
  logo: {
    src: '/assets/aistudio/image_8fa34541.png',
    alt: 'Camellia Cosmetic & Wellness Centre monogram and wordmark',
  },
  heroPortrait: {
    src: '/src/assets/images/hero_camellia_portrait_1795505205868.jpg',
    alt: 'Editorial beauty portrait illustrating natural, healthy skin texture in soft morning light',
    caption: 'Natural radiance, guided by considered care.',
  },
  skinAndFace: {
    src: '/src/assets/images/treatment_skin_face_1795505205410.jpg',
    alt: 'Minimalist facial treatment suite with botanical serums and organic linen on travertine stone',
    caption: 'Skin & Face ritual preparation at Camellia.',
  },
  laserSuite: {
    src: '/src/assets/images/treatment_laser_suite_1795505206404.jpg',
    alt: 'Serene clinical laser aesthetics suite in warm ivory and natural daylight',
    caption: 'Quiet, private treatment suites designed for comfort.',
  },
  hairRestoration: {
    src: '/src/assets/images/treatment_hair_scalp_1795505207507.jpg',
    alt: 'Editorial scalp and hair care consultation in soft warm light',
    caption: 'Targeted scalp assessment and restorative hair care.',
  },
  bodyAndWellness: {
    src: '/src/assets/images/treatment_body_wellness_1795505206928.jpg',
    alt: 'Calm body and wellness studio space with folded ivory linens on a stone bench',
    caption: 'Structured support for body composition and toning.',
  },
  clinicLounge: {
    src: '/src/assets/images/clinic_interior_lounge_1795505208150.jpg',
    alt: 'Warm ivory and deep burgundy consultation lounge bathed in natural daylight',
    caption: 'An atmosphere designed to feel composed, private, and unhurried.',
  },
  skincareTexture: {
    src: '/src/assets/images/editorial_skincare_texture_1795505208020.jpg',
    alt: 'Rich botanical cream and serum droplets on warm travertine stone',
    caption: 'Formulation textures curated for barrier respect.',
  },
  botanicalStillLife: {
    src: '/src/assets/images/editorial_botanical_tea_1795505209419.jpg',
    alt: 'White camellia blossom beside a handmade ceramic cup on warm linen',
    caption: 'The Camellia standard — calm, measured, personal.',
  },
} as const satisfies Record<string, AssetEntry>;

export const INSTAGRAM_GALLERY: AssetEntry[] = [
  {
    ...CLINIC_ASSETS.skinAndFace,
    caption: 'Considered facial care · Vignan Nagar',
  },
  {
    ...CLINIC_ASSETS.skincareTexture,
    caption: 'Barrier-first formulations · Skin & Face',
  },
  {
    ...CLINIC_ASSETS.laserSuite,
    caption: 'Private consultation & laser suites',
  },
  {
    ...CLINIC_ASSETS.botanicalStillLife,
    caption: 'Unhurried aesthetics · Bengaluru',
  },
];
