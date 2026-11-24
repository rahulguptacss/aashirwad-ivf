'use client';

import { motion } from 'framer-motion';
import type { WhySectionData } from '../../types';

function Icon({ name }: { name: string }) {
  const common = 'h-5 w-5';
  if (name === 'doctor') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="8" r="3" />
        <path d="M6 19c1-3 3.2-4.5 6-4.5S17 16 18 19" />
      </svg>
    );
  }
  if (name === 'heart') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 19s-6-3.5-6-8a3.5 3.5 0 0 1 6-2 3.5 3.5 0 0 1 6 2c0 4.5-6 8-6 8z" />
      </svg>
    );
  }
  if (name === 'shield') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="8" cy="12" r="2" />
      <circle cx="14" cy="9" r="2" />
      <circle cx="15" cy="15" r="2" />
    </svg>
  );
}

export default function WhyChoose({ data }: { data: WhySectionData }) {
  return (
    <section id={data.id} className="overflow-hidden bg-white py-10 sm:py-14">
      <div className="mx-auto grid max-w-[1180px] gap-4 px-4 lg:grid-cols-[1.15fr_0.85fr_0.7fr]">
        <div className="flex flex-col gap-4">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fde7f1] px-3 py-1 text-[13px] font-semibold text-[#c2186a]">
              <Icon name="heart" />
              {data.eyebrow}
            </span>
            <h2 className="mt-3 max-w-[460px] text-[24px] font-bold leading-tight text-[#1d2433] sm:text-[34px] lg:text-[40px]">
              {data.title} <span className="text-[#c2186a]">{data.title_highlight}</span>
            </h2>
          </motion.div>
          <motion.img
            src={data.image}
            alt=""
            className="h-[200px] w-full rounded-[24px] object-cover sm:h-[280px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <img src={data.lab_image} alt="" className="h-[160px] w-full rounded-[24px] object-cover sm:h-[190px]" />
          <ul className="space-y-4">
            {data.points.map((point, index) => (
              <motion.li
                key={point.title}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fde7f1] text-[#c2186a]">
                  <Icon name={point.icon} />
                </span>
                <div>
                  <p className="font-semibold text-[#1d2433]">{point.title}</p>
                  <p className="text-[14px] text-[#6b7280]">{point.text}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="relative h-[240px] overflow-hidden rounded-[24px] sm:h-[320px] lg:h-auto lg:min-h-full"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <img src={data.couple_image} alt="" className="h-full w-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
