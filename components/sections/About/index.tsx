'use client';

import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import type { AboutSectionData } from '../../types';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['600'], style: ['normal', 'italic'] });

export default function About({ data }: { data: AboutSectionData }) {
  return (
    <section id={data.id} className="overflow-hidden bg-white py-10 sm:py-14">
      <div className="mx-auto grid max-w-[1100px] items-center gap-8 px-4 lg:grid-cols-2 lg:gap-12">
        <motion.div
          className="relative mx-auto w-full max-w-[460px]"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <span className="absolute -left-4 -top-6 h-24 w-28 rounded-full bg-[#f8d7e6] sm:-left-8" />
          <span className="absolute -bottom-6 -right-2 h-16 w-28 rounded-full bg-[#f6e4ec]" />
          <img src={data.image} alt="" className="relative z-10 h-[340px] w-full rounded-[28px] object-cover sm:h-[420px]" />
        </motion.div>
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <span className="inline-flex rounded-full bg-[#fde7f1] px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#c2186a]">{data.eyebrow}</span>
          <h2 className={`${playfair.className} mt-4 text-[32px] font-semibold leading-[1.15] text-[#1d2433] sm:text-[44px]`}>
            {data.title} <span className="italic text-[#c2186a]">{data.title_highlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-7 text-[#4b5563] sm:text-[16px] lg:mx-0">{data.description}</p>
          <motion.a
            href={data.button_href}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#c2186a] px-6 py-3 text-[15px] font-semibold text-white"
            whileHover={{ x: 4 }}
          >
            {data.button_text}
            <span aria-hidden>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
