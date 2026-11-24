import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { TreatmentItem } from '../../data/treatments';

interface TreatmentCardProps {
  treatment: TreatmentItem;
  indexNumber?: string;
}

export function TreatmentCard({ treatment, indexNumber }: TreatmentCardProps) {
  const isOwnerConfirmation = treatment.verificationStatus === 'owner-confirmation';
  const contactPath = `/contact?treatment=${encodeURIComponent(
    `${treatment.group.includes('Hair') ? 'Hair Restoration' : treatment.group.includes('Body') ? 'Body & Wellness' : 'Skin & Face'} — ${treatment.name}`
  )}`;

  return (
    <article className="flex h-full flex-col justify-between border border-[#25221F]/12 bg-[#FAF7F2] p-6 transition-colors duration-200 hover:border-[#3B252B]/35 sm:p-8">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#25221F]/10 pb-3 text-xs text-[#5C554E]">
          <span className="font-mono-index uppercase tracking-[0.14em] text-[#737C67]">
            {indexNumber ? `${indexNumber} · ` : ''}
            {treatment.enquiryCategory}
          </span>
        </div>

        <h3 className="mt-5 font-display text-2xl leading-snug font-medium text-[#3B252B] sm:text-[1.75rem]">
          {treatment.name}
        </h3>

        <p className="mt-3 text-[0.95rem] leading-relaxed text-[#25221F]/85">
          {treatment.description}
        </p>

        <div className="mt-5 border-t border-[#25221F]/8 pt-4">
          <p className="font-mono-index text-[0.7rem] tracking-[0.14em] uppercase text-[#5C554E]">
            General Purpose
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-[#5C554E]">
            {treatment.purpose}
          </p>
        </div>

        {treatment.verificationNote && (
          <div className="mt-4 bg-[#E9DCD5]/65 p-3.5 text-xs leading-relaxed text-[#3B252B]">
            <span className="font-mono-index uppercase tracking-[0.12em]">
              Owner Review Note:{' '}
            </span>
            {treatment.verificationNote}
          </div>
        )}
      </div>

      <div className="mt-7 pt-2">
        {isOwnerConfirmation && treatment.id === 'glutathione-iv' ? (
          <span className="inline-flex min-h-[40px] items-center text-xs font-mono-index uppercase tracking-[0.12em] text-[#5C554E]">
            Awaiting Clinic Confirmation Before Booking
          </span>
        ) : (
          <Link
            to={contactPath}
            className="inline-flex min-h-[40px] items-center gap-1.5 text-xs font-medium tracking-[0.14em] uppercase text-[#3B252B] transition-colors hover:text-[#737C67]"
          >
            <span>Request Consultation</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}
