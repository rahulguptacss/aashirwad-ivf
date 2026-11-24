'use client';

import { motion } from 'framer-motion';
import type { HeroSectionData } from '../../types';

export default function Hero({ data }: { data: HeroSectionData }) {
  return (
    <section id={data.id} className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f3ff_0%,#fdeff6_100%)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(190,170,220,0.35) 1.5px, transparent 1.6px)',
          backgroundSize: '46px 40px',
        }}
      />
      <div className="relative mx-auto grid max-w-[1180px] items-center gap-2 px-4 py-8 sm:px-5 sm:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:py-6">
        <motion.div className="text-center lg:text-left" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.55 }}>
          <p className="mx-auto max-w-[280px] text-[12px] font-semibold uppercase leading-5 tracking-[0.12em] text-[#e11d74] sm:max-w-none sm:text-[14px] sm:tracking-[0.16em] lg:mx-0">{data.eyebrow}</p>
          <h1 className="mx-auto mt-3 max-w-[560px] text-[26px] font-bold leading-tight text-[#1d2433] sm:text-[38px] sm:leading-[1.15] lg:mx-0 lg:text-[50px]">
            {data.title_start} <span className="text-[#2f6bff]">{data.title_highlight}</span> {data.title_mid}{' '}
            <span className="text-[#c2186a]">{data.title_end}</span>
          </h1>
          <motion.img
            src={data.couple_image}
            alt=""
            className="hidden sm:block mx-auto mt-6 h-[110px] w-[200px] rounded-2xl object-cover shadow-md lg:mx-0 lg:mt-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
          />
        </motion.div>
        <motion.div
          className="relative mx-auto w-full max-w-[520px]"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <svg viewBox="0 0 120 100" className="absolute left-1 top-16 h-16 w-20 text-[#f3a6c4] sm:left-6 sm:top-10 sm:h-28 sm:w-32" aria-hidden>
            <path d="M60 88C28 62 12 46 12 30a18 18 0 0 1 32-10 18 18 0 0 1 32 10c0 16-16 32-16 58z" fill="none" stroke="currentColor" strokeWidth="3" />
            <circle cx="52" cy="40" r="4" fill="currentColor" />
            <path d="M58 36c6 2 10 8 8 14" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
          <img src={data.image} alt="" className="relative z-10 mx-auto h-[320px] w-full object-contain object-bottom sm:h-[460px] lg:h-[520px]" />
        </motion.div>
      </div>
    </section>
  );
}
