import { SeoHead } from '../components/common/SeoHead';
import { SectionHeading } from '../components/common/SectionHeading';
import { ImageReveal } from '../components/common/ImageReveal';
import { TreatmentCard } from '../components/treatments/TreatmentCard';
import { AppointmentCTA } from '../components/common/AppointmentCTA';
import { Button } from '../components/common/Button';
import { CLINIC_ASSETS } from '../data/assets';
import {
  SKIN_ADVANCED_TREATMENTS,
  SKIN_PREMIUM_FACIALS,
  SKIN_REJUVENATION_TREATMENTS,
} from '../data/treatments';

export function SkinAndFace() {
  return (
    <>
      <SeoHead
        title="Skin & Face Treatments | Camellia Cosmetics & Wellness Centre"
        description="Explore HydraFacial, Korean Glass Skin Facial, LED Light Facial, Chemical Peels, Pigmentation Care, and Acne Treatments at Camellia Cosmetics & Wellness Centre in Vignan Nagar, Bengaluru."
        canonicalPath="/treatments/skin-and-face"
        schemaType="MedicalWebPage"
      />

      {/* Editorial Hero */}
      <section className="border-b border-[#25221F]/12 bg-[#FAF7F2]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-12 lg:px-10 lg:py-24">
          <div className="lg:col-span-6">
            <p className="font-mono-index text-xs tracking-[0.18em] uppercase text-[#737C67]">
              PILLAR 01 · SKIN &amp; FACE TREATMENTS
            </p>
            <h1 className="mt-5 font-display text-4xl leading-[1.06] font-normal text-[#3B252B] sm:text-6xl">
              Your Skin, In Its <em className="italic">Best Light.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5C554E] sm:text-lg">
              From restorative hydration rituals to targeted corrective protocols for
              pigmentation, acne, and texture, every Skin &amp; Face treatment is chosen
              after evaluating your skin’s barrier, tone, and sensitivity.
            </p>

            {/* Quick Section Jump Links */}
            <div className="mt-8 flex flex-wrap gap-3 border-t border-[#25221F]/12 pt-6 text-xs font-medium tracking-[0.12em] uppercase">
              <a
                href="#premium-facials"
                className="inline-flex min-h-[40px] items-center border border-[#25221F]/20 px-4 py-2 text-[#3B252B] transition-colors hover:border-[#3B252B] hover:bg-[#3B252B] hover:text-[#F6F1E9]"
              >
                A · Premium Facials
              </a>
              <a
                href="#skin-rejuvenation"
                className="inline-flex min-h-[40px] items-center border border-[#25221F]/20 px-4 py-2 text-[#3B252B] transition-colors hover:border-[#3B252B] hover:bg-[#3B252B] hover:text-[#F6F1E9]"
              >
                B · Rejuvenation &amp; Corrective
              </a>
              <a
                href="#advanced-skin"
                className="inline-flex min-h-[40px] items-center border border-[#25221F]/20 px-4 py-2 text-[#3B252B] transition-colors hover:border-[#3B252B] hover:bg-[#3B252B] hover:text-[#F6F1E9]"
              >
                C · Advanced &amp; Verification
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ImageReveal
              src={CLINIC_ASSETS.skinAndFace.src}
              alt={CLINIC_ASSETS.skinAndFace.alt}
              figureNumber="FIG. 01"
              caption="Thoughtfully sequenced facial protocols respecting skin barrier health."
              aspectClass="aspect-[4/3]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Group A: Premium Facial Treatments */}
      <section id="premium-facials" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 items-end gap-8 border-b border-[#25221F]/12 pb-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionHeading
              index="GROUP A"
              kicker="Restorative & Luminosity Rituals"
              title={
                <>
                  Premium <em className="italic">Facial Treatments</em>
                </>
              }
              description="Gentle, results-minded facial care tailored for hydration, clarity, tone refinement, and calm recovery."
            />
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Button to="/contact?treatment=Skin%20%26%20Face%20%E2%80%94%20HydraFacial" variant="outline">
              Enquire for Facial Care
            </Button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKIN_PREMIUM_FACIALS.map((item, idx) => (
            <TreatmentCard
              key={item.id}
              treatment={item}
              indexNumber={`A0${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Editorial Texture Interlude */}
      <section className="border-y border-[#25221F]/12 bg-[#E9DCD5]/45">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <ImageReveal
              src={CLINIC_ASSETS.skincareTexture.src}
              alt={CLINIC_ASSETS.skincareTexture.alt}
              figureNumber="FIG. 02"
              caption={CLINIC_ASSETS.skincareTexture.caption}
              aspectClass="aspect-square"
            />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="font-mono-index text-xs tracking-[0.16em] uppercase text-[#737C67]">
              CLINICAL RESPONSIBILITY NOTE
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium text-[#3B252B] sm:text-4xl">
              Individual response varies. Honest assessment comes first.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5C554E]">
              Every complexion responds differently depending on genetics, sun exposure,
              barrier sensitivity, and consistency of home care. Camellia does not make
              blanket medical promises or guarantee outcomes; instead, we guide you toward
              safe, measured choices suited to your skin.
            </p>
          </div>
        </div>
      </section>

      {/* Group B: Skin Rejuvenation & Corrective Treatments */}
      <section id="skin-rejuvenation" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="border-b border-[#25221F]/12 pb-10">
          <SectionHeading
            index="GROUP B"
            kicker="Targeted Skin Support"
            title={
              <>
                Skin Rejuvenation &amp; <em className="italic">Corrective Treatments</em>
              </>
            }
            description="Structured protocols addressing uneven pigmentation, breakouts, post-acne marks, and surface texture."
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKIN_REJUVENATION_TREATMENTS.map((item, idx) => (
            <TreatmentCard
              key={item.id}
              treatment={item}
              indexNumber={`B0${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Group C: Advanced Skin Treatments & Owner-Confirmation List */}
      <section
        id="advanced-skin"
        className="border-t border-[#25221F]/12 bg-[#FAF7F2]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="border-b border-[#25221F]/12 pb-10">
            <SectionHeading
              index="GROUP C"
              kicker="Advanced Protocols & Clinic Confirmation"
              title={
                <>
                  Advanced Skin Care &amp;{' '}
                  <em className="italic">Owner-Confirmation Inventory</em>
                </>
              }
              description="Items below require direct clinic confirmation regarding current active scheduling and practitioner availability before booking."
            />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {SKIN_ADVANCED_TREATMENTS.map((item, idx) => (
              <TreatmentCard
                key={item.id}
                treatment={item}
                indexNumber={`C0${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA
        treatmentContext="Skin & Face Treatments"
        heading="Discuss your skin goals in a private consultation."
      />
    </>
  );
}
