export const BRAND_INFO = {
  name: 'Camellia Cosmetics & Wellness Centre',
  shortName: 'Camellia',
  tagline: 'Cosmetic & Wellness Centre',
  locationShort: 'Vignan Nagar, Bengaluru',
  addressLines: [
    'Above Airtel showroom,',
    'Vignan Nagar,',
    'Bengaluru, Karnataka, India',
  ],
  fullAddress: 'Above Airtel showroom, Vignan Nagar, Bengaluru, Karnataka, India',
  phoneDisplay: '+91 8971154397',
  phoneHref: 'tel:+918971154397',
  whatsappNumber: '918971154397',
  whatsappUrl: 'https://wa.me/918971154397',
  instagramHandle: '@camelliacosmeticscentre',
  instagramUrl: 'https://www.instagram.com/camelliacosmeticscentre/',
  mapEmbedUrl:
    'https://www.google.com/maps?q=Vignan+Nagar,+Bengaluru,+Karnataka,+India&output=embed',
  mapDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Airtel+Showroom+Vignan+Nagar+Bengaluru',
} as const;

export const CLINIC_VERIFICATION_NOTES = {
  workingHours: {
    status: 'Awaiting clinic confirmation',
    placeholderText: 'Clinic timings are shared upon enquiry and will be published here once confirmed by the centre.',
  },
  technologiesCount: {
    publicReference: '16 technologies',
    note: 'The centre has publicly referenced 16 technologies; the verified equipment roster is pending final clinic confirmation prior to detailed publication.',
  },
  aboutHistory: {
    note: 'Founding year, clinical leadership profiles, and formal practitioner credentials are reserved for verified details supplied directly by Camellia Cosmetics & Wellness Centre.',
  },
  mapPin: {
    note: 'Area map centred on Vignan Nagar, Bengaluru. Exact storefront pin above the Airtel showroom is confirmed during appointment scheduling.',
  },
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
