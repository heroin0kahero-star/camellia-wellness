export interface NavChild {
  label: string;
  path: string;
  index: string;
  description: string;
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavChild[];
}

export const TREATMENT_NAV_ITEMS: NavChild[] = [
  {
    label: 'Skin & Face',
    path: '/treatments/skin-and-face',
    index: '01',
    description: 'Signature facials, brightening care, pigmentation, and acne support.',
  },
  {
    label: 'Laser Hair Reduction',
    path: '/treatments/laser-hair-reduction',
    index: '02',
    description: 'Targeted facial and body sessions tailored to skin and hair type.',
  },
  {
    label: 'Hair Restoration',
    path: '/treatments/hair-restoration',
    index: '03',
    description: 'GFC, PRP, scalp care, and hair-strengthening consultations.',
  },
  {
    label: 'Body & Wellness',
    path: '/treatments/body-and-wellness',
    index: '04',
    description: 'Weight management, body contouring, and muscle-toning support.',
  },
];

export const MAIN_NAVIGATION: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Treatments',
    path: '/treatments',
    children: TREATMENT_NAV_ITEMS,
  },
  { label: 'Contact', path: '/contact' },
];
