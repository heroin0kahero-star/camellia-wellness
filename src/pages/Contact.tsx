import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { SeoHead } from '../components/common/SeoHead';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import {
  BRAND_INFO,
  CLINIC_VERIFICATION_NOTES,
  buildWhatsAppUrl,
} from '../data/brand';
import { ALL_TREATMENT_OPTIONS } from '../data/treatments';

const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Please enter your full name (at least 2 characters).'),
  phone: z
    .string()
    .trim()
    .regex(
      /^[+\d\s()-]{10,16}$/,
      'Please enter a valid 10-digit mobile or contact number.'
    ),
  treatment: z.string().min(1, 'Please select an interested treatment.'),
  preferredDate: z
    .string()
    .min(1, 'Please select a preferred appointment date.'),
  message: z.string().trim().max(500, 'Please keep your note under 500 characters.').optional(),
});

type EnquiryFormValues = z.infer<typeof enquirySchema>;

export function Contact() {
  const [searchParams] = useSearchParams();
  const [preparedWhatsApp, setPreparedWhatsApp] = useState<{
    url: string;
    preview: string;
  } | null>(null);

  const initialTreatmentParam = searchParams.get('treatment') ?? '';
  const matchedOption =
    ALL_TREATMENT_OPTIONS.find(
      (opt) => opt.toLowerCase() === initialTreatmentParam.toLowerCase()
    ) ||
    ALL_TREATMENT_OPTIONS.find((opt) =>
      initialTreatmentParam
        ? opt.toLowerCase().includes(initialTreatmentParam.toLowerCase())
        : false
    ) ||
    'General Consultation';

  const todayIso = new Date().toISOString().split('T')[0];

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: '',
      phone: '',
      treatment: matchedOption,
      preferredDate: '',
      message: '',
    },
  });

  useEffect(() => {
    setValue('treatment', matchedOption);
  }, [matchedOption, setValue]);

  const onSubmit = (values: EnquiryFormValues) => {
    const lines = [
      'Hello Camellia Cosmetics & Wellness Centre,',
      '',
      'I would like to request an appointment enquiry:',
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Interested Treatment: ${values.treatment}`,
      `Preferred Date: ${values.preferredDate}`,
      values.message ? `Message: ${values.message}` : null,
      '',
      'Sent via the Camellia Vignan Nagar website.',
    ].filter((line): line is string => line !== null);

    const formattedMessage = lines.join('\n');
    const url = buildWhatsAppUrl(formattedMessage);

    setPreparedWhatsApp({
      url,
      preview: formattedMessage,
    });

    // Programmatic anchor click avoids window.open restrictions inside sandboxed frames
    const tempLink = document.createElement('a');
    tempLink.href = url;
    tempLink.target = '_blank';
    tempLink.rel = 'noopener noreferrer';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  };

  return (
    <>
      <SeoHead
        title="Contact & Appointments | Camellia Cosmetics & Wellness Centre"
        description="Book a consultation or enquire on WhatsApp (+91 8971154397) with Camellia Cosmetics & Wellness Centre, above Airtel showroom, Vignan Nagar, Bengaluru."
        canonicalPath="/contact"
        schemaType="ContactPage"
      />

      {/* Page Intro */}
      <section className="border-b border-[#25221F]/12 bg-[#FAF7F2]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <p className="font-mono-index text-xs tracking-[0.18em] uppercase text-[#737C67]">
            CONTACT &amp; APPOINTMENTS · VIGNAN NAGAR, BENGALURU
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.08] font-normal text-[#3B252B] sm:text-6xl">
            Schedule your <em className="italic">consultation.</em>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5C554E] sm:text-lg">
            Reach our Vignan Nagar centre directly by phone, WhatsApp, or the
            validated enquiry form below. All appointments are confirmed directly
            with the clinic desk.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          {/* Left: Verified Details & Hours Placeholder */}
          <div className="space-y-10 lg:col-span-5">
            <div>
              <SectionHeading
                index="01"
                kicker="Direct Desk"
                title={
                  <>
                    Visit or speak <em className="italic">with Camellia.</em>
                  </>
                }
              />

              <div className="mt-8 divide-y divide-[#25221F]/12 border-y border-[#25221F]/12">
                <div className="flex items-start gap-4 py-5">
                  <MapPin
                    className="mt-1 h-4 w-4 shrink-0 text-[#3B252B]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-mono-index text-[0.7rem] tracking-[0.14em] uppercase text-[#737C67]">
                      Address
                    </p>
                    <address className="mt-1.5 not-italic text-sm leading-relaxed text-[#25221F]">
                      {BRAND_INFO.name}
                      <br />
                      {BRAND_INFO.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4 py-5">
                  <Phone
                    className="mt-1 h-4 w-4 shrink-0 text-[#3B252B]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-mono-index text-[0.7rem] tracking-[0.14em] uppercase text-[#737C67]">
                      Phone
                    </p>
                    <p className="mt-1 font-mono-index text-base text-[#25221F]">
                      {BRAND_INFO.phoneDisplay}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <Button href={BRAND_INFO.phoneHref} variant="outline">
                        <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                        Call Centre
                      </Button>
                      <Button
                        href={BRAND_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                      >
                        <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 py-5">
                  <Instagram
                    className="mt-1 h-4 w-4 shrink-0 text-[#3B252B]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-mono-index text-[0.7rem] tracking-[0.14em] uppercase text-[#737C67]">
                      Official Instagram
                    </p>
                    <a
                      href={BRAND_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex min-h-[36px] items-center gap-1.5 text-sm font-medium text-[#3B252B] underline decoration-[#B69A70] underline-offset-4 hover:text-[#737C67]"
                    >
                      <span>{BRAND_INFO.instagramHandle}</span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 py-5">
                  <Clock
                    className="mt-1 h-4 w-4 shrink-0 text-[#3B252B]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-mono-index text-[0.7rem] tracking-[0.14em] uppercase text-[#737C67]">
                      Working Hours · {CLINIC_VERIFICATION_NOTES.workingHours.status}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#5C554E]">
                      {CLINIC_VERIFICATION_NOTES.workingHours.placeholderText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Validated WhatsApp Appointment Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="border border-[#25221F]/14 bg-[#FAF7F2] p-6 sm:p-10">
              <p className="font-mono-index text-xs tracking-[0.16em] uppercase text-[#737C67]">
                02 · APPOINTMENT ENQUIRY FORM
              </p>
              <h2 className="mt-2 font-display text-3xl font-medium text-[#3B252B]">
                Prepare a WhatsApp consultation request
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#5C554E]">
                Submitting this form validates your details and prepares a
                structured message directly in WhatsApp so you can confirm your
                preferred slot with our team.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="mt-8 space-y-6"
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="enquiry-name"
                      className="block font-mono-index text-xs tracking-[0.12em] uppercase text-[#3B252B]"
                    >
                      Full Name *
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      {...register('name')}
                      className="mt-2 min-h-[44px] w-full border border-[#25221F]/25 bg-[#F6F1E9] px-4 py-2.5 text-sm text-[#25221F] placeholder:text-[#5C554E]/60 focus:border-[#3B252B]"
                    />
                    {errors.name && (
                      <p role="alert" className="mt-1.5 text-xs text-[#8C2D19]">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-phone"
                      className="block font-mono-index text-xs tracking-[0.12em] uppercase text-[#3B252B]"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 98XXXXXXXX"
                      {...register('phone')}
                      className="mt-2 min-h-[44px] w-full border border-[#25221F]/25 bg-[#F6F1E9] px-4 py-2.5 text-sm text-[#25221F] placeholder:text-[#5C554E]/60 focus:border-[#3B252B]"
                    />
                    {errors.phone && (
                      <p role="alert" className="mt-1.5 text-xs text-[#8C2D19]">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="enquiry-treatment"
                      className="block font-mono-index text-xs tracking-[0.12em] uppercase text-[#3B252B]"
                    >
                      Interested Treatment *
                    </label>
                    <select
                      id="enquiry-treatment"
                      {...register('treatment')}
                      className="mt-2 min-h-[44px] w-full border border-[#25221F]/25 bg-[#F6F1E9] px-4 py-2.5 text-sm text-[#25221F] focus:border-[#3B252B]"
                    >
                      {ALL_TREATMENT_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.treatment && (
                      <p role="alert" className="mt-1.5 text-xs text-[#8C2D19]">
                        {errors.treatment.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-date"
                      className="block font-mono-index text-xs tracking-[0.12em] uppercase text-[#3B252B]"
                    >
                      Preferred Date *
                    </label>
                    <input
                      id="enquiry-date"
                      type="date"
                      min={todayIso}
                      {...register('preferredDate')}
                      className="mt-2 min-h-[44px] w-full border border-[#25221F]/25 bg-[#F6F1E9] px-4 py-2.5 text-sm text-[#25221F] focus:border-[#3B252B]"
                    />
                    {errors.preferredDate && (
                      <p role="alert" className="mt-1.5 text-xs text-[#8C2D19]">
                        {errors.preferredDate.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-message"
                    className="block font-mono-index text-xs tracking-[0.12em] uppercase text-[#3B252B]"
                  >
                    Additional Message (Optional)
                  </label>
                  <textarea
                    id="enquiry-message"
                    rows={4}
                    placeholder="Share any questions, preferred time of day, or skin/hair notes..."
                    {...register('message')}
                    className="mt-2 w-full border border-[#25221F]/25 bg-[#F6F1E9] px-4 py-3 text-sm text-[#25221F] placeholder:text-[#5C554E]/60 focus:border-[#3B252B]"
                  />
                  {errors.message && (
                    <p role="alert" className="mt-1.5 text-xs text-[#8C2D19]">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <Button type="submit" variant="primary" disabled={isSubmitting}>
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Continue to WhatsApp
                  </Button>
                  <span className="text-xs text-[#5C554E]">
                    Opens {BRAND_INFO.phoneDisplay} in WhatsApp with your details.
                  </span>
                </div>
              </form>

              {preparedWhatsApp && (
                <div
                  role="status"
                  className="mt-8 border border-[#737C67]/40 bg-[#F6F1E9] p-6"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#737C67]"
                      aria-hidden="true"
                    />
                    <div className="w-full">
                      <p className="font-display text-xl font-medium text-[#3B252B]">
                        Your WhatsApp enquiry message is ready
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[#5C554E]">
                        If WhatsApp did not launch automatically in a new tab, use the
                        button below to send your pre-filled enquiry directly to the
                        centre.
                      </p>
                      <pre className="mt-3 whitespace-pre-wrap border border-[#25221F]/10 bg-[#FAF7F2] p-3 font-sans text-xs leading-relaxed text-[#25221F]">
                        {preparedWhatsApp.preview}
                      </pre>
                      <div className="mt-4">
                        <Button
                          href={preparedWhatsApp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="primary"
                        >
                          <MessageCircle className="h-4 w-4" aria-hidden="true" />
                          Open WhatsApp Message
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Vignan Nagar Map Embed Section */}
      <section className="border-t border-[#25221F]/12 bg-[#FAF7F2]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-between gap-6 border-b border-[#25221F]/12 pb-8 sm:flex-row sm:items-end">
            <SectionHeading
              index="03"
              kicker="Vignan Nagar Map"
              title={
                <>
                  Finding Camellia in <em className="italic">East Bengaluru.</em>
                </>
              }
              description={CLINIC_VERIFICATION_NOTES.mapPin.note}
            />
            <Button
              href={BRAND_INFO.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              Open in Google Maps
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </Button>
          </div>

          <div className="mt-8 overflow-hidden border border-[#25221F]/14 bg-[#E9DCD5]">
            <iframe
              title="Map showing Vignan Nagar, Bengaluru near Camellia Cosmetics & Wellness Centre"
              src={BRAND_INFO.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[360px] w-full border-0 sm:h-[440px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
