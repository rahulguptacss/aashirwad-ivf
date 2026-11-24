'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { TestimonialsSectionData } from '../../types';

export default function Testimonials({ data }: { data: TestimonialsSectionData }) {
  const [index, setIndex] = useState(0);
  const total = data.items.length;
  const item = data.items[index];

  const go = (step: number) => setIndex((current) => (current + step + total) % total);

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % total), 4500);
    return () => window.clearInterval(timer);
  }, [total]);

  return (
    <section id={data.id} className="overflow-hidden bg-[#fffafc] py-10 sm:py-14">
      <div className="mx-auto grid max-w-[1100px] items-start gap-8 px-4 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#fde7f1] px-3 py-1 text-[13px] font-semibold text-[#c2186a]">
            <span className="text-lg leading-none">“</span>
            {data.eyebrow}
          </span>
          <h2 className="mt-3 text-[24px] font-semibold leading-tight text-[#1d2433] sm:text-[36px] lg:text-[44px]">
            {data.title} <span className="text-[#c2186a]">{data.title_highlight}</span>
          </h2>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex">
              {data.avatars.map((src, avatarIndex) => (
                <img key={src} src={src} alt="" className={`h-12 w-12 rounded-full border-2 border-white object-cover ${avatarIndex ? '-ml-3' : ''}`} />
              ))}
            </div>
            <span className="h-10 w-px bg-[#f3c2d6]" />
            <div>
              <p className="font-semibold text-[#1d2433]">{data.stat_value}</p>
              <p className="text-[13px] text-[#6b7280]">{data.stat_text}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[28px] border border-[#f8d5e4] bg-white p-6 shadow-[0_12px_30px_rgba(194,24,106,0.06)] sm:min-h-[280px] sm:p-7"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="flex items-start justify-between">
              <span className="text-[44px] leading-none text-[#f3a6c4]">“</span>
              <p className="text-[18px] tracking-wide text-[#e11d74]">{'★'.repeat(item.stars)}{'☆'.repeat(Math.max(0, 5 - item.stars))}</p>
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={item.name} className="mt-1" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.3 }}>
                <p className="min-h-[72px] text-[15px] leading-relaxed text-[#374151] sm:text-[16px] sm:leading-7">{item.quote}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#fce9f1] pt-4">
            <div className="flex items-center gap-3">
              <img src={item.image} alt="" className="h-12 w-12 rounded-full object-cover shrink-0 ring-2 ring-[#f8d5e4]" />
              <div>
                <p className="font-semibold text-[#1d2433] text-[15px] sm:text-[16px] leading-tight">{item.name}</p>
                <p className="text-[13px] text-[#6b7280] mt-0.5">{item.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" aria-label="Previous" onClick={() => go(-1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f3b4cc] bg-white text-[#c2186a] transition hover:bg-[#c2186a] hover:text-white shadow-sm">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6" /></svg>
              </button>
              <button type="button" aria-label="Next" onClick={() => go(1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f3b4cc] bg-white text-[#c2186a] transition hover:bg-[#c2186a] hover:text-white shadow-sm">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
