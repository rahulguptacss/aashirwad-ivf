'use client';

import { motion } from 'framer-motion';
import type { FooterData } from '../../types';

function Social({ name }: { name: string }) {
  if (name === 'Instagram') {
    return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.5" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" /></svg>;
  }
  if (name === 'LinkedIn') {
    return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M6.5 9H4V20h2.5V9zM5.2 4A1.6 1.6 0 1 0 5.2 7.2 1.6 1.6 0 0 0 5.2 4zM20 20h-2.5v-5.6c0-1.6-.6-2.6-2-2.6-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20H11V9h2.4v1.5c.4-.7 1.3-1.8 3.2-1.8 2.3 0 4 1.5 4 4.8V20z" /></svg>;
  }
  if (name === 'YouTube') {
    return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M22 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C18.2 5.4 12 5.4 12 5.4s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 9 2 12.2 2 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM10 15.5v-6.6l5.2 3.3L10 15.5z" /></svg>;
  }
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z" /></svg>;
}

export default function Footer({ data }: { data: FooterData }) {
  const contacts = [
    { icon: 'pin', text: data.address, href: '' },
    { icon: 'phone', text: data.phone, href: `tel:${data.phone}` },
    { icon: 'mail', text: data.email, href: `mailto:${data.email}` },
  ];

  return (
    <footer className="bg-[#9d2158] text-white">
      <motion.div className="mx-auto max-w-[980px] px-4 pb-4 pt-10 text-center" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
        <img src={data.logo} alt={data.logo_text} className="mx-auto h-16 w-auto sm:h-20" />
        <p className="mx-auto mt-4 max-w-[640px] text-[14px] leading-7 text-white/90 sm:text-[15px]">{data.description}</p>
        <div className="mx-auto mt-6 flex w-full max-w-[360px] flex-col items-start gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-0">
          {contacts.map((item, index) => (
            <div key={item.icon} className="flex w-full items-center sm:w-auto">
              {index > 0 && <span className="mx-5 hidden h-8 w-px bg-white/40 sm:block" />}
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#9d2158]">
                {item.icon === 'pin' && <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2" /></svg>}
                {item.icon === 'phone' && <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 4h3l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 2-2z" /></svg>}
                {item.icon === 'mail' && <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 7 9-7" /></svg>}
              </span>
              {item.href ? <a href={item.href} className="ml-3 text-left text-[14px] leading-5 sm:ml-2 sm:max-w-[220px]">{item.text}</a> : <span className="ml-3 text-left text-[14px] leading-5 sm:ml-2 sm:max-w-[220px]">{item.text}</span>}
            </div>
          ))}
        </div>
        <nav className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-[14px]">
          {data.links.map((link, index) => (
            <span key={link.name} className="inline-flex items-center">
              {index > 0 && <span className="mr-2 text-white/70">|</span>}
              <a href={link.href} className="hover:underline">{link.name}</a>
            </span>
          ))}
        </nav>
        <div className="mt-5 flex justify-center gap-3">
          {data.socials.map((social) => (
            <a key={social.name} href={social.href} target="_blank" rel="noreferrer" aria-label={social.name} className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#9d2158] transition hover:-translate-y-1 hover:bg-[#1d2433] hover:text-white">
              <Social name={social.name} />
            </a>
          ))}
        </div>
        <div className="mt-6 border-t border-white/20 pt-4 pb-1 text-[13px] sm:text-[14px] text-white/90">
          {data.copyright.includes('Powered by Lestow') ? (
            <>
              {data.copyright.replace('Powered by Lestow', '')}
              <span>Powered by </span>
              <span className="font-semibold text-white">Lestow</span>
            </>
          ) : (
            data.copyright
          )}
        </div>
      </motion.div>
    </footer>
  );
}
