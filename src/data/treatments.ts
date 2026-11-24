import { CLINIC_ASSETS, type AssetEntry } from './assets';

export type VerificationStatus = 'publicly-listed' | 'owner-confirmation';

export interface TreatmentItem {
  id: string;
  name: string;
  group: string;
  description: string;
  purpose: string;
  enquiryCategory: string;
  verificationStatus: VerificationStatus;
  verificationNote?: string;
}

export interface CategorySummary {
  id: string;
  index: string;
  slug: string;
  path: string;
  title: string;
  subtitle: string;
  intro: string;
  image: AssetEntry;
  featuredNames: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const TREATMENT_CATEGORIES: CategorySummary[] = [
  {
    id: 'skin-and-face',
    index: '01',
    slug: 'skin-and-face',
    path: '/treatments/skin-and-face',
    title: 'Skin & Face',
    subtitle: 'Restorative Facial Care & Corrective Aesthetics',
    intro:
      'Tailored facials, targeted pigmentation protocols, and supportive acne and scar care designed around your skin’s natural barrier.',
    image: CLINIC_ASSETS.skinAndFace,
    featuredNames: [
      'HydraFacial',
      'BB Facial',
      'Korean Glass Skin Facial',
      'LED Light Facial',
      'De-Tan Treatment',
      'Advanced Facials',
      'Skin Rejuvenation',
      'Chemical Peels',
      'Laser Skin Treatments',
      'Pigmentation Treatment',
      'Scar Removal Treatments',
      'Acne Treatment',
      'Acne Scar Care',
    ],
  },
  {
    id: 'laser-hair-reduction',
    index: '02',
    slug: 'laser-hair-reduction',
    path: '/treatments/laser-hair-reduction',
    title: 'Laser Hair Reduction',
    subtitle: 'Measured Light-Based Hair Reduction',
    intro:
      'Focused laser sessions across facial and body zones, guided by an in-person consultation to evaluate skin tone, hair texture, and comfort.',
    image: CLINIC_ASSETS.laserSuite,
    featuredNames: ['Full Face', 'Upper Lip', 'Underarms', 'Bikini Area'],
  },
  {
    id: 'hair-restoration',
    index: '03',
    slug: 'hair-restoration',
    path: '/treatments/hair-restoration',
    title: 'Hair Restoration',
    subtitle: 'Scalp Health & Follicular Support',
    intro:
      'Structured hair and scalp therapies—from GFC and PRP protocols to dandruff management and strengthening routines—rooted in individual assessment.',
    image: CLINIC_ASSETS.hairRestoration,
    featuredNames: [
      'GFC Treatment',
      'PRP Hair Treatment',
      'Hair Fall Treatment',
      'Hair Growth Therapy',
      'Dandruff & Scalp Treatment',
      'Hair Strengthening',
    ],
  },
  {
    id: 'body-and-wellness',
    index: '04',
    slug: 'body-and-wellness',
    path: '/treatments/body-and-wellness',
    title: 'Body & Wellness',
    subtitle: 'Balanced Contouring & Composition Care',
    intro:
      'Supportive weight management, non-invasive contouring, body composition guidance, and vibration-assisted muscle toning.',
    image: CLINIC_ASSETS.bodyAndWellness,
    featuredNames: [
      'Weight Management',
      'Weight Loss Treatments',
      'Body Contouring',
      'Body Composition Support',
      'Vibration Machine Treatment for Muscle Toning',
    ],
  },
];

export const SKIN_PREMIUM_FACIALS: TreatmentItem[] = [
  {
    id: 'hydrafacial',
    name: 'HydraFacial',
    group: 'Premium Facial Treatments',
    description:
      'A multi-step resurfacing and hydration facial combining gentle cleansing, mild exfoliation, painless extraction, and nourishing serum infusion.',
    purpose: 'Supports deep pore clarity, surface smoothness, and immediate hydration without harsh downtime.',
    enquiryCategory: 'Skin & Face · Hydration & Clarity',
    verificationStatus: 'publicly-listed',
  },
  {
    id: 'bb-facial',
    name: 'BB Facial',
    group: 'Premium Facial Treatments',
    description:
      'A tone-evening cosmetic facial focused on brightening dull skin and creating a softer, more uniform surface appearance.',
    purpose: 'Helps refresh uneven tone and promote a rested, luminous complexion ahead of occasions or routine upkeep.',
    enquiryCategory: 'Skin & Face · Radiance & Tone',
    verificationStatus: 'publicly-listed',
  },
  {
    id: 'korean-glass-skin-facial',
    name: 'Korean Glass Skin Facial',
    group: 'Premium Facial Treatments',
    description:
      'A layered moisture and barrier-conditioning protocol inspired by East Asian skin-health rituals to refine texture and boost luminosity.',
    purpose: 'Targets dehydration, surface dullness, and uneven texture for a supple, light-reflective finish.',
    enquiryCategory: 'Skin & Face · Luminous Hydration',
    verificationStatus: 'publicly-listed',
  },
  {
    id: 'led-light-facial',
    name: 'LED Light Facial',
    group: 'Premium Facial Treatments',
    description:
      'A non-thermal, light-based skin session pairing soothing topical care with targeted light wavelengths matched to your skin concern.',
    purpose: 'Calms visible redness, supports post-facial recovery, and complements clarifying or rejuvenating routines.',
    enquiryCategory: 'Skin & Face · Calming & Recovery',
    verificationStatus: 'publicly-listed',
  },
  {
    id: 'de-tan-treatment',
    name: 'De-Tan Treatment',
    group: 'Premium Facial Treatments',
    description:
      'A gentle brightening and surface-renewal treatment tailored for sun-exposed areas showing uneven tanning or environmental fatigue.',
    purpose: 'Assists in lifting superficial sun dullness while respecting skin sensitivity.',
    enquiryCategory: 'Skin & Face · Sun & Tone Recovery',
    verificationStatus: 'publicly-listed',
  },
  {
    id: 'advanced-facials',
    name: 'Advanced Facials',
    group: 'Premium Facial Treatments',
    description:
      'Bespoke multi-modality facial protocols selected after assessing hydration levels, congestion, and sensitivity.',
    purpose: 'Provides customized maintenance when standard single-step facials are not tailored enough for changing skin needs.',
    enquiryCategory: 'Skin & Face · Custom Consultation',
    verificationStatus: 'publicly-listed',
  },
];

export const SKIN_REJUVENATION_TREATMENTS: TreatmentItem[] = [
  {
    id: 'skin-rejuvenation',
    name: 'Skin Rejuvenation',
    group: 'Skin Rejuvenation & Corrective Treatments',
    description:
      'Comprehensive surface-renewal sessions curated to address early textural changes, fatigue, and loss of suppleness.',
    purpose: 'Supports smoother texture, refreshed tone, and healthier-looking skin quality over a guided plan.',
    enquiryCategory: 'Skin & Face · Renewal',
    verificationStatus: 'publicly-listed',
  },
  {
    id: 'chemical-peels',
    name: 'Chemical Peels',
    group: 'Skin Rejuvenation & Corrective Treatments',
    description:
      'Controlled superficial exfoliation using clinic-selected acid formulations matched carefully to Indian skin phototypes.',
    purpose: 'Encourages measured cellular turnover to address uneven tone, mild congestion, and rough texture.',
    enquiryCategory: 'Skin & Face · Controlled Exfoliation',
    verificationStatus: 'publicly-listed',
  },
  {
    id: 'laser-skin-treatments',
    name: 'Laser Skin Treatments',
    group: 'Skin Rejuvenation & Corrective Treatments',
    description:
      'Targeted light and laser modalities evaluated in person to address select tone, texture, or pore-refinement goals.',
    purpose: 'Provides structured aesthetic support where topical skincare alone reaches a plateau.',
    enquiryCategory: 'Skin & Face · Energy-Based Care',
    verificationStatus: 'publicly-listed',
  },
  {
    id: 'pigmentation-treatment',
    name: 'Pigmentation Treatment',
    group: 'Skin Rejuvenation & Corrective Treatments',
    description:
      'Individualized assessment and gentle corrective care for uneven melanin distribution, sun spots, and post-blemish marks.',
    purpose: 'Aims to gradually soften visible patches while prioritizing barrier stability and sun protection guidance.',
    enquiryCategory: 'Skin & Face · Tone Correction',
    verificationStatus: 'publicly-listed',
  },
  {
    id: 'scar-removal-treatments',
    name: 'Scar Removal Treatments',
    group: 'Skin Rejuvenation & Corrective Treatments',
    description:
      'Consultation-led textural resurfacing options designed to help soften the appearance of superficial facial scars.',
    purpose: 'Focuses on progressive texture refinement; suitability and realistic expectations are reviewed prior to care.',
    enquiryCategory: 'Skin & Face · Texture Refinement',
    verificationStatus: 'publicly-listed',
  },
  {
    id: 'acne-treatment',
    name: 'Acne Treatment',
    group: 'Skin Rejuvenation & Corrective Treatments',
    description:
      'Supportive clinical skincare aimed at calming active breakouts, clearing congestion, and reducing triggers of recurrence.',
    purpose: 'Helps restore calmer skin balance through gentle clarifying care and personalized home-routine alignment.',
    enquiryCategory: 'Skin & Face · Clarifying Care',
    verificationStatus: 'publicly-listed',
  },
  {
    id: 'acne-scar-care',
    name: 'Acne Scar Care',
    group: 'Skin Rejuvenation & Corrective Treatments',
    description:
      'Targeted post-acne textural and mark-fading protocols planned once active breakouts are suitably settled.',
    purpose: 'Supports smoother skin contour and reduction in lingering post-inflammatory discoloration.',
    enquiryCategory: 'Skin & Face · Post-Acne Recovery',
    verificationStatus: 'publicly-listed',
  },
];

export const SKIN_ADVANCED_TREATMENTS: TreatmentItem[] = [
  {
    id: 'facial-prp',
    name: 'Facial PRP',
    group: 'Advanced Skin Treatments',
    description:
      'Platelet-rich plasma facial protocol designed to support skin vitality and texture refinement through an individual clinical evaluation.',
    purpose: 'Offered subject to current practitioner availability and in-clinic suitability screening.',
    enquiryCategory: 'Skin & Face · Advanced Care (Confirm Availability)',
    verificationStatus: 'owner-confirmation',
    verificationNote:
      'Clinic confirmation pending: Confirm current scheduling availability and practitioner protocol details when enquiring.',
  },
  {
    id: 'glutathione-iv',
    name: 'Glutathione IV',
    group: 'Owner-Confirmation Inventory',
    description:
      'Referenced in earlier promotional material; currently held in Camellia’s owner-confirmation list pending verification of active clinical offering.',
    purpose:
      'Listed transparently for clinic review and not presented as a confirmed bookable service until verified by Camellia.',
    enquiryCategory: 'Owner Confirmation Required · Not Active for Direct Booking',
    verificationStatus: 'owner-confirmation',
    verificationNote:
      'Appeared in promotional archive; awaiting official clinic confirmation before activation as a bookable service.',
  },
];

export interface LaserArea {
  id: string;
  name: string;
  index: string;
  description: string;
  focus: string;
}

export const LASER_TREATMENT_AREAS: LaserArea[] = [
  {
    id: 'full-face',
    name: 'Full Face',
    index: '01',
    description:
      'Precision-calibrated facial sessions tailored to delicate skin contours, assessing hair density and skin sensitivity beforehand.',
    focus: 'Cheeks, jawline, chin, and upper lip assessed as a cohesive facial zone.',
  },
  {
    id: 'upper-lip',
    name: 'Upper Lip',
    index: '02',
    description:
      'A brief, focused session for unwanted upper-lip hair without the repetitive irritation of waxing or threading.',
    focus: 'Targeted zone care with post-session soothing and sun-protection advice.',
  },
  {
    id: 'underarms',
    name: 'Underarms',
    index: '03',
    description:
      'Comfortable, hygiene-focused care for the underarm area, helping reduce friction and ingrown hairs associated with shaving.',
    focus: 'Quick, structured sessions planned around natural hair-growth cycles.',
  },
  {
    id: 'bikini-area',
    name: 'Bikini Area',
    index: '04',
    description:
      'Conducted in a private, composed suite with attentive practitioner care to prioritize comfort and skin calm.',
    focus: 'Custom coverage preferences discussed confidentially during consultation.',
  },
];

export const LASER_FAQS: FAQItem[] = [
  {
    question: 'Does laser hair reduction guarantee permanent hair removal?',
    answer:
      'No aesthetic laser procedure can ethically promise 100% permanent removal for every follicle. Laser hair reduction targets actively growing hair follicles to achieve significant, long-term reduction in hair density and thickness, with occasional maintenance sessions as needed.',
  },
  {
    question: 'How many sessions will I need?',
    answer:
      'Session count varies by treatment area, hair coarseness, skin tone, and hormonal factors. Your practitioner will outline a realistic session cadence during your in-person assessment rather than prescribing a fixed one-size-fits-all number.',
  },
  {
    question: 'What happens during the initial consultation?',
    answer:
      'We review your medical and skincare history, inspect the target area’s skin tone and hair characteristics, explain pre- and post-session precautions, and confirm whether you are a suitable candidate before beginning.',
  },
  {
    question: 'How should I prepare before a session?',
    answer:
      'Clients are typically advised to avoid waxing, plucking, or epilating the root prior to sessions and to protect the area from intense sun exposure. Specific preparation steps are shared upon appointment confirmation.',
  },
];

export const HAIR_RESTORATION_TREATMENTS: TreatmentItem[] = [
  {
    id: 'gfc-treatment',
    name: 'GFC Treatment',
    group: 'Hair Restoration',
    description:
      'Growth Factor Concentrate therapy utilizing concentrated growth factors prepared carefully for targeted scalp application.',
    purpose: 'Supports scalp vitality and helps manage early thinning following an individual scalp evaluation.',
    enquiryCategory: 'Hair Restoration · Follicular Support',
    verificationStatus: 'publicly-listed',
  },
  {
    id: 'prp-hair-treatment',
    name: 'PRP Hair Treatment',
    group: 'Hair Restoration',
    description:
      'Platelet-Rich Plasma scalp sessions intended to nourish hair follicles and support thicker-feeling strands over a structured plan.',
    purpose: 'Commonly explored for diffuse shedding or thinning where follicles remain active.',
    enquiryCategory: 'Hair Restoration · Scalp Renewal',
    verificationStatus: 'publicly-listed',
  },
  {
    id: 'hair-fall-treatment',
    name: 'Hair Fall Treatment',
    group: 'Hair Restoration',
    description:
      'A consultation-first approach addressing sudden or ongoing shedding by reviewing scalp health, styling stress, and care habits.',
    purpose: 'Identifies supportive in-clinic and home-care measures tailored to your pattern of hair fall.',
    enquiryCategory: 'Hair Restoration · Shedding Management',
    verificationStatus: 'publicly-listed',
  },
  {
    id: 'hair-growth-therapy',
    name: 'Hair Growth Therapy',
    group: 'Hair Restoration',
    description:
      'Targeted scalp conditioning and clinical therapies designed to encourage a healthier follicular environment.',
    purpose: 'Supports strand density and resilience; individual response varies and no regrowth outcome is guaranteed.',
    enquiryCategory: 'Hair Restoration · Density Support',
    verificationStatus: 'publicly-listed',
  },
  {
    id: 'dandruff-scalp-treatment',
    name: 'Dandruff & Scalp Treatment',
    group: 'Hair Restoration',
    description:
      'Gentle purifying scalp care addressing flaking, excess build-up, itchiness, and barrier imbalance.',
    purpose: 'Restores scalp comfort and cleanliness as the foundation for healthier hair.',
    enquiryCategory: 'Hair Restoration · Scalp Clarity',
    verificationStatus: 'publicly-listed',
  },
  {
    id: 'hair-strengthening',
    name: 'Hair Strengthening',
    group: 'Hair Restoration',
    description:
      'Nourishing treatments focused on cuticle integrity, reduced breakage, and improved manageability of fragile strands.',
    purpose: 'Complements scalp care by protecting existing hair length against dryness and mechanical stress.',
    enquiryCategory: 'Hair Restoration · Strand Resilience',
    verificationStatus: 'publicly-listed',
  },
];

export const HAIR_FAQS: FAQItem[] = [
  {
    question: 'Do hair restoration therapies guarantee full hair regrowth?',
    answer:
      'No ethical hair therapy can guarantee regrowth across all areas. Outcomes depend on follicle viability, underlying causes of shedding, consistency, and individual biology. Our consultations focus on honest assessment and realistic expectations.',
  },
  {
    question: 'What is the difference between GFC and PRP hair care?',
    answer:
      'Both are autologous, growth-factor-focused scalp protocols, prepared using different processing methods. During your consultation, the practitioner explains which approach suits your scalp condition and comfort.',
  },
  {
    question: 'Should I treat dandruff before starting strengthening or growth sessions?',
    answer:
      'Often, calming scalp flaking and build-up first creates a healthier foundation for subsequent follicular care. Your scalp evaluation will sequence treatments thoughtfully.',
  },
];

export const BODY_WELLNESS_TREATMENTS: TreatmentItem[] = [
  {
    id: 'weight-management',
    name: 'Weight Management',
    group: 'Body & Wellness',
    description:
      'Structured, steady-paced support designed around sustainable habits and individual wellness goals rather than extreme short-term fads.',
    purpose: 'Provides consistent check-ins and supportive in-centre sessions aligned with everyday lifestyle balance.',
    enquiryCategory: 'Body & Wellness · Holistic Support',
    verificationStatus: 'publicly-listed',
  },
  {
    id: 'weight-loss-treatments',
    name: 'Weight Loss Treatments',
    group: 'Body & Wellness',
    description:
      'Non-surgical centre-based sessions explored alongside personalized consultation to support body-shaping goals.',
    purpose: 'Complements daily nutrition and movement routines without promising unrealistic or guaranteed kilogram reductions.',
    enquiryCategory: 'Body & Wellness · Guided Care',
    verificationStatus: 'publicly-listed',
  },
  {
    id: 'body-contouring',
    name: 'Body Contouring',
    group: 'Body & Wellness',
    description:
      'Targeted aesthetic body sessions aimed at supporting smoother silhouette proportions and firmer skin appearance in select zones.',
    purpose: 'Tailored to specific areas of concern after assessing skin tone and tissue characteristics.',
    enquiryCategory: 'Body & Wellness · Silhouette Care',
    verificationStatus: 'publicly-listed',
  },
  {
    id: 'body-composition-support',
    name: 'Body Composition Support',
    group: 'Body & Wellness',
    description:
      'Thoughtful monitoring and guidance focused on balanced muscle-to-fat proportions and overall physical vitality.',
    purpose: 'Shifts focus away from scale weight alone toward healthier overall body composition.',
    enquiryCategory: 'Body & Wellness · Composition Review',
    verificationStatus: 'publicly-listed',
  },
  {
    id: 'vibration-machine-toning',
    name: 'Vibration Machine Treatment for Muscle Toning',
    group: 'Body & Wellness',
    description:
      'Guided sessions utilizing controlled whole-body vibration equipment to engage muscle fibres and support toning routines.',
    purpose:
      'Used as a supportive complement to muscle activation and wellness plans; specific clinical parameters are confirmed during in-centre orientation.',
    enquiryCategory: 'Body & Wellness · Muscle Toning',
    verificationStatus: 'publicly-listed',
    verificationNote:
      'Equipment specifications and session durations are shared in person pending verified technical sheet publication.',
  },
];

export const ALL_TREATMENT_OPTIONS: string[] = [
  'General Consultation',
  'Skin & Face — HydraFacial',
  'Skin & Face — BB Facial',
  'Skin & Face — Korean Glass Skin Facial',
  'Skin & Face — LED Light Facial',
  'Skin & Face — De-Tan Treatment',
  'Skin & Face — Advanced Facials',
  'Skin & Face — Skin Rejuvenation',
  'Skin & Face — Chemical Peels',
  'Skin & Face — Laser Skin Treatments',
  'Skin & Face — Pigmentation Treatment',
  'Skin & Face — Scar Removal Treatments',
  'Skin & Face — Acne Treatment',
  'Skin & Face — Acne Scar Care',
  'Skin & Face — Facial PRP (Confirm Availability)',
  'Laser Hair Reduction — Full Face',
  'Laser Hair Reduction — Upper Lip',
  'Laser Hair Reduction — Underarms',
  'Laser Hair Reduction — Bikini Area',
  'Hair Restoration — GFC Treatment',
  'Hair Restoration — PRP Hair Treatment',
  'Hair Restoration — Hair Fall Treatment',
  'Hair Restoration — Hair Growth Therapy',
  'Hair Restoration — Dandruff & Scalp Treatment',
  'Hair Restoration — Hair Strengthening',
  'Body & Wellness — Weight Management',
  'Body & Wellness — Weight Loss Treatments',
  'Body & Wellness — Body Contouring',
  'Body & Wellness — Body Composition Support',
  'Body & Wellness — Vibration Machine Muscle Toning',
];
