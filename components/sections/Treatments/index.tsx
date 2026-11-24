'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { TreatmentItem, TreatmentsSectionData } from '../../types';

function Icon({ name }: { name: string }) {
  const common = 'h-7 w-7';
  if (name === 'calendar') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16M8 14h.01M12 14h.01" />
      </svg>
    );
  }
  if (name === 'dna') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M7 4c6 4 4 12 10 16M17 4C11 8 13 16 7 20M8 8h8M8 16h8" />
      </svg>
    );
  }
  if (name === 'snow') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3v18M5 7l14 10M19 7L5 17" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="7" />
      <circle cx="10" cy="11" r="1.2" />
      <circle cx="14" cy="13" r="1.2" />
    </svg>
  );
}

function Card({ item }: { item: TreatmentItem }) {
  return (
    <article className="relative h-[390px] overflow-hidden rounded-[28px]">
      <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/15 to-black/70" />
      <div className="relative flex h-full flex-col p-5 text-white">
        <Icon name={item.icon} />
        <div className="mt-auto">
          <h3 className="text-[22px] font-semibold">{item.title}</h3>
          <p className="mt-1 text-[14px] leading-6 text-white/90">{item.text}</p>
        </div>
      </div>
    </article>
  );
}

function Arrow({ label, onClick, children }: { label: string; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f3b4cc] bg-white text-[#c2186a] shadow-[0_6px_16px_rgba(194,24,106,0.08)] transition hover:border-[#c2186a] hover:bg-[#c2186a] hover:text-white"
    >
      {children}
    </button>
  );
}

export default function Treatments({ data }: { data: TreatmentsSectionData }) {
  const scroller = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const canSlide = data.items.length > 4;
  const cards = canSlide ? [...data.items, ...data.items] : data.items;

  const move = (direction: number) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector('article');
    const width = (card?.clientWidth ?? 280) + 16;
    const max = el.scrollWidth / 2;
    if (direction > 0 && el.scrollLeft + width >= max) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
      return;
    }
    if (direction < 0 && el.scrollLeft <= 4) {
      el.scrollTo({ left: max - width, behavior: 'smooth' });
      return;
    }
    el.scrollBy({ left: direction * width, behavior: 'smooth' });
  };

  useEffect(() => {
    if (!canSlide || paused) return;
    const timer = window.setInterval(() => move(1), 3500);
    return () => window.clearInterval(timer);
  }, [paused, canSlide, data.items.length]);

  return (
    <section id={data.id} className="bg-[#fffafc] py-10 sm:py-14">
      <div className="mx-auto max-w-[1180px] px-4">
        <div className="flex items-end justify-between gap-4">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fde7f1] px-3 py-1 text-[13px] font-medium text-[#c2186a]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c2186a]" />
              {data.eyebrow}
            </span>
            <h2 className="mt-3 text-[24px] font-bold leading-tight text-[#1d2433] sm:text-[36px] lg:text-[44px]">
              {data.title} <span className="text-[#c2186a]">{data.title_highlight}</span>
            </h2>
          </motion.div>
          {canSlide && (
            <div className="flex gap-2">
              <Arrow label="Previous" onClick={() => move(-1)}>
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6" /></svg>
              </Arrow>
              <Arrow label="Next" onClick={() => move(1)}>
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
              </Arrow>
            </div>
          )}
        </div>

        <div
          ref={scroller}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className={`mt-8 gap-4 pb-2 ${canSlide ? 'flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden' : 'grid sm:grid-cols-2 xl:grid-cols-4'}`}
        >
          {cards.map((item, itemIndex) => (
            <div key={`${item.title}-${itemIndex}`} className={canSlide ? 'w-full shrink-0 snap-start sm:w-[calc(50%-8px)] xl:w-[calc(25%-12px)]' : 'min-w-0'}>
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
