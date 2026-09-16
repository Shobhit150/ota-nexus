'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.09 3.2 5.07 4.48.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.13-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.51 3.61 1.4 5.11L2 22l5.13-1.5a9.88 9.88 0 0 0 4.9 1.31h.01c5.46 0 9.91-4.44 9.91-9.9C21.96 6.46 17.51 2 12.04 2zm0 18.06h-.01a8.15 8.15 0 0 1-4.16-1.14l-.3-.18-3.05.89.9-3-.2-.31a8.14 8.14 0 0 1-1.25-4.4c0-4.5 3.66-8.16 8.17-8.16 2.18 0 4.23.85 5.77 2.4a8.1 8.1 0 0 1 2.39 5.77c0 4.51-3.67 8.13-8.26 8.13z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

const actions = [
  {
    key: 'phone',
    label: 'Call us',
    icon: PhoneIcon,
    href: (contact) => contact.phone,
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    icon: WhatsAppIcon,
    href: (contact) => contact.whatsapp,
  },
];

export default function FloatingContact({ whatsapp, phone }) {
  const [open, setOpen] = useState(false);
  const contact = { whatsapp, phone };

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open &&
          actions.map((action, i) => (
            <motion.a
              key={action.key}
              href={action.href(contact)}
              target={action.key === 'whatsapp' ? '_blank' : undefined}
              rel={action.key === 'whatsapp' ? 'noreferrer' : undefined}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 28 }}
              transition={{ duration: 0.32, ease, delay: i * 0.05 }}
              className="flex items-center gap-2.5 bg-[#f6f1e7] py-2.5 pl-3.5 pr-4 text-[#12181b] shadow-[0_8px_24px_rgba(0,0,0,0.28)]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#12181b] text-[#f6f1e7]">
                <action.icon />
              </span>
              <span className="text-[12.5px] font-medium">{action.label}</span>
            </motion.a>
          ))}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.94 }}
        aria-expanded={open}
        aria-label={open ? 'Close contact options' : 'Contact us'}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#b8874a] text-[#12181b] shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
      >
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.25, ease }}
        >
          {open ? <CloseIcon /> : <PhoneIcon />}
        </motion.span>
      </motion.button>
    </div>
  );
}