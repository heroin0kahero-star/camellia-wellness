import { ArrowRight } from 'lucide-react';
import { SeoHead } from '../components/common/SeoHead';
import { Button } from '../components/common/Button';
import { ImageReveal } from '../components/common/ImageReveal';
import { AppointmentCTA } from '../components/common/AppointmentCTA';
import { TREATMENT_CATEGORIES } from '../data/treatments';

export function Treatments() {
  return (
    <>
      <SeoHead
        title="All Treatments | Camellia Cosmetics & Wellness Centre"
        description="Browse all treatment categories at Camellia Cosmetics & Wellness Centre in Vignan Nagar, Bengaluru: Skin & Face, Laser Hair Reduction, Hair Restoration, and Body & Wellness."
        canonicalPath="/treatments"
        schemaType="CollectionPage"
      />

      {/* Directory Header */}
      <section className="border-b border-[#25221F]/12 bg-[#FAF7F2]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <p className="font-mono-index text-xs tracking-[0.18em] uppercase text-[#737C67]">
            TREATMENT DIRECTORY · FOUR SPECIALIZED PILLARS
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.08] font-normal text-[#3B252B] sm:text-6xl">
            Every discipline, <em className="italic">clearly structured.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#5C554E] sm:text-lg">
            Explore Camellia’s complete public service directory across skin care,
            laser reduction, hair restoration, and body wellness. Suitability and active
            availability are confirmed individually during consultation.
          </p>
        </div>
      </section>

      {/* Asymmetric Category Sections */}
      <div className="divide-y divide-[#25221F]/12">
        {TREATMENT_CATEGORIES.map((category, idx) => {
          const isReversed = idx % 2 === 1;
          return (
            <section
              key={category.id}
              className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24"
            >
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <ImageReveal
                    src={category.image.src}
                    alt={category.image.alt}
                    figureNumber={`PILLAR ${category.index}`}
                    caption={category.image.caption}
                    aspectClass="aspect-[4/3]"
                    priority={idx === 0}
                  />
                </div>

                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center gap-2 font-mono-index text-xs tracking-[0.16em] uppercase text-[#737C67]">
                    <span>{category.index}</span>
                    <span aria-hidden="true">·</span>
                    <span>{category.subtitle}</span>
                  </div>

                  <h2 className="mt-3 font-display text-3xl font-medium text-[#3B252B] sm:text-5xl">
                    {category.title}
                  </h2>

                  <p className="mt-4 text-base leading-relaxed text-[#5C554E]">
                    {category.intro}
                  </p>

                  {/* Complete Treatment Name Directory */}
                  <div className="mt-7 border-t border-[#25221F]/12 pt-5">
                    <p className="font-mono-index text-[0.7rem] tracking-[0.16em] uppercase text-[#737C67]">
                      Publicly Listed Services
                    </p>
                    <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-[#25221F] sm:grid-cols-2">
                      {category.featuredNames.map((name) => (
                        <li
                          key={name}
                          className="flex items-baseline gap-2 border-b border-[#25221F]/8 pb-1.5"
                        >
                          <span className="font-mono-index text-[0.65rem] text-[#B69A70]">
                            —
                          </span>
                          <span>{name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Button to={category.path} variant="primary">
                      Explore {category.title}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <AppointmentCTA />
    </>
  );
}
