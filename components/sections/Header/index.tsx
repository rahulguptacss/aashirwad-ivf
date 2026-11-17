'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { HeaderData } from '../../types';

export default function Header({ data }: { data: HeaderData }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(data.links[0]?.href ?? '#home');

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    setOpen(false);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 280);
  };

  useEffect(() => {
    const onScroll = () => {
      const line = 110;
      let current = data.links[0]?.href ?? '#home';
      data.links.forEach((link) => {
        const section = document.getElementById(link.href.replace('#', ''));
        if (section && section.getBoundingClientRect().top <= line) current = link.href;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [data.links]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between gap-2 px-3 sm:h-[78px] sm:gap-4 sm:px-4">
        <a href="#home" className="min-w-0 shrink">
          <img src={data.logo} alt={data.logo_text} className="h-11 w-auto max-w-[132px] object-contain object-left sm:h-14 sm:max-w-none" />
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {data.links.map((link) => {
            const on = active === link.href;
            return (
              <a key={link.name} href={link.href} className={`relative pb-1 text-[15px] font-medium ${on ? 'text-[#d0126b]' : 'text-[#2a2a2a]'}`}>
                {link.name}
                {on && <span className="absolute -bottom-1 left-0 h-[2px] w-8 rounded-full bg-[#d0126b]" />}
              </a>
            );
          })}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a href={data.button_href} className="inline-flex items-center gap-2 rounded-full bg-[#e11d74] px-4 py-2 text-[14px] font-semibold text-white">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M8 3v4M16 3v4M4 10h16" /></svg>
            {data.button_text}
          </a>
          <a href={data.phone_href} className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#2a2a2a]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fde7f1] text-[#e11d74]">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 4h3l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 2-2z" /></svg>
            </span>
            {data.phone}
          </a>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 lg:hidden">
        <a href={data.button_href} className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#e11d74] px-3 py-2 text-[12px] font-semibold text-white sm:text-[13px]">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M8 3v4M16 3v4M4 10h16" /></svg>
          {data.button_text}
        </a>
        <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full text-[#2a2a2a]" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span className="relative block h-4 w-5">
            <motion.span className="absolute left-0 h-[2px] w-5 rounded-full bg-[#2a2a2a]" animate={{ top: open ? 7 : 0, rotate: open ? 45 : 0 }} />
            <motion.span className="absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-[#2a2a2a]" animate={{ opacity: open ? 0 : 1 }} />
            <motion.span className="absolute left-0 h-[2px] w-5 rounded-full bg-[#2a2a2a]" animate={{ top: open ? 7 : 14, rotate: open ? -45 : 0 }} />
          </span>
        </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="overflow-hidden border-t border-[#f3d5e2] bg-white px-4 lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            <nav className="flex flex-col gap-1 py-3">
              {data.links.map((link, index) => {
                const on = active === link.href;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollTo(link.href);
                    }}
                    className={`rounded-xl px-3 py-2.5 text-[15px] font-medium ${on ? 'bg-[#fff1f6] text-[#d0126b]' : 'text-[#3f3f46]'}`}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * index }}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </nav>
            <div className="flex flex-col gap-3 border-t border-[#f8e4ee] pb-4 pt-3">
              <a href={data.phone_href} className="inline-flex items-center justify-center gap-2 text-[15px] font-semibold text-[#2a2a2a]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fde7f1] text-[#e11d74]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 4h3l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 2-2z" /></svg>
                </span>
                {data.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
