import { SeoHead } from '../components/common/SeoHead';
import { SectionHeading } from '../components/common/SectionHeading';
import { ImageReveal } from '../components/common/ImageReveal';
import { AppointmentCTA } from '../components/common/AppointmentCTA';
import { Button } from '../components/common/Button';
import { CLINIC_ASSETS } from '../data/assets';
import { BRAND_INFO, CLINIC_VERIFICATION_NOTES } from '../data/brand';

const CONSULTATION_STEPS = [
  {
    index: '01',
    title: 'Initial Listening & Review',
    description:
      'Your visit begins with an unhurried conversation covering skin, hair, or body-care history, sensitivities, and daily habits.',
  },
  {
    index: '02',
    title: 'Suitability Assessment',
    description:
      'Before recommending facials, peels, laser sessions, or scalp care, the centre evaluates skin tone, condition, and realistic readiness.',
  },
  {
    index: '03',
    title: 'Considerate Care Plan',
    description:
      'You receive a clear outline of recommended sessions, preparation steps, and aftercare—free from high-pressure packaging or guarantees.',
  },
];

export function About() {
  return (
    <>
      <SeoHead
        title="About Camellia | Camellia Cosmetics & Wellness Centre"
        description="Learn about the philosophy, consultation process, and considered approach to aesthetics and wellness at Camellia Cosmetics & Wellness Centre in Vignan Nagar, Bengaluru."
        canonicalPath="/about"
        schemaType="MedicalWebPage"
      />

      {/* Editorial Introduction */}
      <section className="border-b border-[#25221F]/12 bg-[#FAF7F2]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="font-mono-index text-xs tracking-[0.18em] uppercase text-[#737C67]">
                ABOUT CAMELLIA · VIGNAN NAGAR, BENGALURU
              </p>
              <h1 className="mt-5 font-display text-4xl leading-[1.08] font-normal text-[#3B252B] sm:text-6xl">
                Beauty Is Personal. <em className="italic">So Is Our Approach.</em>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base leading-relaxed text-[#5C554E]">
                At {BRAND_INFO.name}, aesthetic care is treated as a quiet dialogue
                between clinical discipline and restorative calm.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <ImageReveal
              src={CLINIC_ASSETS.clinicLounge.src}
              alt={CLINIC_ASSETS.clinicLounge.alt}
              figureNumber="FIG. 01"
              caption="Warm ivory surfaces and calm consultation spaces designed for unhurried care."
              aspectClass="aspect-[16/9]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Philosophy & Aesthetics Approach */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              index="01"
              kicker="Philosophy"
              title={
                <>
                  Restoring confidence without{' '}
                  <em className="italic">excess or haste.</em>
                </>
              }
            />
            <div className="mt-8 border border-[#25221F]/14 bg-[#E9DCD5]/55 p-6">
              <p className="font-mono-index text-[0.7rem] tracking-[0.16em] uppercase text-[#3B252B]">
                Clinic Record Placeholder · For Owner Confirmation
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#25221F]/85">
                {CLINIC_VERIFICATION_NOTES.aboutHistory.note}
              </p>
            </div>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-[#25221F]/85 lg:col-span-6 lg:col-start-7">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-5xl first-letter:font-medium first-letter:leading-none first-letter:text-[#3B252B]">
              True aesthetic care respects the individuality of your skin, hair, and body.
              Rather than chasing aggressive one-size-fits-all trends, Camellia focuses
              on barrier-conscious skincare, carefully paced laser protocols, and
              supportive scalp and wellness guidance.
            </p>
            <p className="text-[#5C554E]">
              Located above the Airtel showroom in Vignan Nagar, Bengaluru, our centre
              serves clients across East Bengaluru who value transparent communication,
              clean treatment suites, and thoughtful follow-through.
            </p>
            <div className="pt-4">
              <Button to="/treatments" variant="outline">
                Explore All Service Pillars
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="border-y border-[#25221F]/12 bg-[#FAF7F2]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <SectionHeading
            index="02"
            kicker="Consultation Process"
            title={
              <>
                Three calm steps before{' '}
                <em className="italic">any treatment begins.</em>
              </>
            }
          />

          <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[#25221F]/12 pt-10 md:grid-cols-3">
            {CONSULTATION_STEPS.map((step) => (
              <div key={step.index} className="space-y-3">
                <span className="font-mono-index text-xs tracking-[0.16em] text-[#737C67]">
                  STEP {step.index}
                </span>
                <h3 className="font-display text-2xl font-medium text-[#3B252B]">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#5C554E]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Environment Gallery */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              index="03"
              kicker="Environment & Equipment"
              title={
                <>
                  Thoughtfully composed suites <em className="italic">in Vignan Nagar.</em>
                </>
              }
              description={CLINIC_VERIFICATION_NOTES.technologiesCount.note}
            />
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <Button to="/contact" variant="primary">
              Schedule a Visit
            </Button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <ImageReveal
            src={CLINIC_ASSETS.skinAndFace.src}
            alt={CLINIC_ASSETS.skinAndFace.alt}
            figureNumber="FIG. 02"
            caption="Facial preparation & botanical formulations"
            aspectClass="aspect-[4/3]"
          />
          <ImageReveal
            src={CLINIC_ASSETS.laserSuite.src}
            alt={CLINIC_ASSETS.laserSuite.alt}
            figureNumber="FIG. 03"
            caption="Private laser & aesthetic suite"
            aspectClass="aspect-[4/3]"
          />
          <ImageReveal
            src={CLINIC_ASSETS.bodyAndWellness.src}
            alt={CLINIC_ASSETS.bodyAndWellness.alt}
            figureNumber="FIG. 04"
            caption="Quiet body & wellness space"
            aspectClass="aspect-[4/3]"
          />
        </div>
      </section>

      <AppointmentCTA
        heading="Visit Camellia in Vignan Nagar."
        subheading="Reach out on WhatsApp or via our enquiry form to arrange an initial consultation at your convenience."
      />
    </>
  );
}
