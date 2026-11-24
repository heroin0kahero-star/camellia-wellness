import { useEffect } from 'react';
import { BRAND_INFO } from '../../data/brand';

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  schemaType?: 'HealthAndBeautyBusiness' | 'MedicalWebPage' | 'CollectionPage' | 'ContactPage';
}

function upsertMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attribute, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function SeoHead({ title, description, canonicalPath, schemaType = 'HealthAndBeautyBusiness' }: SeoHeadProps) {
  useEffect(() => {
    const fullTitle = title.includes('Camellia') ? title : `${title} | ${BRAND_INFO.name}`;
    document.title = fullTitle;

    const origin = window.location.origin;
    const canonicalUrl = `${origin}${canonicalPath}`;

    upsertMeta('meta[name="description"]', 'name', 'description', description);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    const scriptId = 'camellia-structured-data';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': schemaType === 'HealthAndBeautyBusiness' ? 'HealthAndBeautyBusiness' : ['WebPage', schemaType],
      name: BRAND_INFO.name,
      description,
      url: canonicalUrl,
      telephone: BRAND_INFO.phoneDisplay,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Above Airtel showroom, Vignan Nagar',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
      sameAs: [BRAND_INFO.instagramUrl],
    };

    script.textContent = JSON.stringify(structuredData);
  }, [title, description, canonicalPath, schemaType]);

  return null;
}
