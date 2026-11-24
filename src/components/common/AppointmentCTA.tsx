import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react';
import { BRAND_INFO, buildWhatsAppUrl } from '../../data/brand';
import { Button } from './Button';

interface AppointmentCTAProps {
  index?: string;
  heading?: string;
  subheading?: string;
  treatmentContext?: string;
}

export function AppointmentCTA({
  index = 'CONSULTATION',
  heading = 'Begin with a calm, unhurried consultation.',
  subheading = 'Speak directly with Camellia Cosmetics & Wellness Centre in Vignan Nagar, Bengaluru to discuss your goals and confirm current session availability.',
  treatmentContext,
}: AppointmentCTAProps) {
  const whatsappMessage = treatmentContext
    ? `Hello Camellia Cosmetics & Wellness Centre, I would like to enquire about ${treatmentContext} and schedule a consultation.`
    : 'Hello Camellia Cosmetics & Wellness Centre, I would like to book a consultation in Vignan Nagar, Bengaluru.';

  const contactRoute = treatmentContext
    ? `/contact?treatment=${encodeURIComponent(treatmentContext)}`
    : '/contact';

  return (
    <section className="bg-[#F6F1E9] px-4 py-12 sm:px-6 lg:px-10 lg:py-16" aria-label="Book an appointment">
      <div className="mx-auto max-w-7xl bg-[#3B252B] px-6 py-14 text-[#F6F1E9] sm:px-10 lg:px-14 lg:py-20">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-mono-index text-xs tracking-[0.18em] uppercase text-[#B69A70]">
              {index} · VIGNAN NAGAR, BENGALURU
            </p>
            <h2 className="mt-4 font-display text-3xl leading-[1.1] font-normal text-[#F6F1E9] sm:text-5xl">
              {heading}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#E9DCD5]">
              {subheading}
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 lg:col-span-5 lg:items-end">
            <div className="flex flex-wrap items-center gap-3">
              <Button to={contactRoute} variant="ivory">
                Book Appointment
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                href={buildWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost-light"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp Enquiry
              </Button>
            </div>
            <a
              href={BRAND_INFO.phoneHref}
              className="inline-flex min-h-[40px] items-center gap-2 text-sm text-[#E9DCD5] transition-colors hover:text-[#F6F1E9]"
            >
              <Phone className="h-3.5 w-3.5 text-[#B69A70]" aria-hidden="true" />
              <span className="font-mono-index tracking-wide">{BRAND_INFO.phoneDisplay}</span>
              <span aria-hidden="true">·</span>
              <span>Above Airtel showroom, Vignan Nagar</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
