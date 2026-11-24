'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { ContactSectionData } from '../../types';

const field = 'h-12 w-full rounded-xl border border-[#f3d0de] bg-white pl-10 pr-3 text-[14px] outline-none placeholder:text-[#9ca3af]';

export default function Contact({ data }: { data: ContactSectionData }) {
  const [sent, setSent] = useState(false);
  const [date, setDate] = useState('');

  return (
    <section id={data.id} className="overflow-hidden bg-[#fffafc] pt-10 sm:pt-14">
      <div className="mx-auto grid max-w-[1100px] items-start gap-8 px-4 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#fde7f1] px-3 py-1 text-[13px] font-semibold text-[#c2186a]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c2186a]" />
            {data.eyebrow}
          </span>
          <h2 className="mt-3 text-[24px] font-bold leading-tight text-[#1d2433] sm:text-[36px] lg:text-[44px]">
            {data.title} <span className="text-[#c2186a]">{data.title_highlight}</span> {data.title_end}
          </h2>
          <p className="mt-2 max-w-[460px] text-[14px] sm:text-[15px] leading-relaxed text-[#6b7280]">{data.description}</p>
          <ul className="mt-6 space-y-5">
            {[
              { icon: 'pin', title: data.location_title, value: data.address, href: '' },
              { icon: 'phone', title: data.call_title, value: data.phone, href: `tel:${data.phone}` },
              { icon: 'mail', title: data.email_title, value: data.email, href: `mailto:${data.email}` },
            ].map((row, index) => (
              <motion.li key={row.title} className="flex gap-3" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#fde7f1] text-[#e11d74]">
                  {row.icon === 'pin' && <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2" /></svg>}
                  {row.icon === 'phone' && <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M6 4h3l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 2-2z" /></svg>}
                  {row.icon === 'mail' && <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 7 9-7" /></svg>}
                </span>
                <div>
                  <p className="font-semibold text-[#1d2433]">{row.title}</p>
                  {row.href ? <a href={row.href} className="text-[14px] text-[#6b7280]">{row.value}</a> : <p className="text-[14px] text-[#6b7280]">{row.value}</p>}
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.form
          className="rounded-[28px] border border-[#f8d5e4] bg-white p-5 shadow-[0_12px_30px_rgba(194,24,106,0.05)] sm:p-7"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <h3 className="text-[20px] sm:text-[26px] lg:text-[30px] font-bold leading-tight text-[#1d2433]">
            {data.form_title} <span className="text-[#c2186a]">{data.form_title_highlight}</span>
          </h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <label className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#e11d74]"><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="8" r="3" /><path d="M5 19c1.2-3 3.4-4.5 7-4.5S17.8 16 19 19" /></svg></span>
              <input required placeholder={data.name_placeholder} className={field} />
            </label>
            <label className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#e11d74]"><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 7 9-7" /></svg></span>
              <input required type="email" placeholder={data.email_placeholder} className={field} />
            </label>
            <label className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#e11d74]"><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M6 4h3l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 2-2z" /></svg></span>
              <input required inputMode="numeric" placeholder={data.phone_placeholder} onChange={(event) => { event.target.value = event.target.value.replace(/\D/g, ''); }} className={field} />
            </label>
            <label className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-[#e11d74]"><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="4" y="6" width="16" height="14" rx="2" /><path d="M8 4v4M16 4v4M4 10h16" /></svg></span>
              {!date && <span className="pointer-events-none absolute left-10 top-1/2 -translate-y-1/2 text-[14px] text-[#9ca3af]">{data.date_placeholder}</span>}
              <input required type="date" value={date} aria-label={data.date_placeholder} onChange={(event) => setDate(event.target.value)} className={`${field} [color-scheme:light] ${date ? 'text-[#374151]' : 'text-transparent [&::-webkit-datetime-edit]:text-transparent'}`} />
            </label>
            <label className="relative sm:col-span-2">
              <span className="pointer-events-none absolute left-3 top-4 text-[#e11d74]"><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M5 6h14v9H8l-3 3z" /></svg></span>
              <textarea required placeholder={data.message_placeholder} className={`${field} h-24 py-3`} />
            </label>
            <motion.button type="submit" whileHover={{ scale: 1.01 }} className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#c2186a] text-[15px] font-semibold text-white sm:col-span-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" /></svg>
              {data.button_text}
            </motion.button>
            {sent && <p className="text-sm text-[#c2186a] sm:col-span-2">{data.success_message}</p>}
          </div>
        </motion.form>
      </div>
      <motion.div className="mt-8 w-full" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
        <iframe title={data.location_title} src={data.map_embed} className="h-[260px] w-full border-0 sm:h-[340px]" />
      </motion.div>
    </section>
  );
}
