import { SeoHead } from '../components/common/SeoHead';
import { SectionHeading } from '../components/common/SectionHeading';
import { ImageReveal } from '../components/common/ImageReveal';
import { TreatmentCard } from '../components/treatments/TreatmentCard';
import { AppointmentCTA } from '../components/common/AppointmentCTA';
import { Button } from '../components/common/Button';
import { CLINIC_ASSETS } from '../data/assets';
import { BODY_WELLNESS_TREATMENTS } from '../data/treatments';

export function BodyAndWellness() {
  const coreServices = BODY_WELLNESS_TREATMENTS.filter(
    (item) => item.id !== 'vibration-machine-toning'
  );
  const vibrationService = BODY_WELLNESS_TREATMENTS.find(
    (item) => item.id === 'vibration-machine-toning'
  );

  return (
    <>
      <SeoHead
        title="Body & Wellness | Camellia Cosmetics & Wellness Centre"
        description="Explore Weight Management, Weight Loss Treatments, Body Contouring, Body Composition Support, and Vibration Machine Muscle Toning at Camellia in Vignan Nagar, Bengaluru."
        canonicalPath="/treatments/body-and-wellness"
        schemaType="MedicalWebPage"
      />

      {/* Hero */}
      <section className="border-b border-[#25221F]/12 bg-[#FAF7F2]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-12 lg:px-10 lg:py-24">
          <div className="lg:col-span-6">
            <p className="font-mono-index text-xs tracking-[0.18em] uppercase text-[#737C67]">
              PILLAR 04 · BODY &amp; WELLNESS
            </p>
            <h1 className="mt-5 font-display text-4xl leading-[1.06] font-normal text-[#3B252B] sm:text-6xl">
              A More Considered <em className="italic">Approach to Wellness.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5C554E] sm:text-lg">
              Balanced body care prioritizes steady composition support, respectful
              contouring, and muscle-toning guidance—never extreme claims or hurried
              promises.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                to="/contact?treatment=Body%20%26%20Wellness%20%E2%80%94%20Body%20Contouring"
                variant="primary"
              >
                Enquire for Body Wellness
              </Button>
              <a
                href="#vibration-feature"
                className="inline-flex min-h-[44px] items-center text-xs font-medium tracking-[0.14em] uppercase text-[#3B252B] underline decoration-[#B69A70] underline-offset-8 hover:text-[#737C67]"
              >
                Vibration Toning Feature
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ImageReveal
              src={CLINIC_ASSETS.bodyAndWellness.src}
              alt={CLINIC_ASSETS.bodyAndWellness.alt}
              figureNumber="FIG. 01"
              caption={CLINIC_ASSETS.bodyAndWellness.caption}
              aspectClass="aspect-[4/3]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Core Body & Wellness Services */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="border-b border-[#25221F]/12 pb-10">
          <SectionHeading
            index="01"
            kicker="Supportive Body Care"
            title={
              <>
                Weight management, composition &amp;{' '}
                <em className="italic">contouring support.</em>
              </>
            }
            description="Every body-care pathway is tailored in person with realistic guidance and zero guaranteed weight-loss or fat-reduction claims."
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {coreServices.map((item, idx) => (
            <TreatmentCard
              key={item.id}
              treatment={item}
              indexNumber={`W0${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Dedicated Feature: Vibration Machine Treatment */}
      {vibrationService && (
        <section
          id="vibration-feature"
          className="border-y border-[#25221F]/12 bg-[#E9DCD5]/55"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <SectionHeading
                  index="02"
                  kicker="Focused Modality"
                  title={
                    <>
                      Vibration Machine Treatment{' '}
                      <em className="italic">for Muscle Toning.</em>
                    </>
                  }
                />
                <p className="mt-6 text-base leading-relaxed text-[#25221F]/85">
                  {vibrationService.description}
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#5C554E]">
                  {vibrationService.purpose}
                </p>
                <div className="mt-6 border border-[#25221F]/14 bg-[#F6F1E9] p-5 text-xs leading-relaxed text-[#3B252B]">
                  <span className="font-mono-index uppercase tracking-[0.14em]">
                    Verification &amp; Expectations:{' '}
                  </span>
                  {vibrationService.verificationNote} Sessions are offered as supportive
                  muscle-engagement care without unverified equipment metrics or
                  guaranteed circumference outcomes.
                </div>
                <div className="mt-8">
                  <Button
                    to="/contact?treatment=Body%20%26%20Wellness%20%E2%80%94%20Vibration%20Machine%20Muscle%20Toning"
                    variant="primary"
                  >
                    Enquire About Muscle Toning
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <ImageReveal
                  src={CLINIC_ASSETS.clinicLounge.src}
                  alt="Quiet private wellness centre lounge at Camellia Cosmetics & Wellness Centre"
                  figureNumber="FIG. 02"
                  caption="Guided body sessions supported by calm in-centre consultation."
                  aspectClass="aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      <AppointmentCTA
        treatmentContext="Body & Wellness"
        heading="Begin a balanced body-care conversation."
      />
    </>
  );
}
