import Image from 'next/image'
import { ArrowUpRight, BookOpen, MessageCircle } from 'lucide-react'

const links = [
  {
    label: 'Conheça meu E-book',
    href: 'https://psi-alinisanches.hotmart.host/compreender-para-transformar-um-novo-olhar-a-partir-da-psicanalise-bd93dd81-e21e-4fe1-aa5e-03030b602f8f',
    icon: BookOpen,
  },
  {
    label: 'Conheça meu trabalho',
    href: 'https://psialinisanches.vercel.app',
    icon: ArrowUpRight,
  },
  {
    label: 'Agende sua sessão',
    href: 'https://wa.me/message/F66U6YKUBWWPD1',
    icon: MessageCircle,
  },
]

export default function BioPage() {
  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-[#f7eee8] px-5 py-12 text-[#964b20]">
      <div className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-[#e4c9bb]/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 size-80 rounded-full bg-[#d6b3a5]/40 blur-3xl" />

      <section className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        <div className="relative size-32 overflow-hidden rounded-full border-4 border-white/80 shadow-[0_12px_32px_rgba(117,75,59,0.16)] sm:size-36">
          <Image
            src="/images/alini-hero.png"
            alt="Alini Sanches, psicanalista"
            fill
            priority
            sizes="144px"
            className="object-cover object-center"
          />
        </div>

        <h1 className="mt-6 font-serif text-4xl font-semibold tracking-wide text-[#964b20]">Alini Sanches</h1>
        <p className="mt-1 text-sm font-medium tracking-[0.08em] text-[#967263]">Psicanalista | PUC-SP</p>

        <div className="mt-9 flex w-full flex-col gap-3.5">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-[#964b20] bg-[#964b20] px-5 py-4 text-sm font-medium text-white shadow-[0_5px_18px_rgba(117,75,59,0.16)] transition-all hover:-translate-y-0.5 hover:border-[#783c19] hover:bg-[#783c19] hover:shadow-[0_8px_22px_rgba(117,75,59,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#964b20] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7eee8]"
            >
              <Icon className="size-4 text-white transition-transform group-hover:scale-110" aria-hidden="true" />
              <span>{label}</span>
            </a>
          ))}
        </div>

        <a
          href="https://instagram.com/psi.alinisanches"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram de Alini Sanches"
          className="mt-8 rounded-full p-2 text-[#a87560] transition-colors hover:bg-white/60 hover:text-[#964b20] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a87560]"
        >
          <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
        </a>
        <p className="mt-6 text-[0.68rem] uppercase tracking-[0.25em] text-[#b18b7c]">Escuta, acolhimento e transformação</p>
      </section>
    </main>
  )
}
