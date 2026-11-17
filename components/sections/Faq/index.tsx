'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import type { FaqSectionData } from '../../types';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['600'], style: ['normal', 'italic'] });

export default function Faq({ data }: { data: FaqSectionData }) {
  const [open, setOpen] = useState(0);

  return (
    <section id={data.id} className="overflow-hidden bg-white py-10 sm:py-14">
      <div className="mx-auto grid max-w-[1100px] items-start gap-8 px-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fde7f1] px-3 py-1 text-[13px] font-semibold text-[#c2186a]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c2186a]" />
              {data.eyebrow}
            </span>
            <h2 className={`${playfair.className} mt-3 text-[34px] font-semibold leading-tight text-[#1d2433] sm:text-[46px]`}>
              {data.title} <span className="italic text-[#c2186a]">{data.title_highlight}</span>
            </h2>
            <p className="mt-2 text-[15px] text-[#6b7280]">{data.description}</p>
          </motion.div>
          <div className="mt-6 space-y-3">
            {data.items.map((item, index) => {
              const active = open === index;
              return (
                <motion.div
                  key={item.question}
                  className={`overflow-hidden rounded-2xl border ${active ? 'border-[#f3b4cc] bg-[#fff1f6]' : 'border-[#f3d5e2] bg-white'}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <button type="button" onClick={() => setOpen(active ? -1 : index)} className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-[16px] font-semibold text-[#1d2433]">
                    {item.question}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e11d74] text-lg leading-none text-white">{active ? '−' : '+'}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.p className="px-4 pb-4 text-[14px] leading-6 text-[#4b5563]" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                        {item.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
        <motion.div className="relative mx-auto w-full max-w-[420px]" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="absolute -right-4 top-10 h-48 w-48 rounded-full bg-[#f8d7e6] sm:h-64 sm:w-64" />
          <span className="absolute bottom-6 left-0 h-28 w-36 rounded-full bg-[#fde7f1]" />
          <img src={data.items[data.items.length - 1]?.image} alt="" className="relative z-10 mx-auto mt-6 h-[380px] w-full object-contain object-bottom sm:mt-10 sm:h-[460px]" />
        </motion.div>
      </div>
    </section>
  );
}
